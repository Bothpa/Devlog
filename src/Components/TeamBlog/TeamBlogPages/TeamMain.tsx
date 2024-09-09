import TeamBlogBanner from "../TeamBlogComponents/TeamBlogBanner";
import TeamBlogAboutProjectBanner from "../TeamBlogComponents/TeamBlogAboutProjectBanner";
import { Route, Routes, useParams } from "react-router-dom";
import TeamBlogAboutProject from "../TeamBlogComponents/TeamBlogAboutProject";
import TeamBlogPostCardSpace from "../TeamBlogComponents/TeamBlogPostCardSpace";
import TeamBlogInterface from "../../../Interface/TeamBlog/TeamBlogInterface";

const TeamMain = ({TeamBlogData} : {TeamBlogData :TeamBlogInterface}) => {

  return (
    <>
      <TeamBlogBanner url={TeamBlogData.p_blog.pBanner} pName={TeamBlogData.p_blog.pName} />
      <TeamBlogAboutProjectBanner TeamBlogData={TeamBlogData} />
      <Routes>
          <Route path="/" element={<TeamBlogPostCardSpace />}/>
          <Route path="/aboutproject" element={<TeamBlogAboutProject inproduce={TeamBlogData.AboutProjectBanner.inproduce} />}/>
          <Route path={"*"} element={<TeamBlogPostCardSpace />} />
      </Routes>
    </>
  );
};

export default TeamMain;
