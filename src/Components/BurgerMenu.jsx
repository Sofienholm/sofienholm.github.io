import React, { useState } from "react";
import { elastic as Menu } from "react-burger-menu";
import { NavLink } from "react-router";
import styles from "./BurgerMenu.module.css"; // styles til knap + menu

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  const handleStateChange = (state) => setOpen(state.isOpen);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <>
      {/* Egen burger/X-knap */}
      <button
        className={[styles.hamburger, open ? styles.hamburgerOpen : null]
          .filter(Boolean)
          .join(" ")}
        aria-label="Menu"
        aria-controls="main-navigation"
        aria-expanded={open}
        onClick={toggle}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      {/* Selve burgermenuen (elastic, venstre som default) */}
      <Menu
        right
        isOpen={open}
        onStateChange={handleStateChange}
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        customBurgerIcon={false}
        customCrossIcon={false}
        width={260}
        itemListClassName={styles.menuList}
      >
        <NavLink to="/" end className={styles.menuItem} onClick={close}>
          Hjem
        </NavLink>
        <NavLink to="/about" className={styles.menuItem} onClick={close}>
          Om mig
        </NavLink>
        <NavLink to="/projects" className={styles.menuItem} onClick={close}>
          Projekter
        </NavLink>
        <NavLink to="/contact" className={styles.menuItem} onClick={close}>
          Kontakt
        </NavLink>
      </Menu>
    </>
  );
}
