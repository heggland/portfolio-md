"use client";
import styles from "./MarkdownEditor.module.css";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

const modes = ["dark", "light"];

export default function MarkdownEditor({ blog }: { blog?: string }) {
  const [markdown, setMarkdown] = useState<string | undefined>(blog);
  const [mode, setMode] = useState<string>("dark");

  const toggleDarkMode = () => {
    if (mode === modes[0]) {
      setMode(modes[1]);
    } else {
      setMode(modes[0]);
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.row}>
        <p>Markdown editor is a tool for creating and editing markdown files.</p>
        <button className={styles.toggle} onClick={toggleDarkMode}>
          {mode === modes[1] ? modes[1] : modes[0]} mode
        </button>
      </div>

      <div className={styles.markdownEditor} data-color-mode={mode}>
        <MDEditor value={markdown} onChange={setMarkdown} height={600} />
      </div>

      <MDEditor.Markdown source={markdown} style={{ whiteSpace: "pre-wrap" }} />
    </div>
  );
}
