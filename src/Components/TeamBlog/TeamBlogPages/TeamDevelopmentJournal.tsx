import TeamBlogInterface from "../../../Interface/TeamBlog/TeamBlogInterface";
import TeamBlogBanner from "../TeamBlogComponents/TeamBlogBanner";

const TeamDevelopmentJournal = ({TeamBlogData} : {TeamBlogData :TeamBlogInterface}) => {
    return (
        <>
        <TeamBlogBanner url={TeamBlogData.p_blog.pBanner} pName={TeamBlogData.p_blog.pName} />
        <div className="w-full h-[200px] flex flex-col mt-[350px]">
            개발일지
        </div>
        </>
    );
}

export default TeamDevelopmentJournal;