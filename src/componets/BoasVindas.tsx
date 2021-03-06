import styles from "../styles/components/BoasVindas.module.css";

export function BoasVindas() {
  return (
    <div className={styles.containerLogin}>
      <div>
        <div className={styles.logoName}>
          <img src="/logo-name.svg" alt="" />
        </div>
      </div>
      <div>
        <h1>Bem-vindo</h1>
      </div>
      <div className={styles.git}>
        <img src="/icons/git.svg" alt="" />
        <p>Faça login com seu github para começar</p>
      </div>
      <div className={styles.inputTextButton}>
        <input type="text" placeholder="Username" />
        <button name="button">
          <img src="/icons/arrow.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
