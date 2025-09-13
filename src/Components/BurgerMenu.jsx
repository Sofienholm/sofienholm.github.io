import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./BurgerMenu.module.css";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <div className={styles.container}>
      <button
        className={`${styles.burger} ${open ? styles.open : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      <nav className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
        <NavLink to="/try" onClick={toggleMenu}>
          TRY
        </NavLink>
        <NavLink to="/to" onClick={toggleMenu}>
          TO
        </NavLink>
        <NavLink to="/hover" onClick={toggleMenu}>
          HOVER
        </NavLink>
        <NavLink to="/me" onClick={toggleMenu}>
          ME
        </NavLink>
      </nav>
    </div>
  );
}
