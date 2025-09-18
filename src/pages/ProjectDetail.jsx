import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./ProjectDetail.module.css";

const toArray = (v) => (Array.isArray(v) ? v : v ? [v] : []);
const asFeature = (f) => (typeof f === "string" ? { image: f } : f || {});
const ensureAbs = (p) => (p?.startsWith("/") ? p : `/${p || ""}`);

function LottieBox({ src, w = 300, h = 300, loop = true, autoplay = true }) {
  const ref = useRef(null);

  useEffect(() => {
    const init = () => {
      if (!ref.current || !window.lottie) return;
      const anim = window.lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop,
        autoplay,
        path: src,
      });
      return () => anim?.destroy();
    };

    if (!window.lottie) {
      const s = document.createElement("script");
      s.src = "https://unpkg.com/lottie-web/build/player/lottie_light.min.js";
      s.onload = init;
      document.head.appendChild(s);
      return () => {};
    } else {
      return init();
    }
  }, [src, loop, autoplay]);

  return (
    <div ref={ref} style={{ width: w, height: h, pointerEvents: "none" }} />
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  // Hent data
  useEffect(() => {
    (async () => {
      const data = await (await fetch("/data/projects.json")).json();
      setProject(data.find((p) => String(p.id) === String(id)) || null);
    })();
  }, [id]);

  // Loader <model-viewer> én gang, kun hvis nødvendig
  useEffect(() => {
    if (!customElements.get?.("model-viewer")) {
      const s = document.createElement("script");
      s.type = "module";
      s.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
      document.head.appendChild(s);
    }
  }, []);

  if (!project) {
    return (
      <main className={styles.page}>
        <nav className={styles.top}>
          <Link to="/projects" className={styles.back}>
            ← TILBAGE
          </Link>
        </nav>
        <h1 className={styles.title}>Projekt ikke fundet</h1>
      </main>
    );
  }

  const imgs = project.gallery?.length
    ? project.gallery
    : project.image
    ? [project.image]
    : [];
  let features = toArray(project.feature).map(asFeature);
  if (!features.length && imgs[1]) features = [{ image: imgs[1] }];

  const stack = [
    ...(project.tech || project.tags || []),
    ...(project.tools || []),
  ];
  const illustrations = toArray(project.illustrations);

  const used = new Set(
    [imgs[0], ...features.map((f) => f.image)].filter(Boolean)
  );
  const rest = imgs.filter((im) => im !== imgs[0] && !used.has(im));

  return (
    <main className={styles.page}>
      <nav className={styles.top}>
        <Link to="/projects" className={styles.back}>
          ← TILBAGE
        </Link>
        <h1 className={styles.title}>{project.title}</h1>
      </nav>

      {/* HERO */}
      {imgs[0] && (
        <section className={styles.hero}>
          <img src={ensureAbs(imgs[0])} alt={project.title} />
          {project.description && <p>{project.description}</p>}
        </section>
      )}

      {/* FEATURES — understøtter nu kode + 3D-model */}

      {features.map((f, i) => (
        <section key={i} className={styles.feature}>
          {f.title && (
            <div className={styles.titleRow}>
              <h3>{f.title}</h3>
              <span className={styles.rule} />
            </div>
          )}
          <div className={styles.featureText}>
            {f.text && <p>{f.text}</p>}
            {f.code && (
              <pre className={styles.codeBubble}>
                <code>{f.code}</code>
              </pre>
            )}
          </div>
          <div className={styles.featureVisual}>
            {Array.isArray(f.video) &&
              f.video.map((vid, index) => (
                <iframe
                  key={index}
                  src={vid}
                  width="640"
                  height="360"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={`${f.title}-video-${index}`}
                ></iframe>
              ))}

            {/* Hvis f.video er en streng (enkelt link) */}
            {typeof f.video === "string" && (
              <iframe
                src={f.video}
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={f.title}
              ></iframe>
            )}

            {!f.video && f.image && (
              <img
                className={styles.featureImg}
                src={ensureAbs(f.image)}
                alt={`${project.title} feature`}
              />
            )}
            {/* 3D model (valgfri) */}
            {f.model?.src && (
              <model-viewer
                className={styles.model}
                src={ensureAbs(f.model.src)}
                alt={f.model.alt || "3D model"}
                auto-rotate
                camera-controls
                disable-pan
                disable-zoom
                camera-orbit="0deg 90deg 2m"
                min-camera-orbit="auto 90deg auto"
                max-camera-orbit="auto 90deg auto"
              ></model-viewer>
            )}
          </div>
        </section>
      ))}

      {/* STACK */}
      {(stack.length || illustrations.length) && (
        <section className={styles.stack}>
          <div className={styles.titleRow}>
            <h3>Anvendte teknologier & værktøjer</h3>
            <span className={styles.rule} />
          </div>
          {!!stack.length && (
            <ul className={styles.chips}>
              {stack.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          )}
          {!!illustrations.length && (
            <div className={styles.illus}>
              {illustrations.map((item, n) => {
                // A) Objekt: { lottie, w, h, loop, autoplay }
                if (item && typeof item === "object" && item.lottie) {
                  return (
                    <LottieBox
                      key={n}
                      src={ensureAbs(item.lottie)}
                      w={item.w ?? 300}
                      h={item.h ?? 300}
                      loop={item.loop ?? true}
                      autoplay={item.autoplay ?? true}
                    />
                  );
                }
                // B) String der ender på .json => Lottie
                if (typeof item === "string" && /\.json(\?.*)?$/i.test(item)) {
                  return <LottieBox key={n} src={ensureAbs(item)} />;
                }
                // C) Ellers almindeligt billede
                return (
                  <img
                    key={n}
                    src={ensureAbs(item)}
                    alt={`Illustration ${n + 1}`}
                  />
                );
              })}
            </div>
          )}
        </section>
      )}

      {!!rest.length && (
        <section className={styles.gallery}>
          <div className={styles.titleRow}>
            <h3>Flere billeder</h3>
            <span className={styles.rule} />
          </div>
          <div className={styles.galleryGrid}>
            {rest.map((g, i) => (
              <img
                key={i}
                src={ensureAbs(g)}
                alt={`${project.title} ${i + 1}`}
              />
            ))}
          </div>
        </section>
      )}

      <nav className={styles.bottom}>
        <Link to="/projects" className={styles.back}>
          ← TILBAGE
        </Link>
      </nav>
    </main>
  );
}
