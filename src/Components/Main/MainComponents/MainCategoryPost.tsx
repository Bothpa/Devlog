import { useEffect, useState } from "react";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";
import PostCardLong from "./PostCardLong";
import { dataShort } from "../MainPages/testData";

interface MainCategoryPostProps {
  selectedCategory: string;
}

const MainCategoryPost: React.FC<MainCategoryPostProps> = ({
  selectedCategory,
}) => {
  const [PostCardData, setPostCardData] = useState<PostCardInterface[]>([]);

  useEffect(() => {
    console.log("카테고리변경");
  }, [selectedCategory]);

  return (
    <div className="w-full CenterPadding absolute left-0 top-[590px]">
      <div className="w-full CenterPadding flex flex-col">
        {PostCardData.map((data, index) => {
          return <PostCardLong data={data} key={index} />;
        })}
      </div>
    </div>
  );
};

export default MainCategoryPost;
