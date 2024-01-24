import React from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";

export default async function Navigation() {
  return (
    <div className={styles.content}>
      <div className={styles.row}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/blog" className={styles.link}>
          Blog
        </Link>
        <Link href="/documentation" className={styles.link}>
          Documentation
        </Link>
      </div>
      <Link href="/playground/markdown" className={styles.link}>
        Markdown Playground
      </Link>
    </div>
  );
}
