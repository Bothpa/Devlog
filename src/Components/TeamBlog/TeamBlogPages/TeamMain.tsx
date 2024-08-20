import { useEffect, useState } from "react";
import TeamBlogBanner from "../TeamBlogComponents/TeamBlogBanner";
import TeamBlogPostCard from "../TeamBlogComponents/TeamBlogPostCard";
import TeamBlogPostCardInterface from "../../../Interface/TeamBlog/TeamBlogPostCardInterface";
import TeamBlogIntroductionBanner from "../TeamBlogComponents/TeamBlogIntroductionBanner";
import { Route, Routes, useParams } from "react-router-dom";
import TeamBlogIntroduction from "../TeamBlogComponents/TeamBlogIntroduction";

import { TBPCD } from "../../Main/MainPages/testData";

interface TeamMainProps {
  pName: string;
  pBanner: string;
}

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

const TeamMain: React.FC<TeamMainProps> = ({ pName, pBanner }) => {

  return (
    <>
      <TeamBlogBanner url={pBanner} pName={pName} />
      <TeamBlogIntroductionBanner />
      <Routes>
          <Route path="/" element={<TeamBlogPostCardSpace />}/>
          <Route path="/Introduction" element={<TeamBlogIntroduction />}/>
          <Route path={"*"} element={<TeamBlogPostCardSpace />} />
      </Routes>
      
    </>
  );
};

export default TeamMain;
