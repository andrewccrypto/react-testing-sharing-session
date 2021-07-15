import Head from "next/head";
import Link from "next/link";
import { DefaultButton } from "@fluentui/react";
import styles from "../styles/Home.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Link href="/components-only" passHref>
        <DefaultButton>Components Only</DefaultButton>
      </Link>
    </div>
  );
}

export default HomePage;
