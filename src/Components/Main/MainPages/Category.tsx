import { useEffect, useState } from "react";
import MainCategorySelectBar from "../MainComponents/MainCategorySelectBar";
import CategoryHotPost from "../MainComponents/CategoryHotPost";
import MainCategoryPost from "../MainComponents/MainCategoryPost";
import axios from "axios";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("design");
  const [PostCardData, setPostCardData] = useState<PostCardInterface[]>([]);
  
  useEffect(() => {
    axios.get(`/api/board/tagboard/${selectedCategory}`)
    .then((res) => {
      if(res.status === 200) {
        setPostCardData(res.data);
        console.log(res.data);
      }
    })
    .catch((err) => {
      console.error(err);
    });
  }, [selectedCategory]);

  return (
    <div className="w-full h-full">
      <MainCategorySelectBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {PostCardData.length === 0 ? (
        <div>로딩중</div>
        ) : (
          <>
            {PostCardData.length >= 4 ? (
              <CategoryHotPost PostCardData={PostCardData.slice(0, 4)} />
            ) : (
              <CategoryHotPost PostCardData={PostCardData} />
            )}
            <MainCategoryPost PostCardData={PostCardData.slice(4)} />
          </>
        )}
    </div>
  );
};

export default Category;
