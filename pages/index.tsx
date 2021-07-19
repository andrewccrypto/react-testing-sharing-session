import Head from "next/head";
import Link from "next/link";
import { DefaultButton, Stack } from "@fluentui/react";
import styles from "../styles/Home.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Stack tokens={{ childrenGap: 10 }}>
        <Stack.Item align="center">
          <Link href="/components-based" passHref>
            <DefaultButton>Components-based</DefaultButton>
          </Link>
        </Stack.Item>
        <Stack.Item align="center">
          <Link href="/hooks-based" passHref>
            <DefaultButton>Hooks-based</DefaultButton>
          </Link>
        </Stack.Item>
      </Stack>
    </div>
  );
}

export default HomePage;
