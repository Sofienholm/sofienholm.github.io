import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import imgPortrait2 from "../assets/portrait.jpg";
import imgPortrait3 from "../assets/aboutme.png";
import SkillsSection from "../Components/SkillsSection";

const _motion = motion;

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function About() {
  return (
    <main className={styles.about}>
      {/* Intro */}
      <section className={styles.wrap}>
        <motion.h1 className={styles.title} {...fade}>
          OM MIG
        </motion.h1>

        <div className={styles.grid}>
          <motion.img
            {...fade}
            src={imgPortrait2}
            alt="Portræt"
            className={styles.photo}
            loading="eager"
          />

          <motion.div className={styles.copy} {...fade}>
            <p>
              Jeg bygger enkle, rolige web-oplevelser med{" "}
              <strong>HTML, CSS, JS og React</strong>. Mit sweet spot er klar
              typografi, simple grids og små mikroanimationer, der føles
              naturlige.
            </p>
            <p>
              Jeg arbejder på projekter hvor <em>branding</em> og{" "}
              <em>interface</em> hænger sammen og går efter løsninger, der er
              lette at forstå, bruge og vedligeholde.
            </p>

            <div className={styles.links}>
              <a className={styles.link} href="mailto:sofienholm@gmail.com">
                Email
              </a>
              <a
                className={styles.link}
                href="https://www.linkedin.com/in/sofie-holm-286101356/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills + Tools */}
      <SkillsSection />

      {/* Pitch-blok (blå tekst + billede til højre) */}
      <section className={styles.pitch}>
        <motion.p className={styles.pitchText} {...fade}>
          jeg er drevet af systemer og detaljer, og det var præcis derfor kode
          fangede mig, at kunne tage et design og gøre det logisk, brugbart og
          levende i browseren.
        </motion.p>

        <motion.img
          {...fade}
          src={imgPortrait3}
          alt="Portræt"
          className={styles.pitchImg}
          loading="lazy"
        />
      </section>

      {/* CTA i bunden */}
      <section className={styles.cta} id="contact">
        <motion.h2 {...fade}>Vil du høre mere?</motion.h2>
        <motion.p className={styles.ctaLead} {...fade}>
          Jeg er altid frisk på at tale idéer, projekter eller samarbejde.
        </motion.p>
        <motion.p className={styles.ctaSmall} {...fade}>
          Fang mig på{" "}
          <a className={styles.ctaEmail} href="mailto:sofienholm@gmail.com">
            sofienholm@gmail.com
          </a>
        </motion.p>
      </section>
    </main>
  );
}
