import { marked } from "marked";

marked.setOptions({
  breaks: true, // 줄바꿈을 인식하게 설정
  gfm: true, // GitHub Flavored Markdown 활성화
});

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}" title="${title}">${text}</a>`;
};

// Use the custom renderer
marked.setOptions({ renderer });

const MarkdownConverter = async (markdownText: string): Promise<string> => {
  const html = await marked(markdownText);
  return html;
};

export default MarkdownConverter;