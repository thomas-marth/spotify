import styles from "./styles.module.css";
import logo from "../../assets/icons/logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <a href="#">
        <img src={logo} alt="Spotify logo" className={styles.logo} />
      </a>
    </header>
  );
}

export default Header;
