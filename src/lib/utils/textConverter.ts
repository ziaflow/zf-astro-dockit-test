// markdownify
import { marked } from "marked";
export const markdownify = (content: string, div?: boolean) => {
  return div ? marked.parse(content) : marked.parseInline(content);
};