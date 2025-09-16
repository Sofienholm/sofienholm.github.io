import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ProjectDetail.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail() {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const caseRef = useRef(null);

  // Fetch alle projekter (samme kilde som på oversigten)
  useEffect(() => {
    let isMounted = true;
    (async () => {
      const res = await fetch("/data/projects.json");
      const data = await res.json();
      if (isMounted) setProjects(data);
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  // Find projektet på id (num eller string – supportér begge)
  const project = useMemo(() => {
    const numId = Number(id);
    return projects.find((p) => p.id === numId || String(p.id) === String(id));
  }, [projects, id]);

  // GSAP: reveal + parallax
  useLayoutEffect(() => {
    if (!project) return;
    const ctx = gsap.context(() => {
      // fade-up reveals
      gsap.utils.toArray(`.${styles.reveal}`).forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // rolig parallax på billeder
      gsap.utils.toArray(`.${styles.parallax}`).forEach((wrap) => {
        const img = wrap.querySelector("img");
        if (!img) return;
        gsap.to(img, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, caseRef);
    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return (
      <main className={styles.case}>
        <div className={styles.notFound}>
          <p>Kunne ikke finde projektet.</p>
          <Link to="/projects" className={styles.backLink}>
            Tilbage til projekter
          </Link>
        </div>
      </main>
    );
  }

  // Fallbacks hvis dine data ikke (endnu) har alle felter
  const {
    title,
    year,
    description,
    tags = [],
    image,
    gallery = [],
    client,
    mandate,
    approach,
    results,
    meta = {}, // { location, services:[], credits:[] }
    links = [], // [{url, text}]
  } = project;

  const images = gallery.length ? gallery : image ? [image] : [];

  return (
    <main ref={caseRef} className={styles.case}>
      {/* HERO */}
      <header className={`${styles.hero} ${styles.reveal}`}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.tags}>
          {tags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
          {year && <span className={styles.year}>{year}</span>}
        </div>
        {description && <p className={styles.lead}>{description}</p>}
        {links.length > 0 && (
          <div className={styles.links}>
            {links.map((l, i) => (
              <a
                key={i}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className={styles.cta}
              >
                {l.text}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* FULDBREDDE HERO-BILLEDE */}
      {images[0] && (
        <div className={`${styles.fullBleed} ${styles.parallax}`}>
          <img src={`/${images[0].replace(/^\/?/, "")}`} alt={title} />
        </div>
      )}

      {/* FIRE-BOKS SEKTION – Client / Mandate / Approach / Results */}
      {(client || mandate || approach || results) && (
        <section className={`${styles.gridFour} ${styles.reveal}`}>
          {client && (
            <div>
              <h3>Client</h3>
              <p>{client}</p>
            </div>
          )}
          {mandate && (
            <div>
              <h3>Mandate</h3>
              <p>{mandate}</p>
            </div>
          )}
          {approach && (
            <div>
              <h3>Approach</h3>
              <p>{approach}</p>
            </div>
          )}
          {results && (
            <div>
              <h3>Results</h3>
              <p>{results}</p>
            </div>
          )}
        </section>
      )}

      {/* MERE INDHOLD / GALLERI I FULDBREDDE BLOKKE */}
      {images.slice(1).map((src, i) => (
        <div key={i} className={`${styles.fullBleed} ${styles.parallax}`}>
          <img
            src={`/${src.replace(/^\/?/, "")}`}
            alt={`${title} – image ${i + 2}`}
          />
        </div>
      ))}

      {/* META-PANEL (Additional information / Credits) */}
      {(meta?.location || meta?.services?.length || meta?.credits?.length) && (
        <aside className={`${styles.meta} ${styles.reveal}`}>
          <div>
            <h4>Location</h4>
            <p>{meta.location}</p>
          </div>
          <div>
            <h4>Year</h4>
            <p>{year}</p>
          </div>
          {meta?.services?.length ? (
            <div>
              <h4>Services</h4>
              <ul>
                {meta.services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {meta?.credits?.length ? (
            <div className={styles.credits}>
              <h4>Credits</h4>
              <ul>
                {meta.credits.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      )}

      <nav className={styles.bottomNav}>
        <Link to="/projects" className={styles.backLink}>
          ← Tilbage til projekter
        </Link>
      </nav>
    </main>
  );
}
