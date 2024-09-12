import { Route, Routes, useParams } from "react-router-dom";
import TeamMain from "../Components/TeamBlog/TeamBlogPages/TeamMain";
import TeamBlogHeader from "../Headers/TeamBlogHeader";
import { useEffect, useState } from "react";
import TeamBlogInterface from "../Interface/TeamBlog/TeamBlogInterface";
import TeamDevelopmentJournal from "../Components/TeamBlog/TeamBlogPages/TeamDevelopmentJournal";
import TeamBlogAboutProject from "../Components/TeamBlog/TeamBlogPages/TeamBlogAboutProject";
import TeamMemberIntroduction from "../Components/TeamBlog/TeamBlogPages/TeamMemberIntroduction";

import { TeamBlog } from "../Components/Main/MainPages/testData";

const TeamBlogRouter = () => {
  const [TeamBlogData, setTeamBlogData] = useState<TeamBlogInterface | null>(TeamBlog);
  const { domain } = useParams();

  useEffect(() => {
    console.log(domain);
    //여기에 팀블로그 데이터를 가져오는 함수를 넣어주세요.
  },[domain]);

  return (
    <div className="w-full h-full flex flex-col items-center CenterPadding HeaderPadding">
      {TeamBlogData ? (
        <>
          <TeamBlogHeader pDName={TeamBlog.p_blog.pDname} pName={TeamBlog.p_blog.pName}/>
          <Routes>
            <Route path="/" element={<TeamMain TeamBlogData={TeamBlogData}/>}/>
            <Route path="/aboutproject" element={<TeamBlogAboutProject TeamBlogData={TeamBlogData}/>}/>
            <Route path="/memberintroduction" element={<TeamMemberIntroduction TeamBlogData={TeamBlogData}/>}/>
            <Route path="/developmentjournal" element={<TeamDevelopmentJournal TeamBlogData={TeamBlogData}/>}/>
            <Route path={"*"} element={<TeamMain TeamBlogData={TeamBlogData}/>} />
          </Routes>
        </>
      ) : (
        <>로딩중</>
      )}
    </div>
  );
};

export default TeamBlogRouter;
