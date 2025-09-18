import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const _motion = motion; 

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const r = await fetch("/data/projects.json");
      setProjects(await r.json());
    })();
  }, []);

  const fade = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <section className={styles.section}>
      <motion.h2 className={styles.headline} {...fade}>
        PROJEKTER
      </motion.h2>

      {projects.map((p, i) => (
        <div key={p.id} className={`${styles.row} ${i % 2 ? styles.rev : ""}`}>
          {/* blå "svævende" titel */}
          <motion.h3 className={styles.kicker} {...fade}>
            {p.title}
          </motion.h3>

          <motion.img
            className={styles.img}
            src={p.image}
            alt={p.title}
            {...fade}
          />

          <motion.div className={styles.copy} {...fade}>
            <p className={styles.desc}>{p.description}</p>
            <NavLink to={`/projects/${p.id}`} className={styles.cta}>
              SE DETALJER
            </NavLink>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
