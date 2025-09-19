import img5 from "../assets/intro.png";
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <section className={styles.introSection}>
      <div className={styles.introText}>
        <h2>Velkommen til</h2>
        <p>
          Jeg er en nysgerrig multimediedesign studerende med en nysgerrig
          tilgang til både design og programmering. Jeg drives af nye
          udfordringer og elsker at bygge ting fra bunden og finde løsninger,
          der fungerer både visuelt og teknisk.
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
