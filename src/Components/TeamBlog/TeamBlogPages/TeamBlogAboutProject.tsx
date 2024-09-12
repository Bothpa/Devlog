import TeamBlogBanner from "../TeamBlogComponents/TeamBlogBanner";
import TeamBlogAboutProjectBanner from "../TeamBlogComponents/TeamBlogAboutProjectBanner";
import TeamBlogInterface from "../../../Interface/TeamBlog/TeamBlogInterface";

const TeamBlogAboutProject = ({TeamBlogData} : {TeamBlogData :TeamBlogInterface}) => {
  return (
    <>
    <TeamBlogBanner url={TeamBlogData.p_blog.pBanner} pName={TeamBlogData.p_blog.pName} />
    <TeamBlogAboutProjectBanner TeamBlogData={TeamBlogData} />
    <div className="w-full h-[200px] flex flex-col">
      <span className="text-xl font-bold mb-3">Inproduce</span>
      <span>{TeamBlogData.AboutProjectBanner.inproduce}</span>
    </div>
    </>
  );
}

export default TeamBlogAboutProject;