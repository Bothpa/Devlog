import { Route, Routes, useParams } from "react-router-dom";
import TeamMain from "../Components/TeamBlog/TeamBlogPages/TeamMain";
import TeamBlogHeader from "../Headers/TeamBlogHeader";
import { useEffect, useState } from "react";
import TeamBlogInterface from "../Interface/TeamBlog/TeamBlogInterface";
import TeamDevelopmentJournal from "../Components/TeamBlog/TeamBlogPages/TeamDevelopmentJournal";
import TeamBlogAboutProject from "../Components/TeamBlog/TeamBlogPages/TeamBlogAboutProject";
import TeamMemberIntroduction from "../Components/TeamBlog/TeamBlogPages/TeamMemberIntroduction";
import TeamBlogPost from "../Components/TeamBlog/TeamBlogPages/TeamBlogPost";

import axios from "axios";

const TeamBlogRouter = () => {
  const [TeamBlogData, setTeamBlogData] = useState<TeamBlogInterface>();
  const { domain } = useParams();

  useEffect(() => {
    axios.get(`/api/t/${domain}`)
    .then((res) => {
      setTeamBlogData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  },[]);

  return (
    <div className="w-full h-full flex flex-col items-center CenterPadding HeaderPadding">
      {TeamBlogData ? (
        <>
          <TeamBlogHeader pDName={TeamBlogData.tdomain} pName={TeamBlogData.tname}/>
          <Routes>
            <Route path="/" element={<TeamMain TeamBlogData={TeamBlogData}/>}/>
            <Route path="/:postid" element={<TeamBlogPost/>}/>
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
