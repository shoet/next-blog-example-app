import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>Header</header>
      <main>
        <div>
          <h1>Blog</h1>
          <p>my blog</p>
        </div>
      </main>
      <footer>Footer</footer>
    </>
  );
}
