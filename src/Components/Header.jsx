import styles from "./Header.module.css";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  return (
    <header className={styles.header}>
      <span>Mit Portfolio</span>
      <BurgerMenu />
    </header>
  );
}
