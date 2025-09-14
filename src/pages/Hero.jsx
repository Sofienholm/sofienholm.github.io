import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import img1 from "../assets/bike.jpg";
import img2 from "../assets/portrait.jpg";
import img3 from "../assets/notebook.jpg";
import img4 from "../assets/laptop.jpg";

export default function Hero() {
  return (
    <section className={`${styles.hero} js-animate`}>
      <h1 className={styles.title}>Sofie Neergaard</h1>
      <div className={styles.heroInner}>
        <motion.img
          src={img1}
          alt=""
          className={styles.img1}
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        <motion.img
          src={img2}
          alt=""
          className={styles.img2}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        <motion.img
          src={img3}
          alt=""
          className={styles.img3}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        <motion.img
          src={img4}
          alt=""
          className={styles.img4}
          whileHover={{ scale: 1.05, y: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        <div className={styles.textBlock}>
          <p className={styles.year}>PORTFOLIO 2025</p>
          <motion.p
            className={styles.scroll}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Scroll ned og se, hvad jeg kan
          </motion.p>
        </div>
      </div>
    </section>
  );
}
