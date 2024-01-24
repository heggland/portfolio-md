import styles from "./page.module.scss";
import Markdown from "@app/_components/UI/Markdown/Markdown";
import PageContent from "@app/_components/UI/PageContent/PageContent";
import readFiles from "@app/_utils/readFiles";
import Link from "next/link";
import { replaceSpaces } from "@app/_utils/ASCII_encode";

interface Props {
  params: {
    page: string[];
  };
}

export async function generateMetadata({ params: { page } }: Props) {
  return {
    title: `${replaceSpaces(page).join("/")} | ${page.toString()}`,
    description: `${page.toString()} content`
  };
}

export default function Pages({ params: { page } }: Props) {
  page = replaceSpaces(page);

  const result = readFiles(page);

  if ("error" in result && result.error) {
    return (
      <main>
        <PageContent>404 - no matching files found</PageContent>
      </main>
    );
  }

  if (typeof result.data !== "object") {
    return (
      <main>
        <PageContent>404 - no matching files found</PageContent>
      </main>
    );
  }

  const folder = result.data?.folder;
  const files = result.data?.files;

  const path = page.join("/");

  // if there is no content in the folder, display a message
  if (folder.length === 0 && files.length === 0) {
    return (
      <main>
        <PageContent>404 - no matching files found</PageContent>
      </main>
    );
  }

  // if there is only one file in the folder, display it
  if (folder.length === 0 && files.length === 1) {
    const file = files[0];

    return (
      <main>
        <PageContent>
          <BreadCrumb path={page} />
        </PageContent>
        <PageContent>
          <Markdown>{file.content}</Markdown>
        </PageContent>
      </main>
    );
  }

  // display the folder content
  return (
    <main>
      <PageContent>
        <BreadCrumb path={page} />
      </PageContent>
      <PageContent>
        <ul className={styles.ul}>
          {folder.map((folder) => (
            <li key={folder} className={styles.li}>
              <Link href={`/${path}/${folder}`}>📁️ {folder}</Link>
            </li>
          ))}
          {files.map((file) => (
            <li key={file.slug} className={styles.li}>
              <Link href={`/${path}/${file.slug}`}>🗒️ {file.label}</Link>
            </li>
          ))}
        </ul>
      </PageContent>
    </main>
  );
}

// simple navigation
const BreadCrumb = ({ path }: { path: string[] }) => {
  return (
    <div className={styles.breadcrumb}>
      {path.map((folder, index) => (
        <>
          {index === 0 ? "" : "/"}
          {/*last index*/}
          <Link
            href={`/${path.slice(0, index + 1).join("/")}`}
            key={folder}
            className={index === path.length - 1 ? styles.active : ""}
          >
            {folder}
          </Link>
        </>
      ))}
    </div>
  );
};
