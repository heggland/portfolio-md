import styles from "./PageContent.module.css";
import { ReactNode } from "react";

export default function PageContent({
  children,
  background
}: {
  children: ReactNode;
  background?: {
    backgroundColor: "black" | "white";
    color: "black" | "white";
    notFullWidth?: boolean;
  };
}) {
  if (background) {
    return (
      <div
        className={[
          styles[`${background.backgroundColor}Bg`],
          styles[background.color],
          background.notFullWidth ? styles.container : ""
        ].join(" ")}
      >
        <div className={styles.content}>{children}</div>
      </div>
    );
  }

  return <div className={styles.container}>{children}</div>;
}
