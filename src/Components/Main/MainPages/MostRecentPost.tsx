import { useState } from "react";
import PostCard from "../MainComponents/PostCard";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";

import { data } from "./testData";

const MostRecentPost = () => {
  const [PostCardData, setPostCardData] = useState<PostCardInterface[]>([]);

  return (
    <div className="w-full h-full pt-6 flex flex-wrap justify-items-center">
      {PostCardData.map((data, index) => {
        return (
          <div key={index} className="ml-auto mr-auto mb-5">
            <PostCard data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default MostRecentPost;
