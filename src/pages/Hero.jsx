import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import img1 from "../assets/bike.jpg";
import img2 from "../assets/portrait.jpg";
import img3 from "../assets/notebook.jpg";
import img4 from "../assets/laptop.jpg";

export default function Hero() {
  const MotionImage = motion.img;
  const MotionParagraph = motion.p;
  return (
    <section className={`${styles.hero} js-animate`}>
      <h1 className={styles.title}>Sofie Neergaard</h1>
      <div className={styles.heroInner}>
        <MotionImage
          src={img1}
          alt="bicycle parked beside a wall"
          className={styles.image}
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        <MotionImage
          src={img2}
          alt="portrait of Sofie Neergaard"
          className={styles.image}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        <MotionImage
          src={img3}
          alt="open notebook with sketches"
          className={styles.image}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        <MotionImage
          src={img4}
          alt="laptop on a desk"
          className={styles.image}
          whileHover={{ scale: 1.05, y: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        <div className={styles.textBlock}>
          <p className={styles.year}>PORTFOLIO 2025</p>
          <MotionParagraph
            className={styles.scroll}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Scroll ned og se, hvad jeg kan
          </MotionParagraph>
        </div>
      </div>
    </section>
  );
}
