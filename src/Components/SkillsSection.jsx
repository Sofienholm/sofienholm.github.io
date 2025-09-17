import React from "react";
import styles from "./SkillsSection.module.css";

const skills = [
  { title: "HTML", meta: "Semantic • Structure" },
  { title: "CSS", meta: "Flexbox • Grid" },
  { title: "JS", meta: "ES6 • DOM" },
  { title: "REACT", meta: "Hooks • SPA" },
];

const tools = [
  { title: "VS Code", meta: "Kode • Debug" },
  { title: "Git & GitHub", meta: "Branches • Deployment" },
  { title: "Figma", meta: "Prototyper" },
  { title: "Illustrator", meta: "Logo • Illustrationer • Vektorer" },
  { title: "Photoshop", meta: "Billedretouch • Mockups" },
];

export default function SkillsSection() {
  return (
    <section className={styles.wrap} aria-label="Skills og Tools">
      {/* SKILLS */}
      <div className={styles.titleRow}>
        <h2 className={styles.heading}>SKILLS</h2>
        <span className={styles.rule} />
      </div>

      <div className={styles.skillsRow}>
        {skills.map((s) => (
          <div key={s.title} className={styles.card}>
            <div className={styles.cardTitle}>{s.title}</div>
            <div className={styles.cardMeta}>{s.meta}</div>
          </div>
        ))}
      </div>

      {/* TOOLS */}
      <div className={`${styles.titleRow} ${styles.toolsTop}`}>
        <h2 className={styles.heading}>TOOLS</h2>
        <span className={styles.rule} />
      </div>

      <div className={styles.toolsGrid}>
        {tools.map((t) => (
          <div key={t.title} className={styles.card}>
            <div className={styles.cardTitle}>{t.title}</div>
            <div className={styles.cardMeta}>{t.meta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
