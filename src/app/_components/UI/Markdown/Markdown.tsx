import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./Markdown.module.css";

export default function MarkdownComponent({ children }: { children: any }) {
  return (
    <div className={styles.content}>
      <Markdown remarkPlugins={[remarkGfm]}>{children}</Markdown>
    </div>
  );
}
