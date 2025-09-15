// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import SkillsSection from "../Components/SkillsSection";
import styles from "./About.module.css";

const easing = { type: "spring", stiffness: 90, damping: 16 };
const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { ...easing },
};
const stagger = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { staggerChildren: 0.08, delayChildren: 0.05, ...easing },
};

export default function About() {
  return (
    <main className={styles.about}>
      {/* HERO */}
      <section className={`${styles.typoHero} ${styles.container}`}>
        <p className={styles.kicker}>about</p>
        <motion.h1 className={styles.big} {...fadeUp}>
          Designer først
          <br />
          front-ender altid
          <br />
          <span className={styles.amp}>&</span> personligt investeret
        </motion.h1>
        <motion.p
          className={styles.sub}
          {...fadeUp}
          transition={{ delay: 0.05, ...easing }}
        >
          — minimalistisk UI, fine detaljer, ren React
        </motion.p>
      </section>

      {/* INTRO */}
      <section className={`${styles.intro} ${styles.container}`}>
        <motion.div {...fadeUp}>
          <img
            src="/assets/about/me-portrait.jpg"
            alt="Portræt"
            className={styles.introImg}
            width="1200"
            height="1600"
            loading="eager"
          />
        </motion.div>

        <motion.div className={styles.introCopy} {...stagger}>
          <motion.h2>Jeg bygger simple, rolige webløsninger</motion.h2>
          <motion.p>
            Fokus: klare hierarkier, grid-disciplin og mikro-animationer. Stack:{" "}
            <strong>HTML, CSS, JavaScript, React</strong>.
          </motion.p>
          <motion.p>
            Målet: løsninger der <em>føles</em> lette — at bruge og
            vedligeholde.
          </motion.p>
          <motion.div className={styles.ctaRow}>
            <a
              className={`${styles.btn} ${styles.btnSolid}`}
              href="mailto:mail@ditdomæne.dk"
            >
              Skriv en mail
            </a>
            <a
              className={`${styles.btn} ${styles.btnGhost}`}
              href="/assets/cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Åbn CV
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
      <section
        className={`${styles.stats} ${styles.container}`}
        aria-label="Hurtige facts"
      >
        {[
          { num: "10+", label: "komponenter i mit UI-kit" },
          { num: "4", label: "kerne-skills: HTML, CSS, JS, React" },
          { num: "∞", label: "kærlighed til detaljer" },
        ].map((s, i) => (
          <motion.div
            key={i}
            className={styles.stat}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
          >
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </motion.div>
        ))}
      </section>

      {/* SKILLS */}
      <section className={`${styles.skills} ${styles.container}`}>
        <h2 className={styles.visuallyHidden}>Færdigheder</h2>
        <SkillsSection />
      </section>

      {/* QUOTE */}
      <section className={`${styles.quote} ${styles.container}`}>
        <motion.blockquote {...fadeUp}>
          “Simple flader. Små detaljer. Ren front-end.”
        </motion.blockquote>
      </section>

      {/* CTA */}
      <section className={`${styles.contact} ${styles.container}`}>
        <motion.h3 {...fadeUp}>Klar på et projekt?</motion.h3>
        <motion.a
          className={`${styles.btn} ${styles.btnSolid}`}
          href="mailto:mail@ditdomæne.dk"
        >
          Lad os snakke 
        </motion.a>
      </section>
    </main>
  );
}
