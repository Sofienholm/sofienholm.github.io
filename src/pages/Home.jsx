import styles from "./Home.module.css";
import img1 from "../assets/bike.jpg";
import img2 from "../assets/portrait.jpg";
import img3 from "../assets/notebook.jpg";
import img4 from "../assets/laptop.jpg";

export default function Home() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Sofie Neergaard</h1>
      <img src={img1} className={styles.img1} alt="" />
      <img src={img2} className={styles.img2} alt="" />
      <img src={img3} className={styles.img3} alt="" />
      <img src={img4} className={styles.img4} alt="" />
      <p className={styles.year}>PORTFOLIO 2025</p>
      <p>Scroll ned og se, hvad jeg kan</p>
    </section>
  );
}
