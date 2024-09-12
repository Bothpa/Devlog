import TeamBlogBanner from "../TeamBlogComponents/TeamBlogBanner";
import TeamBlogAboutProjectBanner from "../TeamBlogComponents/TeamBlogAboutProjectBanner";
import TeamBlogInterface from "../../../Interface/TeamBlog/TeamBlogInterface";

const TeamMemberIntroduction = ({TeamBlogData} : {TeamBlogData :TeamBlogInterface}) => {
  return (
    <>
    <TeamBlogBanner url={TeamBlogData.p_blog.pBanner} pName={TeamBlogData.p_blog.pName} />
    <TeamBlogAboutProjectBanner TeamBlogData={TeamBlogData} />
    <div className="w-full h-[200px] flex flex-col">
        팀원소개 만드셈
    </div>
    </>
  );
}

export default TeamMemberIntroduction;