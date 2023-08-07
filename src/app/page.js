import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <hr />
      <Hero />
      <hr />
      <h1> HomePage</h1>
    </main>
  );
}
