export interface MarkdownFile {
  title: string;
  label: string;
  slug: string;
  content?: string;
}

export interface ReadFilesResponse {
  data?: {
    files: MarkdownFile[];
    folder: string[];
  };
  error?: Error;
}

export interface Error {
  status: number;
  message: string;
  data?: unknown;
}
