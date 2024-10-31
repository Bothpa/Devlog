import BlogCard from "../MainComponents/BlogCard";
import { useEffect, useState } from "react";
import MySubscribingBlog from "../MainComponents/MySubcribingBlog";
import SubscribedBlogCard from "../MainComponents/SubscribedBlogCard";
import SubscribedBlogCardInterface from "../../../Interface/Main/SubscribedBlogInterface";
import { TokenAxios } from "../../../Axios/AxiosHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Subscribing = () => {
  const navigate = useNavigate();
  const [RecommendationBlog, setRecommendationBlog] = useState<SubscribedBlogCardInterface[]>([]); // 금주의 추천 블로그
  const [SearchSubscribingBlog, setSearchSubscribingBlog] = useState<string>(""); // 구독중인 블로그 검색어
  const [blogs, setBlogs] = useState<SubscribedBlogCardInterface[]>([]); // 구독중인 블로그
  const [yame , setYame] = useState<number>(0);

  useEffect(() => {
    TokenAxios.get("/user/s")
    .then((res) => {
      if(res.status === 200) {
        setBlogs(res.data);
      }else{
        setBlogs([]);
      }
    })
    .catch((err) => {
      console.error(err);
    })
  },[yame]);

  useEffect(() => {
    TokenAxios.get("/user/list")
    .then((res) => {
      if(res.status === 200) {
        setRecommendationBlog(res.data);
      }
    })
    .catch((err) => {
      console.error(err);
    })
  },[]);

  return (
    <div className="w-full h-full">
      <div className="mb-[20px] mt-3 text-base line-clamp-1">
        금주의 추천 블로그
      </div>
      <div className="flex flex-row flex-nowrap items-center pb-10 border-b-2">
        {RecommendationBlog.length != 0 && (
          <>
          {RecommendationBlog?.map((data, index) => {
            return <BlogCard key={index} data={data} setYame={setYame}/>;
          })}
          </>
        )}
      </div>

      <div className="CenterPadding">
        <MySubscribingBlog func={setSearchSubscribingBlog}/>
        {blogs?.map((data, index) => {
          if (
            data.pblogDTO.name.includes(SearchSubscribingBlog || "") ||
            data.name.includes(SearchSubscribingBlog || "") 
          ) {
            return (
              <SubscribedBlogCard key={index} data={data} setYame={setYame}
                SearchSubscribingBlog={
                  SearchSubscribingBlog ? SearchSubscribingBlog : ""
                }
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Subscribing;
