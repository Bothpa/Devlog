import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import PostDataInterface from "../../../Interface/PersonerBlog/PostDataInterface";
import SetInnerHTML from "../PersonerBlogComponents/SetInnerHTML";
import MarkdownConverter from "../../../Hooks/MarkdownConverter";

import { postData } from "../../Main/MainPages/testData";

interface TagShortCutProps {
  tag: string;
  text: string;
  scrollToHeading: (tag: string, text: string) => void;
}

const TagShortCut: React.FC<TagShortCutProps> = ({
  tag,
  text,
  scrollToHeading,
}) => {
  const tagStyles: { [key: string]: string } = {
    "h1": "text-[18px]",
    "h2": "ml-4 text-[16px]",
    "h3": "ml-8 text-[15px]",
    "h4": "ml-12 text-[14px]"
  };
  const style = tagStyles[tag] || "";
  return (
    <div className={`cursor-pointer text-zinc-400 hover:underline mb-1 ${style}`}onClick={() => scrollToHeading(tag, text)}>{text}</div>
  );
};

const PersonerBlogPost = () => {
  const { domain, postid } = useParams();
  const [PostData, setPostData] = useState<PostDataInterface>(postData); // 이부분은 나중에 서버에서 받아온 데이터로 대체해야함
  const [TagList, setTagList] = useState<Array<{ tag: string; text: string }>>([]); // 헤더 바로가기 리스트
  const [html, setHtml] = useState<string>("");
  
  const year = useMemo(() => {
    return PostData.boards.boardDate.getFullYear();
  }, [PostData.boards.boardDate]);
  const month = useMemo(() => {
    return PostData.boards.boardDate.getMonth() + 1;
  }, [PostData.boards.boardDate]);
  const day = useMemo(() => {
    return PostData.boards.boardDate.getDate();
  }, [PostData.boards.boardDate]);

  const change = useCallback(async (markdowntext: string) => {
    const html = await MarkdownConverter(markdowntext);
    setHtml(html);
    const extractedHeadings = extractHeadings(markdowntext);
    setTagList(extractedHeadings);
  }, []);

  useEffect(() => {
    change(PostData.boards.boardContent);
  }, [PostData]);

  const extractHeadings = (markdown: string) => {
    const regex = /^(#{1,4})\s+(.+)$/gm;
    let match;
    const results = [];

    while ((match = regex.exec(markdown)) !== null) {
      results.push({
        tag: "h" + match[1].length,
        text: match[2],
      });
    }
    return results;
  };

  const scrollToHeading = (tag: string, text: String) => {
    const headings = Array.from(document.querySelectorAll(tag));
    const targetHeading = headings.find((h) => h.innerHTML === text);
    if (targetHeading) {
      targetHeading.scrollIntoView({ behavior: "smooth" });
      window.scrollBy(0, -65);
    }
  };

  return (
    <>
      <div className="absolute top-0 left-0 h-[350px] HeaderPaddingM w-full bg-[#00000070] blur-background"></div>
      <div className="absolute top-[255px] flex flex-col">

        <span className="mb-2 text-base text-white">
          {postData.boards.cateName}
        </span>

        {/* <span className="mb-8 text-4xl font-bold"> */}
        <span className="mb-6 text-[50px] font-bold text-white">
          {postData.boards.boardTitle}
        </span>

        <span className="text-base text-white">
          {PostData.users.name} {year}.{month}.{day}
        </span>
      </div>

      <div className="pb-10 bg-[#EBEEFA60] rounded-2xl pl-2 pr-2">
        <SetInnerHTML html={html} />
        {domain}블로그의{postid}게시글
      </div>

      <div className="fixed top-[420px] ml-[790px] border-l-2 border-zinc-200 pl-3">
        {TagList.map((tag, index) => (
          <TagShortCut
            key={index}
            tag={tag.tag}
            text={tag.text}
            scrollToHeading={scrollToHeading}
          />
        ))}
      </div>
    </>
  );
};

export default PersonerBlogPost;
