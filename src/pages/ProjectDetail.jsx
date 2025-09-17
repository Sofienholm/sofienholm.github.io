import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./ProjectDetail.module.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await (await fetch("/data/projects.json")).json();
      setProject(data.find((p) => String(p.id) === String(id)) || null);
    })();
  }, [id]);

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

  const src = (p) => (p?.startsWith("/") ? p : `/${p || ""}`);
  const imgs = project.gallery?.length
    ? project.gallery
    : project.image
    ? [project.image]
    : [];
  const featureImg = project.feature?.image || imgs[1];
  const stack = [
    ...(project.tech || project.tags || []),
    ...(project.tools || []),
  ];
  const illustrations = project.illustrations || [];
  const rest = imgs.filter((im, i) => i !== 0 && im !== featureImg);

  return (
    <main className={styles.page}>
      <nav className={styles.top}>
        <Link to="/projects" className={styles.back}>
          ← TILBAGE
        </Link>
        <h1 className={styles.title}>{project.title}</h1>
      </nav>

      {imgs[0] && (
        <section className={styles.hero}>
          <img src={src(imgs[0])} alt={project.title} />
          {project.description && <p>{project.description}</p>}
        </section>
      )}

      {featureImg && (
        <section className={styles.feature}>
          <img src={src(featureImg)} alt="Udvalgt element" />
          {(project.feature?.title || project.feature?.text) && (
            <div>
              {project.feature?.title && <h3>{project.feature.title}</h3>}
              {project.feature?.text && <p>{project.feature.text}</p>}
            </div>
          )}
        </section>
      )}

      {stack.length || illustrations.length ? (
        <section className={styles.stack}>
          <h3>Anvendte teknologier & værktøjer</h3>
          {!!stack.length && (
            <ul className={styles.chips}>
              {stack.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          )}
          {!!illustrations.length && (
            <div className={styles.illus}>
              {illustrations.map((i, n) => (
                <img key={n} src={src(i)} alt={`Illustration ${n + 1}`} />
              ))}
            </div>
          )}
        </section>
      ) : null}

      {!!rest.length && (
        <section className={styles.gallery}>
          {rest.map((g, i) => (
            <img key={i} src={src(g)} alt={`${project.title} ${i + 1}`} />
          ))}
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
