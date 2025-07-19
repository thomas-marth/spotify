import styles from "./styles.module.css";
import AuthenticationButtons from "./../authenticationButtons/index";

function AuthenticationScreen() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>LIFE IS WASTED ON THE LIVING</h1>
      <p className={styles.text}>
        Sign in
        <br />
        with
      </p>
      <AuthenticationButtons />
    </div>
  );
}

export default AuthenticationScreen;
