import PostCard from "./PostCard";
import { dataShort } from "../MainPages/testData";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";
import { useEffect, useState } from "react";

interface CategoryHotPostProps {
  selectedCategory: string;
}

const CategoryHotPost: React.FC<CategoryHotPostProps> = ({
  selectedCategory,
}) => {
  const [PostCardData, setPostCardData] =
    useState<PostCardInterface[]>(dataShort);

  useEffect(() => {
    console.log("카테고리변경");
  }, [selectedCategory]);

  return (
    <div className="CenterPadding w-full h-[400px] absolute left-0 flex flex-row flex-nowrap items-center bg-gradient-to-r from-[#ACBAF9] to-[#F1C3BE]">
      {PostCardData.map((data, index) => {
        return (
          <div key={index} className="ml-auto mr-auto">
            <PostCard {...data} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryHotPost;
