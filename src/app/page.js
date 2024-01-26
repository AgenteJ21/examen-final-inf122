import Image from "next/image";
import styles from "./page.module.css";
import Profile from "./components/profile";
import About from "./components/about";
import Stats from "./components/stats";

export default function Home() {
  return (
    <div className={styles.main}>
      <Profile />
      <About />
      <Stats />
    </div>
  );
}
