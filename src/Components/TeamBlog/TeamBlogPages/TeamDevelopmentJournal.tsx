import TeamBlogInterface from "../../../Interface/TeamBlog/TeamBlogInterface";
import TeamBlogBanner from "../TeamBlogComponents/TeamBlogBanner";
import TeamBlogCateBar from "../TeamBlogComponents/TeamBlogCateBar";
import TeamBlogPostCardLongSimple from "../TeamBlogComponents/TeamBlogPostCardLongSimple";

const TeamDevelopmentJournal = ({TeamBlogData} : {TeamBlogData :TeamBlogInterface}) => {

    return (
        <>
        <TeamBlogBanner url={TeamBlogData.p_blog.pBanner} pName={TeamBlogData.p_blog.pName} />
        <div className="w-full h-[200px] flex flex-row mt-[370px] CenterPadding">
            <TeamBlogCateBar />
            <div className="w-full flex flex-col pl-5 pr-5">
                <span className="text-[28px] font-bold mb-2">Lastest Posts</span>
                {[1,2,3,4,5,6].map((post, index) => (
                    <TeamBlogPostCardLongSimple />
                ))}
            </div>
        </div>
        </>
    );
}

export default TeamDevelopmentJournal;