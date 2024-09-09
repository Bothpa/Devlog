import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamBlogInterface from "../../../Interface/TeamBlog/TeamBlogInterface";

const TeamBlogAboutProjectBanner = ({TeamBlogData} : {TeamBlogData :TeamBlogInterface}) => {
  const { domain } = useParams();

  useEffect(() => {
    console.log(domain);
    //여기에 팀블로그 소개배너를 가져오는 함수를 넣어주세요.
  },[domain]);
    
  return (
    <div className="w-full h-[300px] flex flex-row flex-wrap mt-[350px] mb-3">
      {TeamBlogData.AboutProjectBanner?.isImageBanner? (
        <div className="w-full h-full flex flex-row flex-wrap">
          <img src={TeamBlogData.AboutProjectBanner.bannerImage? TeamBlogData.AboutProjectBanner.bannerImage : 'default.png'} alt="Banner" className="w-full h-full object-cover"/>
        </div>
      ) : (
        <div className="w-full h-full flex flex-row flex-wrap">
          <span className="w-full font-bold text-2xl mb-5">{TeamBlogData.AboutProjectBanner?.bannerText}</span>
        </div>
      )}
    </div>
  );
};

export default TeamBlogAboutProjectBanner;