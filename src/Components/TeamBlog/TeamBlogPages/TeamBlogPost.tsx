import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import SetInnerHTML from "../../PersonerBlog/PersonerBlogComponents/SetInnerHTML";

import { postData } from "../../Main/MainPages/testData";
import MarkdownConverter from "../../../Hooks/MarkdownConverter";


const TeamBlogPost = () => {
  const { domain, postid } = useParams();
  const [html, setHtml] = useState<string>("");

  const change = useCallback(async (markdowntext: string) => {
    const html = await MarkdownConverter(markdowntext);
    setHtml(html);
  }, []);

  useEffect(() => {
    change(postData.boards.boardContent);
  }, [postData]);

  return (
    <div className="w-full h-fit flex flex-col CenterPadding pt-[70px]">
        <span className="text-zinc-400 flex flex-row items-center"><img src="/Icon/Calender.png" className="w-5 h-5 mr-1" alt="" />2024.04.17</span>{/* 작성자 아이콘, 게시글 작성 시간 */}
        <span className="text-5xl font-bold mb-8">제목이 길어요 abcdefg 길어도 출력해주세요 ABCDEFGH</span>{/* 글 제목 */}
        <div className="flex flex-row items-center">
            <img src="/Icon/Github.png" className="w-[55px] h-[55px] rounded-full mr-3" alt="작성자 아이콘" />{/* 작성자 아이콘 */}
            <div className="flex flex-col text-xl leading-tight">
                <span>정송훈</span>{/* 작성자 이름 */}
                <span className="text-zinc-400">Front-end Engineer</span>{/* 작성자 직무 */}
            </div>
        </div>
        <div className="w-full pb-5 bg-[#EBEEFA60] rounded-2xl pl-2 pr-2 mb-[150px]">
            <SetInnerHTML html={html} />
        </div>
        <div className="w-full h-[170px] border-t border-b mb-5 flex relative justify-center">
            <img src="/Icon/Github.png" className="w-[100px] h-[100px] absolute top-[-55px]" alt="작성자 아이콘" />
            <span className="text-xl absolute left-[37%] top-2">정송훈</span>{/* 작성자 이름 */}
            <span className="text-xl absolute text-zinc-400 left-[57%] top-2">Front-end Engineer</span>{/* 작성자 직무 */}
            <span className="w-[200px] absolute top-[70px] text-center">프론트 엔지니어링 리액트 꿈나무 정송훈 입니다.</span>{/* 작성자 한줄소개 */}
        </div>
    </div>
  );
};

export default TeamBlogPost;
