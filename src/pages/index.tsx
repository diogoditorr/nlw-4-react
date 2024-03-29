import Head from 'next/head';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';


export default function Home(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Início | move.it</title>
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
    )
}

export const getServerSideProps = async () => {
    // chamada api
    const user = {
        level: 1,
        // cu
    }

    
    
    return {
        props: user
    }
} 