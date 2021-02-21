import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
        <Head>
            <title>Home Page | faisaladisoe</title>
            <meta name="description" content="This is a Faisal\'s Personal Website"/>
            <meta name="keywords" content="M Faisal Adi Soesatyo, M Faisal Adi S, Faisal, faisaladisoe"/>
        </Head>
        <h1 className={styles.title}>Hello World!</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, quis quibusdam? Inventore.</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, quis quibusdam? Inventore.</p>
        <Link href="/ninjas">
            <a className={styles.btn}>See Ninja List</a>
        </Link>
    </div>
  );
}
