import { useLocation } from "react-router-dom";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";
import PostCardLong from "../MainComponents/PostCardLong";
import { useState } from "react";
import { dataShort } from "./testData";
const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("value");
  const [PostCardData, setPostCardData] =
    useState<PostCardInterface[]>([]);
  return (
    <div>
      <div className="CenterPadding w-full h-[280px] absolute left-0 flex flex-row flex-nowrap items-center justify-center bg-gradient-to-r text-3xl font-bold  from-[#ACBAF9] to-[#F1C3BE]">
        <span className="text-white pr-1">'{value}'</span>에 관한 검색
        결과입니다.
      </div>
      <div className="w-full CenterPadding absolute left-0 top-[390px]">
        <div className="w-full CenterPadding flex flex-col">
            {PostCardData.map((data, index) => {
                return <PostCardLong data={data} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
