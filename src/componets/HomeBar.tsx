import styles from "../styles/components/HomeBar.module.css";

export function HomeBar() {
  return (
    <div className={styles.container}>
      <header>
        <div>
          <img src="/icons/logo.svg" alt="Move.it" />
        </div>
      </header>
      <main>
        <div>
          <img src="/icons/homeS.svg" alt="Home" />
        </div>
        <div>
          <img src="/icons/award.svg" alt="Leaderboard" />
        </div>
      </main>
    </div>
  );
}
