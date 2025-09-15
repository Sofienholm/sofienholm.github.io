// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import SkillsSection from "../Components/SkillsSection";
import "./About.css";

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
    <main className="about">
      {/* HERO — stor typografi + ghost-ord i baggrunden */}
      <section className="typo-hero container">
        <p className="kicker">about</p>

        <motion.h1 className="big" {...fadeUp}>
          Designer først
          <br />
          front-ender altid
          <br />
          <span className="amp">&</span> personligt investeret
        </motion.h1>

        <motion.p
          className="sub"
          {...fadeUp}
          transition={{ delay: 0.05, ...easing }}
        >
          — minimalistisk UI, fine detaljer, ren React
        </motion.p>
      </section>

      {/* INTRO SPLIT — billede + tekst, med overlap/luft */}
      <section className="intro container">
        <motion.div className="intro-media" {...fadeUp}>
          <img
            src="/assets/about/me-portrait.jpg"
            alt="Portræt"
            className="intro-img"
            width="1200"
            height="1600"
            loading="eager"
          />
        </motion.div>

        <motion.div className="intro-copy" {...stagger}>
          <motion.h2
            variants={{
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
            }}
          >
            Jeg bygger simple, rolige webløsninger
          </motion.h2>

          <motion.p
            variants={{
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
            }}
          >
            Fokus: klare hierarkier, grid-disciplin og mikro-animationer. Stack:{" "}
            <strong>HTML, CSS, JavaScript, React</strong>. Ingen tunge
            frameworks.
          </motion.p>

          <motion.p
            variants={{
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
            }}
          >
            Målet: løsninger der <em>føles</em> lette — at bruge og
            vedligeholde.
          </motion.p>

          <motion.div
            className="cta-row"
            variants={{
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
            }}
          >
            <a className="btn solid" href="mailto:mail@ditdomæne.dk">
              Skriv en mail
            </a>
            <a
              className="btn ghost"
              href="/assets/cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Åbn CV
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS — lille “wow”-bånd + hover lift */}
      <section className="stats container" aria-label="Hurtige facts">
        {[
          { num: "10+", label: "komponenter i mit UI-kit" },
          { num: "4", label: "kerne-skills: HTML, CSS, JS, React" },
          { num: "∞", label: "kærlighed til detaljer" },
        ].map((s, i) => (
          <motion.div
            className="stat"
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.05 * i, ...easing }}
            whileHover={{ y: -4 }}
          >
            <div className="stat__num">{s.num}</div>
            <div className="stat__label">{s.label}</div>
          </motion.div>
        ))}
      </section>

      {/* SKILLS — din komponent */}
      <section className="skills container">
        <h2 className="visually-hidden">Færdigheder</h2>
        <SkillsSection />
      </section>

      {/* QUOTE / STATEMENT — med dekorativ baggrund */}
      <section className="quote container">
        <motion.blockquote {...fadeUp}>
          “Simple flader. Små detaljer. Ren front-end.”
        </motion.blockquote>
      </section>

      {/* CTA */}
      <section className="contact container">
        <motion.h3 {...fadeUp}>Klar på et projekt?</motion.h3>
        <motion.a
          className="btn solid"
          href="mailto:mail@ditdomæne.dk"
          {...fadeUp}
        >
          Lad os snakke
        </motion.a>
      </section>
    </main>
  );
}
