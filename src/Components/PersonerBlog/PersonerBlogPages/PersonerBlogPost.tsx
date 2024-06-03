import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import PostDataInterface from "../../../Interface/PersonerBlog/PostDataInterface";
import SetInnerHTML from "../PersonerBlogComponents/SetInnerHTML";
import MarkdownConverter from "../../../Hooks/MarkdownConverter";

import { postData } from "../../Main/MainPages/testData";

const PersonerBlogPost = () => {
  const { domain, postid } = useParams();
  const [PostData, setPostData] = useState<PostDataInterface>(postData);
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
  }, []);
  
  useEffect(() => {
    change(PostData.boards.boardContent);
  },[PostData]);

  return (
    <>
      <div className="absolute top-[255px] flex flex-col">
        <span className="mb-2 text-base">{postData.boards.cateName}</span>
        {/* <span className="mb-8 text-4xl font-bold"> */}
        <span className="mb-6 text-[50px] font-bold">
          {postData.boards.boardTitle}
        </span>
        <span className="text-base">
          {PostData.users.name} {year}.{month}.{day}
        </span>
      </div>
      <div className="pb-10 bg-[#EBEEFA60] rounded-2xl pl-2 pr-2">
        <SetInnerHTML html={html} />
        {domain}블로그의{postid}게시글
      </div>
    </>
  );
};

export default PersonerBlogPost;
