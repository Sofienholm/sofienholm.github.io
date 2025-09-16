// src/pages/Contact.jsx
import React from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";


const easing = { type: "spring", stiffness: 90, damping: 16 };
const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { ...easing },
};

export default function Contact() {
  return (
    <main className={styles.contactPage}>
      {/* HERO */}
      <section className={`${styles.typoHero} ${styles.container}`}>
        <p className={styles.kicker}>contact</p>
        <motion.h1 className={styles.big} {...fadeUp}>
          Lad os skabe noget
          <br /> sammen
        </motion.h1>
        <motion.p
          className={styles.sub}
          {...fadeUp}
          transition={{ delay: 0.05, ...easing }}
        >
          — Jeg svarer altid gerne på mail eller via LinkedIn
        </motion.p>
      </section>

      {/* INTRO */}
      <section className={`${styles.contactIntro} ${styles.container}`}>
        <motion.p className={styles.lead} {...fadeUp}>
          Jeg er altid åben for nye projekter, sparring eller bare en snak om
          design og frontend. Du kan fange mig her:
        </motion.p>
      </section>

      {/* CTA LINKS */}
      <section className={`${styles.contactLinks} ${styles.container}`}>
        <motion.a
          href="mailto:mail@ditdomæne.dk"
          className={`${styles.btn} ${styles.btnSolid}`}
          {...fadeUp}
        >
          ✉️ mail@ditdomæne.dk
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/dinprofil"
          target="_blank"
          rel="noreferrer"
          className={`${styles.btn} ${styles.btnGhost}`}
          {...fadeUp}
          transition={{ delay: 0.1, ...easing }}
        >
          🔗 LinkedIn
        </motion.a>
      </section>
    </main>
  );
}
