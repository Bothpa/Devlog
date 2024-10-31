import TeamBlogBanner from "../TeamBlogComponents/TeamBlogBanner";
import TeamBlogAboutProjectBanner from "../TeamBlogComponents/TeamBlogAboutProjectBanner";
import TeamBlogInterface from "../../../Interface/TeamBlog/TeamBlogInterface";

const TeamBlogAboutProject = ({TeamBlogData} : {TeamBlogData :TeamBlogInterface}) => {
  return (
    <>
    <TeamBlogBanner url={TeamBlogData.tbanner} pName={TeamBlogData.tname} />
    <div className="w-full h-[200px] flex flex-col mt-[370px]">
      <span className="text-xl font-bold mb-3">Inproduce</span>
      <span>{TeamBlogData.tinfo}</span>
    </div>
    </>
  );
}

export default TeamBlogAboutProject;