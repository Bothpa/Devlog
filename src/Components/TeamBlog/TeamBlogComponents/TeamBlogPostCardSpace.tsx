import TeamBlogPostCard from "../TeamBlogComponents/TeamBlogPostCard";
import TeamBlogPostCardInterface from "../../../Interface/TeamBlog/TeamBlogPostCardInterface";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { TBPCD } from "../../Main/MainPages/testData";


const TeamBlogPostCardSpace = () => {
    const [PostCardData, setPostCardData] = useState<TeamBlogPostCardInterface[]>(TBPCD);
    const { domain } = useParams();
  
    useEffect(() => {
      console.log(domain);
      //여기에 메인 게시글 데이터 4개를 가져오는 함수를 넣어주세요.
    },[domain]);
  
    return (
      <>
      <span className="w-full font-bold text-2xl mb-5">Lastest Posts</span>
      <div className="w-full h-full flex flex-row flex-wrap">
        {PostCardData.map((data, index) => {
          return (
            <div key={index} className="ml-auto mr-auto mb-5">
              <TeamBlogPostCard {...data} />
            </div>
          );
        })}
      </div>
      </>
    );
}

export default TeamBlogPostCardSpace;