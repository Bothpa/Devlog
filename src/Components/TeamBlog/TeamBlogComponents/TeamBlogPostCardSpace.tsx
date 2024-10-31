import TeamBlogPostCard from "../TeamBlogComponents/TeamBlogPostCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";


const TeamBlogPostCardSpace = () => {
    const [PostCardData, setPostCardData] = useState<PostCardInterface[]>([]);
    const { domain } = useParams();
  
    useEffect(() => {
      axios.get(`/api/board/t/${domain}`)
      .then((res) => {
        setPostCardData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    },[domain]);
  
    return (
      <>
      <span className="w-full font-bold text-2xl mb-5 mt-[370px]">Lastest Posts</span>
      <div className="w-full h-full flex flex-row flex-wrap">
        {PostCardData.slice(0,4).map((data, index) => {
          return (
            <div key={index} className="ml-auto mr-auto mb-5">
              <TeamBlogPostCard data={data} />
            </div>
          );
        })}
      </div>
      </>
    );
}

export default TeamBlogPostCardSpace;