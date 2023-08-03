import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
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
