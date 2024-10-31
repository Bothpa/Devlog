import { useParams } from "react-router-dom";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";
import { useEffect, useState } from "react";
import PostCardLongSimple from "../PersonerBlogComponents/PostCardLongSimple";
import PostCardSimple from "../PersonerBlogComponents/PostCardSimple";
import axios from "axios";

const PersonerBlogMain = () => {
  const { domain } = useParams();
  const [PostData, setPostData] = useState<PostCardInterface[]>([]);

  useEffect(() => {
    axios.get(`/api/board/p/${domain}`)
    .then((res)=>{
      if(res.status === 200){
        setPostData(res.data);
      }
    })
    .catch((err)=>{
      console.log(err);
    });
  },[]);
  
  return (
    <div className="w-full h-fit">
      <div className="w-full mb-10 flex flex-row">
        {PostData.length == 0 ? (
          <>
            게시물이 존재하지 않습니다.
          </>
        ):(
          <>
          {PostData.slice(0, 3).map((data, index) => {
            return (
              <PostCardSimple key={index} data={data} />
            );
          })}
          </>
        )}
      </div>
      <div className="w-full border-b-[1.5px] border-zinc-300 font-bold">
        전체 글
      </div>
      {PostData.slice(3).length == 0 ? (
          <>
            게시물이 존재하지 않습니다.
          </>
        ):(
          <>
            {PostData.slice(3).map((data, index) => {
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
