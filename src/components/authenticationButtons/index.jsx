import styles from "./styles.module.css";
import apple from "../../assets/icons/apple.svg";
import google from "../../assets/icons/google.svg";
import x from "../../assets/icons/x.svg";

function AuthenticationButtons() {
  return (
    <div className={styles.border}>
      <img src={apple} alt="Apple logo" className={styles.icons} />
      <img src={google} alt="Apple logo" className={styles.icons} />
      <img src={x} alt="Apple logo" className={styles.icons} />
    </div>
  );
}

export default AuthenticationButtons;
