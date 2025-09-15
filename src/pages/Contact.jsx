// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const easing = { type: "spring", stiffness: 90, damping: 16 };
const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { ...easing },
};

export default function Contact() {
  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="typo-hero container">
        <p className="kicker">contact</p>
        <motion.h1 className="big" {...fadeUp}>
          Lad os skabe noget
          <br /> sammen
        </motion.h1>
        <motion.p
          className="sub"
          {...fadeUp}
          transition={{ delay: 0.05, ...easing }}
        >
          — Jeg svarer altid gerne på mail eller via LinkedIn
        </motion.p>
      </section>

      {/* INTRO */}
      <section className="contact-intro container">
        <motion.p className="lead" {...fadeUp}>
          Jeg er altid åben for nye projekter, sparring eller bare en snak om
          design og frontend. Du kan fange mig her:
        </motion.p>
      </section>

      {/* CTA LINKS */}
      <section className="contact-links container">
        <motion.a
          href="mailto:mail@ditdomæne.dk"
          className="btn solid"
          {...fadeUp}
        >
          ✉️ mail@ditdomæne.dk
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/dinprofil"
          target="_blank"
          rel="noreferrer"
          className="btn ghost"
          {...fadeUp}
          transition={{ delay: 0.1, ...easing }}
        >
          🔗 LinkedIn
        </motion.a>
      </section>
    </main>
  );
}
