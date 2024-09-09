import { useState } from "react";

const TeamBlogAboutProject = ({inproduce} : {inproduce:string}) => {
  return (
    <div className="w-full h-[200px] flex flex-col">
      <span className="text-xl font-bold mb-3">Inproduce</span>
      <span>{inproduce}</span>
    </div>
  );
}

export default TeamBlogAboutProject;