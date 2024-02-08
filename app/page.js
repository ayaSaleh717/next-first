import Image from "next/image";
import styles from "./page.module.css";

export const metadata={
  title:"home"
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <h1>HOME</h1>
      </div>
    </main>
  );
}
