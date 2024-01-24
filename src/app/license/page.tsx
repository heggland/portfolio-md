import readFile from "@app/_utils/readFile";
import Markdown from "@app/_components/UI/Markdown/Markdown";
import PageContent from "@app/_components/UI/PageContent/PageContent";

export default function LicensePage() {
  const page = readFile("license");

  return (
    <main>
      <PageContent>
        <Markdown>{page?.content}</Markdown>
      </PageContent>
    </main>
  );
}
