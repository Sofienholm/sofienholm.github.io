// ProjectsCarousel.jsx
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ProjectsCarousel.module.css"; // CSS module

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsCarousel() {
  const [projects, setProjects] = useState([]);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/data/projects.json");
      const data = await response.json();
      setProjects(data);
    }
    getData();
  }, []);

  useEffect(() => {
    if (projects.length === 0) return;

    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    const panels = panelsRef.current;

    const containerWidth = wrapper.scrollWidth;
    const viewportWidth = window.innerWidth;
    const horizontalDistance = containerWidth - viewportWidth;

    const scrollTween = gsap.to(wrapper, {
      x: -horizontalDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.5,
        end: () => `+=${containerWidth}`,
      },
    });

    panels.forEach((panelEl) => {
      if (!panelEl) return;
      gsap.fromTo(
        panelEl,
        {
          autoAlpha: 0,
          y: 50,
        },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panelEl,
            containerAnimation: scrollTween,
            start: "left 80%",
            end: "left 30%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      scrollTween.kill();
    };
  }, [projects]);

  return (
    // i ProjectsCarousel.jsx
    <section ref={containerRef} className={styles.projectsSection}>

      <div ref={wrapperRef} className={styles.wrapper}>
        {projects.map((p, i) => (
          <article
            key={p.id}
            ref={(el) => (panelsRef.current[i] = el)}
            className={styles.panel}
          >
            <img className={styles.media} src={p.image} alt={p.title} />
            <div className={styles.content}>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>{p.title}</h3>
                <span className={styles.year}>{p.year}</span>
              </div>
              <p className={styles.desc}>{p.description}</p>

              <div className={styles.tags}>
                {p.tags?.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>

              <NavLink className={styles.link} to={`/projects/${p.id}`}>
                Se detaljer
              </NavLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
