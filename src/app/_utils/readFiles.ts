import fs from "fs";
import path from "path";
import { Error, MarkdownFile, ReadFilesResponse } from "@app/_utils/interfaces";

const baseDirectory = path.join(process.cwd()) + "/src/markdown/pages/";

export default function readFiles(urlPath: string[]): ReadFilesResponse {
  if (urlPath.length === 0) {
    return {
      error: {
        status: 404,
        message: "content not found"
      }
    };
  }

  const fullPath = path.join(baseDirectory, urlPath.join("/"));

  try {
    return {
      data: {
        files: [
          {
            title: urlPath[urlPath.length - 1].replace(/-/g, " "),
            label: urlPath[urlPath.length - 1],
            slug: urlPath[urlPath.length - 1],
            content: fs.readFileSync(fullPath + ".md", "utf8")
          }
        ],
        folder: []
      }
    };
  } catch (error) {
    try {
      const items = fs.readdirSync(fullPath, { withFileTypes: true });

      const folders = items.filter((item) => item.isDirectory()).map((item) => item.name);
      const files = items.filter((item) => !item.isDirectory()).map((item) => item.name);

      const fileArray: MarkdownFile[] = [];
      files.forEach((file) => {
        fileArray.push({
          title: file.replace(".md", ""),
          label: file.replace(".md", ""),
          slug: file.replace(".md", "").replace(/\s+/g, "-").toLowerCase(),
          content: fs.readFileSync(fullPath + "/" + file, "utf8")
        });
      });

      return { data: { files: fileArray, folder: folders } };
    } catch (error) {
      try {
        const slug = urlPath[urlPath.length - 1];

        const paths = path.join(baseDirectory, urlPath.slice(0, urlPath.length - 1).join("/"));

        const items = fs.readdirSync(paths, { withFileTypes: true });

        const files = items.filter((item) => !item.isDirectory()).map((item) => item.name);

        const file = files.filter(
          (file) => file.replace(".md", "").replace(/\s+/g, "-").toLowerCase() === slug.toLowerCase()
        );

        if (file.length === 0) {
          return { data: { files: [], folder: [] } };
        }

        return {
          data: {
            files: [
              {
                title: urlPath[urlPath.length - 1].replace(/-/g, " "),
                label: urlPath[urlPath.length - 1],
                slug: urlPath[urlPath.length - 1],
                content: fs.readFileSync(paths + "/" + file[0], "utf8")
              }
            ],
            folder: []
          }
        };
      } catch (error) {
        console.log(error);
        return {
          error: {
            status: 404,
            message: "Page not found",
            data: error
          }
        };
      }
    }
  }
}
