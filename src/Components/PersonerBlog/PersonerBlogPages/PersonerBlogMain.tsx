import { useParams } from "react-router-dom";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";
import { useState } from "react";
import PostCardLongSimple from "../PersonerBlogComponents/PostCardLongSimple";
import PostCardSimple from "../PersonerBlogComponents/PostCardSimple";
import { dataShort } from "../../../Components/Main/MainPages/testData";

const PersonerBlogMain = () => {
  const { domain } = useParams();
  // 최신 게시물 데이터
  const [LatestPostData, setLatestPostData] = useState<PostCardInterface[]>([]);
  // 게시물 데이터
  const [PostData, setPostData] = useState<PostCardInterface[]>([]);
  
  return (
    <div className="w-full h-fit">
      <div className="w-full mb-10 flex flex-row">
        {LatestPostData.length == 0 ? (
          <>
            게시물이 존재하지 않습니다.
          </>
        ):(
          <>
          <PostCardSimple data={LatestPostData[0]} />
          <PostCardSimple data={LatestPostData[1]} />
          <PostCardSimple data={LatestPostData[2]} />
          </>
        )}
      </div>
      <div className="w-full border-b-[1.5px] border-zinc-300 font-bold">
        전체 글
      </div>
      {PostData.length == 0 ? (
          <>
            게시물이 존재하지 않습니다.
          </>
        ):(
          <>
            {PostData.map((data, index) => {
              return (
                <div key={index} className="ml-auto mr-auto mb-5">
                  <PostCardLongSimple data={data} />
                </div>
              );
            })}
          </>
        )}
    </div>
  );
};

export default PersonerBlogMain;
