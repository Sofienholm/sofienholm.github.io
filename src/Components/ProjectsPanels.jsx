import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPanels() {
  const [projects, setProjects] = useState([]);
  const wrapRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("/data/projects.json");
      const data = await res.json();
      setProjects(data);
    })();
  }, []);

  // Custom cursor follow
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const update = () => {
      const dt = 1 - Math.pow(1 - 0.25, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    };

    window.addEventListener("mousemove", onMove);
    gsap.ticker.add(update);

    return () => {
      window.removeEventListener("mousemove", onMove);
      gsap.ticker.remove(update);
    };
  }, []);

  // GSAP scroll animations
  useLayoutEffect(() => {
    if (!wrapRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".panel").forEach((panel) => {
        // progress var
        gsap.fromTo(
          panel,
          { "--progress": 0 },
          {
            "--progress": 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        // fade/slide ind
        gsap.fromTo(
          panel.querySelector(".title"),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
        gsap.fromTo(
          panel.querySelector(".desc"),
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
        gsap.fromTo(
          panel.querySelector(".cta"),
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          }
        );

        // let parallax
        const img = panel.querySelector("img");
        if (img) {
          gsap.to(img, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    }, wrapRef);

    return () => ctx.revert();
  }, [projects]);

  // cursor hover states
  useEffect(() => {
    const root = wrapRef.current;
    const cursor = cursorRef.current;
    if (!root || !cursor) return;

    const enter = () => cursor.classList.add("active");
    const leave = () => cursor.classList.remove("active");
    const linkEnter = () => cursor.classList.add("linkhover");
    const linkLeave = () => cursor.classList.remove("linkhover");

    const panels = root.querySelectorAll(".panel");
    const links = root.querySelectorAll("a, button");

    panels.forEach((p) => {
      p.addEventListener("mouseenter", enter);
      p.addEventListener("mouseleave", leave);
    });
    links.forEach((l) => {
      l.addEventListener("mouseenter", linkEnter);
      l.addEventListener("mouseleave", linkLeave);
    });

    return () => {
      panels.forEach((p) => {
        p.removeEventListener("mouseenter", enter);
        p.removeEventListener("mouseleave", leave);
      });
      links.forEach((l) => {
        l.removeEventListener("mouseenter", linkEnter);
        l.removeEventListener("mouseleave", linkLeave);
      });
    };
  }, [projects]);

  return (
    <section className="projects-panels" ref={wrapRef}>
      <div className="intro">
        <h2>Projects</h2>
        <p className="lead">
          Scroll for at udforske cases. Klik for at se detaljer.
        </p>
      </div>

      <div className="panels">
        {projects.map((p, i) => (
          <article className={`panel ${i % 2 ? "is-even" : ""}`} key={p.id}>
            <div className="thumb">
              <img src={p.image} alt={p.title} loading="lazy" />
            </div>
            <div className="copy">
              <h3 className="title">
                {p.title} <span className="year">· {p.year}</span>
              </h3>
              <p className="desc">{p.description}</p>
              <NavLink to={`/projects/${p.id}`} className="cta">
                Se detaljer
              </NavLink>
            </div>
            <div className="outline" aria-hidden>
              Portfolio
            </div>
          </article>
        ))}
      </div>

      <div id="cursor" ref={cursorRef} />
    </section>
  );
}
