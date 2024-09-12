import TeamBlogBanner from "../TeamBlogComponents/TeamBlogBanner";
import TeamBlogAboutProjectBanner from "../TeamBlogComponents/TeamBlogAboutProjectBanner";
import TeamBlogPostCardSpace from "../TeamBlogComponents/TeamBlogPostCardSpace";
import TeamBlogInterface from "../../../Interface/TeamBlog/TeamBlogInterface";

const TeamMain = ({TeamBlogData} : {TeamBlogData :TeamBlogInterface}) => {

  return (
    <>
      <TeamBlogBanner url={TeamBlogData.p_blog.pBanner} pName={TeamBlogData.p_blog.pName} />
      <TeamBlogAboutProjectBanner TeamBlogData={TeamBlogData} />
      <TeamBlogPostCardSpace />
    </>
  );
};

export default TeamMain;
