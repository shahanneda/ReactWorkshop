import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> This is a header! </h1>
    </main>
  );
}

function printANumber(x: number) {
  console.log(x);
}

printANumber("hello");
