import React from "react";
import styles from "./SkillsSection.module.css";

const skills = [
  { icon: "x", title: "HTML", meta: "Semantic · Structure" },
  { icon: "x", title: "CSS", meta: "Flexbox · Grid" },
  { icon: "x", title: "JavaScript", meta: "ES6 · DOM" },
  { icon: "x", title: "React", meta: "Hooks · SPA" },
];

export default function SkillsSection() {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.skillsHeader}>
        <div>
          <p className={styles.kicker}>Capabilities</p>
          <h2>Skills</h2>
        </div>
        <div className={styles.muted}>Tools & frameworks I use</div>
      </div>

      <div className={styles.skillsGrid}>
        {skills.map((s) => (
          <div key={s.title} className={styles.skillCard}>
            <div className={styles.skillIcon}>{s.icon}</div>
            <h5>{s.title}</h5>
            <p className={styles.muted}>{s.meta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
