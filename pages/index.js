import styles from "../styles/Home.module.css";
import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Whatsapp 2.0</title>
        <link rel="icon" href="/favicon.co"></link>
      </Head>
      <Sidebar />
    </div>
  );
}
