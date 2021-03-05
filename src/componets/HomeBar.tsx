import styles from "../styles/components/HomeBar.module.css";

export function HomeBar() {
  return (
    <div className={styles.container}>
      <header>
        <img src="/icons/logo.svg" alt="Move.it" />
      </header>
      <main>
        <div className={styles.selectedMenu}>
          <img src="/icons/homeS.svg" alt="Home" />
          <span className={styles.tooltip}>Home</span>
        </div>
        <div>
          <img src="/icons/award.svg" alt="Leaderboard" />
          <span className={styles.tooltip}>Leaderboard</span>
        </div>
        <div>
          <img src="/icons/settings.svg" alt="Settings" />
          <span className={styles.tooltip}>Settings</span>
        </div>
      </main>
    </div>
  );
}
