import { elastic as Menu } from "react-burger-menu";
import { Link } from "react-router";
import styles from "./BurgerMenu.module.css";

function BurgerMenu() {
  return (
    <Menu right pageWrapId="page-wrap" outerContainerId="outer-container">
      <Link className={styles.menuItem} to="/">
        Home
      </Link>
      <Link className={styles.menuItem} to="/projects">
        Projects
      </Link>
      <Link className={styles.menuItem} to="/about">
        About
      </Link>
      <Link className={styles.menuItem} to="/contact">
        Contact
      </Link>
    </Menu>
  );
}

export default BurgerMenu;
