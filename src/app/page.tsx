import readFile from "@app/_utils/readFile";
import Markdown from "@app/_components/UI/Markdown/Markdown";
import PageContent from "@app/_components/UI/PageContent/PageContent";

export default function HomePage() {
  const page = readFile("home-page.md", "src/markdown");

  return (
    <main>
      <PageContent>
        <Markdown>{page?.content}</Markdown>
      </PageContent>
    </main>
  );
}
