// add bootstrap css
import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Hero />
        <h1> HomePage</h1>
      </main>
    </>
  );
}
