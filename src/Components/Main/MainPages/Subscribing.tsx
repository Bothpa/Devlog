import BlogCard from "../MainComponents/BlogCard";
import BlogCardInterface from "../../../Interface/Main/BlogCardInterface";
import { useState } from "react";
import MySubscribingBlog from "../MainComponents/MySubcribingBlog";
import SubscribedBlogCard from "../MainComponents/SubscribedBlogCard";
import SubscribedBlogsStore from "../../../Store/SubscribedBlogsStore";

import { data2 } from "./testData";

const Subscribing = () => {
  const { blogs } = SubscribedBlogsStore.getState();
  const [RecommendationBlog, setRecommendationBlog] = useState<BlogCardInterface[]>(data2); // 금주의 추천 블로그
  const [SearchSubscribingBlog, setSearchSubscribingBlog] = useState<string>(); // 구독중인 블로그 검색어

  return (
    <div className="w-full h-full">
      <div className="mb-[20px] mt-3 text-base line-clamp-1">
        금주의 추천 블로그
      </div>
      <div className="flex flex-row flex-nowrap items-center pb-10 border-b-2">
        {RecommendationBlog.map((data, index) => {
          return <BlogCard key={index} {...data} />;
        })}
      </div>

      <div className="CenterPadding">
        <MySubscribingBlog func={setSearchSubscribingBlog}/>
        {blogs?.map((data, index) => {
          if (
            data.users.name.includes(SearchSubscribingBlog || "") ||
            data.p_blog.pName.includes(SearchSubscribingBlog || "")
          ) {
            return (
              <SubscribedBlogCard
                key={index}
                {...data}
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
