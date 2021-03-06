import styles from "../styles/pages/Login.module.css";
import { BoasVindas } from "../componets/BoasVindas";

export default function Login() {
  return (
    <div className={styles.containerPage}>
      <div className={styles.container}>
        <div className={styles.bgLogo}>
          <img src="/bg-logo.svg" alt="" />
        </div>
        <BoasVindas />
      </div>
    </div>
  );
}
