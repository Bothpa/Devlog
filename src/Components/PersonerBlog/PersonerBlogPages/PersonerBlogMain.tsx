import { useParams } from "react-router-dom";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";
import { useState } from "react";
import PostCardLongSimple from "../PersonerBlogComponents/PostCardLongSimple";
import PostCardSimple from "../PersonerBlogComponents/PostCardSimple";
import { dataShort } from "../../../Components/Main/MainPages/testData";

const PersonerBlogMain = () => {
  const { domain } = useParams();
  // 최신 게시물 데이터
  const [LatestPostData, setLatestPostData] = useState<PostCardInterface[]>(dataShort);
  // 게시물 데이터
  const [PostData, setPostData] = useState<PostCardInterface[]>(dataShort);
  
  return (
    <div className="w-full h-fit">
      <div className="w-full mb-10 flex flex-row">
        <PostCardSimple {...PostData[0]} />
        <PostCardSimple {...PostData[1]} />
        <div>
          <PostCardSimple {...PostData[2]} />
        </div>
      </div>
      <div className="w-full border-b-[1.5px] border-zinc-300 font-bold">
        전체 글
      </div>
      {PostData.map((data, index) => {
        return (
          <div key={index} className="ml-auto mr-auto mb-5">
            <PostCardLongSimple {...data} />
          </div>
        );
      })}
    </div>
  );
};

export default PersonerBlogMain;
