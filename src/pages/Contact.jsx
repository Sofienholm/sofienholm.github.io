import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const _motion = motion;
const ease = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

export default function Contact() {
  return (
    <main className={styles.contact}>
      <section className={styles.wrap}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ease, delay: 0.05 }}
        >
          KONTAKT
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ease, delay: 0.2 }}
        >
          Lad os skabe noget sammen
        </motion.p>
      </section>

      <section className={styles.cta}>
        <motion.p
          className={styles.bigline}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={ease}
        >
          Jeg svarer altid gerne på{" "}
          <a href="mailto:SOFIENHOLM@GMAIL.COM">mail</a> eller på{" "}
          <a
            href="https://www.linkedin.com/in/sofie-holm-286101356/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </motion.p>
      </section>
    </main>
  );
}
