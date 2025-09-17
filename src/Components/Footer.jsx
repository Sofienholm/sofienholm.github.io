import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p className={styles.sub}>DU KAN ALTID FANGE MIG PÅ MAIL</p>
        <a href="mailto:sofienholm@gmail.com" className={styles.mail}>
          SOFIENHOLM@GMAIL.COM
        </a>
      </div>
      <nav className={styles.nav}>
        <NavLink to="/about">OM MIG</NavLink>
        <NavLink to="/projects">PROJEKTER</NavLink>
        <NavLink to="/contact">KONTAKT</NavLink>
      </nav>
    </footer>
  );
}
