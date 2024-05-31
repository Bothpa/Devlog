import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PersonerBlogHeader from "../Headers/PersonerBlogHeader";
import PersonerBlogMain from "../Components/PersonerBlog/PersonerBlogPages/PersonerBlogMain";
import PersonerBlogPost from "../Components/PersonerBlog/PersonerBlogPages/PersonerBlogPost";
import PersonerBlogBanner from "../Components/PersonerBlog/PersonerBlogComponents/PersonerBlogBanner";
import PersonerBlogInterface from "../Interface/PersonerBlog/PersonerBlogInterface";
import PersonerBlogUserInfo from "../Components/PersonerBlog/PersonerBlogComponents/PersonerBlogUserInfo";
import PersonerBlogSideBar from "../Components/PersonerBlog/PersonerBlogComponents/PersonerBlogSideBar";
import { TD } from "../Components/Main/MainPages/testData";

const PersonerBlogRouter = () => {
  const [PersonerBlogData, setPersonerBlogData] =
    useState<PersonerBlogInterface | null>(TD);

  const { domain } = useParams();

  useEffect(() => {
    console.log(domain);
  }, [domain]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      {PersonerBlogData ? (
        <>
          <PersonerBlogHeader pName={PersonerBlogData.p_blog.pName} />
          <PersonerBlogBanner
            url={PersonerBlogData.p_blog.pBanner}
            pName={PersonerBlogData.p_blog.pName}
          />
          <div className="pt-5 w-[1000px] flex flex-row">
            <div className="w-[220px]">
              <PersonerBlogUserInfo
                userIcon={PersonerBlogData.users.user_info.userIcon}
                userGit={PersonerBlogData.users.user_info.userGit}
                userInfo={PersonerBlogData.users.user_info.userInfo}
                userInsta={PersonerBlogData.users.user_info.userInsta}
                userX={PersonerBlogData.users.user_info.userX}
              />
              <PersonerBlogSideBar
                category={PersonerBlogData.category.cateName}
              />
            </div>
            <div className="w-[780px] pl-10 pt-0">
              <Routes>
                <Route path="/" element={<PersonerBlogMain />} />
                <Route path="/:postid" element={<PersonerBlogPost />} />
                <Route path={"*"} element={<PersonerBlogMain />} />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <>로딩중</>
      )}
    </div>
  );
};

export default PersonerBlogRouter;
