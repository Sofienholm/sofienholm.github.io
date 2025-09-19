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
              Jeg er Sofie, 22 år, multimediedesign studerende med hænderne i
              både design og programering. Jeg elsker at programere sider op fra
              bunden og skabe smukke tekniske løsninger Når jeg først er i gang,
              forsvinder jeg let i et projekt, og jeg går ikke videre, før
              detaljerne sidder.
            </p>
            <p>
              Jeg er kreativ af natur og arbejder systematisk med mine idéer,
              fra tanke til færdigt resultat. Jeg trives i teams med tempo og
              samarbejde, men tager også gerne selvstændigt ansvar. Mit arbejde
              kendetegnes af struktur, sans for detaljer og en drivkraft i at
              gøre idéer konkrete og brugbare
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
          Jeg er nysgerrig og lærer hurtigt, især når jeg kan afprøve nye
          teknologier. Jeg bidrager med energi og engagement i teams og nyder at
          skabe og udvikle sammen med andre. Udenfor studiet er jeg enten med
          venner og familie eller i gang med projekter hjemme, hvor jeg følger
          mine idéer og bygger videre på dem.”
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
