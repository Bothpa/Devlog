import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostDataInterface from "../../../Interface/PersonerBlog/PostDataInterface";
import SetInnerHTML from "../PersonerBlogComponents/SetInnerHTML";
import MarkdownConverter from "../../../Hooks/MarkdownConverter";
import Comments from "../PersonerBlogComponents/Comments";
import axios from "axios";

import { postData } from "../../Main/MainPages/testData";

interface TagShortCutProps {
  tag: string;
  text: string;
  scrollToHeading: (tag: string, text: string) => void;
}

const TagShortCut: React.FC<TagShortCutProps> = ({tag,text,scrollToHeading,}) => {
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
  const [PostData, setPostData] = useState<PostDataInterface>({
    boardTitle: "로딩중~",
    boardContent: "로딩중~",
    tags: "로딩중~",
    boardProfilepath: null,
    boardDate: new Date(),
    boardUuid: 0,
    userName: "로딩중~",
    visitCount: 0,
  }); // 이부분은 나중에 서버에서 받아온 데이터로 대체해야함
  const [TagList, setTagList] = useState<Array<{ tag: string; text: string }>>([]); // 헤더 바로가기 리스트
  const [html, setHtml] = useState<string>("");
  const navigate = useNavigate();
  
  const year = useMemo(() => {
    return PostData.boardDate.getFullYear();
  }, [PostData?.boardDate]);
  const month = useMemo(() => {
    return PostData.boardDate.getMonth() + 1;
  }, [PostData?.boardDate]);
  const day = useMemo(() => {
    return PostData.boardDate.getDate();
  }, [PostData.boardDate]);

  const change = useCallback(async (markdowntext: string) => {
    const html = await MarkdownConverter(markdowntext);
    setHtml(html);
    const extractedHeadings = extractHeadings(markdowntext);
    setTagList(extractedHeadings);
  }, []);

  useEffect(() => {
    change(PostData.boardContent);
  }, [PostData]);

  useEffect(() => {
    axios.get(`/api/board/${postid}`)
    .then((res) => {
      if(res.status !== 200) {
        setPostData(res.data);
        // console.log(res.data);
      }
    })
    .catch((err) => {
      console.log(err);
      navigate(-1);
    });
  }, []);

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
          {/* {postData.cateName} */}
          리액트성장일기
        </span>

        <span className="text-[50px] mb-6 font-bold text-white">
          {postData.boardTitle}
        </span>

        <span className="text-base text-white">
          {PostData.userName} {year}.{month}.{day}
        </span>
      </div>

      <div className="pb-3 rounded-2xl pl-2 pr-2">
        <SetInnerHTML html={html} />
      </div>

      <div className="px-2 py-5 border-t-2">
        <Comments/>
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
