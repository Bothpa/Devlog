import { use } from "marked";
import TeamBlogInterface from "../../../Interface/TeamBlog/TeamBlogInterface";
import TeamBlogBanner from "../TeamBlogComponents/TeamBlogBanner";
import TeamBlogCateBar from "../TeamBlogComponents/TeamBlogCateBar";
import TeamBlogPostCardLongSimple from "../TeamBlogComponents/TeamBlogPostCardLongSimple";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";

const TeamDevelopmentJournal = ({TeamBlogData} : {TeamBlogData :TeamBlogInterface}) => {
    const { domain } = useParams();
    const [searchParams] = useSearchParams();
    const ParamCategory = searchParams.get('category');
    const [postData, setPostData] = useState<PostCardInterface[]>([]);

    useEffect(() => {
        if(ParamCategory === null){
            axios.get(`/api/board/t/${domain}`)
            .then((res) => {
                setPostData(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }else{
            axios.get(`/api/board/t/${domain}/${ParamCategory}`)
            .then((res) => {
                setPostData(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    },[ParamCategory]);

    return (
        <>
        <TeamBlogBanner url={TeamBlogData.tbanner} pName={TeamBlogData.tname} />
        <div className="w-full h-[200px] flex flex-row mt-[370px] CenterPadding">
            <TeamBlogCateBar />
            <div className="w-full flex flex-col pl-5 pr-5">
                <span className="text-[28px] font-bold mb-2">Lastest Posts</span>
                {postData.map((post, index) => (
                    <TeamBlogPostCardLongSimple data={post}/>
                ))}
            </div>
        </div>
        </>
    );
}

export default TeamDevelopmentJournal;