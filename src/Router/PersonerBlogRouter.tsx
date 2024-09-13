import { Route, Routes, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PersonerBlogHeader from "../Headers/PersonerBlogHeader";
import PersonerBlogMain from "../Components/PersonerBlog/PersonerBlogPages/PersonerBlogMain";
import PersonerBlogPost from "../Components/PersonerBlog/PersonerBlogPages/PersonerBlogPost";
import PersonerBlogBanner from "../Components/PersonerBlog/PersonerBlogComponents/PersonerBlogBanner";
import PersonerBlogInterface from "../Interface/PersonerBlog/PersonerBlogInterface";
import PersonerBlogUserInfo from "../Components/PersonerBlog/PersonerBlogComponents/PersonerBlogUserInfo";
import PersonerBlogSideBar from "../Components/PersonerBlog/PersonerBlogComponents/PersonerBlogSideBar";
import PersonerBlogCategory from "../Components/PersonerBlog/PersonerBlogComponents/PersonerBlogCategory";
import { TD } from "../Components/Main/MainPages/testData";

const PersonerBlogRouter = () => {
  const [PersonerBlogData, setPersonerBlogData] = useState<PersonerBlogInterface | null>(TD);
  const { domain } = useParams();

  useEffect(() => {
    console.log(domain);
  }, [domain]);

  const ConditionalComponent = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
  
    if (category) {
      return <PersonerBlogCategory />;
    } else {
      return <PersonerBlogMain />;
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center HeaderPadding">
      {PersonerBlogData ? (
        <>
          <PersonerBlogHeader pName={PersonerBlogData.p_blog.pName} pDName={PersonerBlogData.p_blog.pDname} />
          <PersonerBlogBanner url={PersonerBlogData.p_blog.pBanner} pName={PersonerBlogData.p_blog.pName}/>
          <div className="pt-5 w-[1020px] flex flex-row">
            <div className="w-[220px]">
              <PersonerBlogUserInfo
                userIcon={PersonerBlogData.users.user_info.userIcon}
                userGit={PersonerBlogData.users.user_info.userGit}
                userInfo={PersonerBlogData.users.user_info.userInfo}
                userInsta={PersonerBlogData.users.user_info.userInsta}
                userX={PersonerBlogData.users.user_info.userX}
              />
              <PersonerBlogSideBar
                category={PersonerBlogData.category}
                pDName={PersonerBlogData.p_blog.pDname}
              />
            </div>
            <div className="w-[800px] pl-10 pt-0">
              <Routes>
                <Route path="/" element={<ConditionalComponent />} />
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
