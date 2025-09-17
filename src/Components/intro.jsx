import img5 from "../assets/intro.png";
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <section className={styles.introSection}>
      <div className={styles.introText}>
        <h2>Velkommen til</h2>
        <p>
          Jeg er multimediedesign-studerende med en passion for frontend og et
          kreativt øje for design. Jeg elsker at kombinere struktur og æstetik i
          mine løsninger.
        </p>
        <a href="/about" className={styles.introBtn}>
          Læs mere om mig
        </a>
      </div>

      <div className={styles.introImage}>
        <img src={img5} alt="Intro" />
      </div>
    </section>
  );
}
