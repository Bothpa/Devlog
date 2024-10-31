import TeamBlogBanner from "../TeamBlogComponents/TeamBlogBanner";
import TeamBlogAboutProjectBanner from "../TeamBlogComponents/TeamBlogAboutProjectBanner";
import TeamBlogInterface from "../../../Interface/TeamBlog/TeamBlogInterface";
import { useEffect, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import axios from "axios";

const MemberCard:React.FC<{data:{name:string, position:string, userIcon:string|null}}> =  ({data}) => {
    return (
      <motion.div
      className="w-[240px] h-[270px] cursor-pointer z-[999] ml-auto mr-auto"
      style={{ boxShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}
      whileHover={{
        y: -10,
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.3)",
        scale: 1.01,
      }}
    >
      <div className="w-full h-[88%] p-4 flex flex-col items-center justify-center">
        <img
          src={`${data.userIcon == null || data.userIcon == "" ? "/Icon/DefaultProfileImg.png" : data.userIcon }`}
          alt=""
          className="w-[7rem] h-[7rem] rounded-full mb-4"
        />
        <div className="font-bold text-xl mb-4">{data.name}</div>
        <div className="text-lg w-3/5 text-center mb-4 line-clamp-3">{data.position}</div>
      </div>
    </motion.div>
    )
}

const TeamMemberIntroduction = ({TeamBlogData} : {TeamBlogData :TeamBlogInterface}) => {
  const [memberData, setMemberData] = useState<{name:string, position:string, userIcon:string|null}[]>([]);
  useEffect(() => {
    axios.get(`/api/t/${TeamBlogData.tdomain}/members`)
    .then((res) => {
      setMemberData(res.data);
    })
    .catch((err) => {
      console.error(err);
    })
  },[]);

  return (
    <>
    <TeamBlogBanner url={TeamBlogData.tbanner} pName={TeamBlogData.tname} />
    <div className="w-full h-fit flex flex-col mt-[370px]">
      {memberData.map((data, index) => {
          return <MemberCard key={index} data={data}/>;
      })}
    </div>
    </>
  );
}

export default TeamMemberIntroduction;