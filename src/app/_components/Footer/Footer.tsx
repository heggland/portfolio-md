import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.content}>
      <div className={styles.row}>
        <Link href={"https://github.com/heggland/portfolio-md"} className={styles.link} target={"_blank"}>
          portfolio-md
        </Link>
        <div>
          <span>- a tiny project by </span>
          <Link href={"https://github.com/heggland/portfolio-md"} className={styles.link} target={"_blank"}>
            heggland.tech
          </Link>
        </div>
      </div>
      <Link href={"/license"}>MIT License</Link>
    </div>
  );
}
