import Head from "next/head";
import { GetServerSideProps } from "next";
import { CompletedChallenges } from "../componets/CompletedChallenges";
import { Countdown } from "../componets/Countdown";
import { ExperienceBar } from "../componets/ExperienceBar";
import { Profile } from "../componets/Profile";
import { ChallengeBox } from "../componets/ChallengeBox";
import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContexts";
import { HomeBar } from "../componets/HomeBar";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengeCompleted={props.challengeCompleted}
    >
      <div className={styles.container}>
        <div className={styles.containerBar}>
          <HomeBar />
        </div>
        <div className={styles.containerPage}>
          <Head>
            <title>Home | move.it</title>
          </Head>
          <ExperienceBar />
          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </ChallengesProvider>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
