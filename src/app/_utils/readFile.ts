import fs from "fs";
import path from "path";
import { MarkdownFile } from "@app/_utils/interfaces";

export default function readFile(title: string, folder: string = ""): MarkdownFile | undefined {
  try {
    const folderPath = path.join(process.cwd(), folder);
    const files = fs.readdirSync(folderPath);

    const matchingFile = files.find((file) => file.toLowerCase() === title.toLowerCase());

    if (!matchingFile) {
      return undefined;
    }

    const filePath = path.join(folderPath, matchingFile);
    const file = fs.readFileSync(filePath, "utf8");

    return {
      title: matchingFile,
      label: title,
      slug: title,
      content: file
    };
  } catch (err) {
    console.log("❌--- err: ", err);
    return undefined;
  }
}
