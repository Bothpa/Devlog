import { Route, Routes, useParams } from "react-router-dom";
import TeamMain from "../Components/TeamBlog/TeamBlogPages/TeamMain";
import TeamBlogHeader from "../Headers/TeamBlogHeader";
import { useEffect, useState } from "react";
import TeamBlogInterface from "../Interface/TeamBlog/TeamBlogInterface";

import { TeamBlog } from "../Components/Main/MainPages/testData";

const TeamBlogRouter = () => {
  const [TeamBlogData, setTeamBlogData] = useState<TeamBlogInterface | null>(TeamBlog);
  const { domain } = useParams();

  useEffect(() => {
    console.log(domain);
  },[domain]);

  return (
    <div className="w-full h-full flex flex-col items-center CenterPadding HeaderPadding">
      {TeamBlogData ? (
        <>
          <TeamBlogHeader pDName={TeamBlog.p_blog.pDname} pName={TeamBlog.p_blog.pName}/>
          <Routes>
            <Route path="/" element={<TeamMain pName={TeamBlog.p_blog.pName} pBanner={TeamBlog.p_blog.pBanner}/>}/>
            <Route path={"*"} element={<TeamMain pName={TeamBlog.p_blog.pName} pBanner={TeamBlog.p_blog.pBanner}/>} />
          </Routes>
        </>
      ) : (
        <>로딩중</>
      )}
    </div>
  );
};

export default TeamBlogRouter;
