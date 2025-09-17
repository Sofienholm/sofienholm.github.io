import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import imgBike from "../assets/bike.jpg";
import imgPortrait from "../assets/portrait.jpg";
import imgNotebook from "../assets/notebook.jpg";
import imgLaptop from "../assets/laptop.jpg";

export default function Hero() {
  // Titlen: ease matcher din CodePen-vibe
  const ease = [0.65, 0.05, 0.36, 1];

  // Gridens børn (billeder) – glider op i forskudt rækkefølge
  const container = {
    hidden: {},
    show: {
      transition: {
        // vent til titlen er landet (ca. 1.0s + 0.25s delay ≈ 1.25s)
        delayChildren: 1.25,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
  };

  return (
    <section className={styles.hero}>
      {/* TITEL: starter ~52vh og glider op til ~12vh */}
      <motion.h1
        className={styles.title}
         initial={{ opacity: 0, top: "40vh" }}
         animate={{ opacity: 1, top: "12vh" }}
         transition={{
          ease,
          duration: 1.2,
          delay: 0.25,
          opacity: { duration: 0.6, delay: 0.25 }, // fade ind først
          top: { duration: 0.8, delay: 0.5 }       // bevæg op bagefter
  }}
      >
        
        Sofie Neergaard
      </motion.h1>

      {/* BILLEDER: kommer først efter titlen */}
      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* stort PORTRÆT — placeret så titlen overlapper en smule */}
        <motion.img
          variants={item}
          src={imgPortrait}
          alt=""
          className={`${styles.card} ${styles.portrait}`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 220 }}
        />

        {/* øverst højre */}
        <motion.img
          variants={item}
          src={imgNotebook}
          alt=""
          className={`${styles.card} ${styles.topRight}`}
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 220 }}
        />

        {/* midt/højre */}
        <motion.img
          variants={item}
          src={imgLaptop}
          alt=""
          className={`${styles.card} ${styles.midRight}`}
          whileHover={{ scale: 1.05, rotate: -1 }}
          transition={{ type: "spring", stiffness: 220 }}
        />

        {/* nederst (cykel) */}
        <motion.img
          variants={item}
          src={imgBike}
          alt=""
          className={`${styles.card} ${styles.bottom}`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 220 }}
        />
      </motion.div>

      {/* Tekster nederst */}
      <div className={styles.texts}>
        <p className={styles.year}>PORTFOLIO 2025</p>
        <motion.p
          className={styles.scroll}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4, ease }}
        >
          Scroll ned og se, hvad jeg kan
        </motion.p>
      </div>
    </section>
  );
}
