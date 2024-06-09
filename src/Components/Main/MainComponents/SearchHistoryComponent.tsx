import { useState } from "react";
import { testHistoryData } from "../MainPages/testData";

interface SearchHistoryComponentProps {
  isHidden: boolean;
  searchValue: string;
}
interface HistoryCardProps {
  text: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ text }) => {
  const ClickEvent = () => {
    console.log(text + " 클릭");
  };
  return (
    <div className="flex flex-row p-2 pl-[30px] hover:bg-[#E9EDFE]">
      <div className="flex flex-row items-center">
        <img src={`/Icon/Search.png`} className="w-4 h-4" />
        <div
          onClick={ClickEvent}
          className="ml-2 cursor-pointer font-bold text-[16px]"
        >
          {text}
        </div>
      </div>
    </div>
  );
};

const RecommendationCard: React.FC<HistoryCardProps> = ({ text }) => {
  const ClickEvent = () => {
    console.log(text + " 클릭");
  };
  return (
    <div className="flex flex-row p-2 pl-[30px] hover:bg-[#E9EDFE]">
      <div className="flex flex-row items-center">
        <img src={`/Icon/Reload.png`} className="w-4 h-4" />
        <div
          onClick={ClickEvent}
          className="ml-2 cursor-pointer font-bold text-[16px]"
        >
          {text}
        </div>
      </div>
    </div>
  );
};

const SearchHistoryComponent: React.FC<SearchHistoryComponentProps> = ({
  isHidden,
  searchValue,
}) => {
  const [HistoryData, setHistoryData] =
    useState<HistoryCardProps[]>(testHistoryData);
  const [RecommendationData, setRecommendationData] =
    useState<HistoryCardProps[]>(testHistoryData);

  return (
    <div
      className={`bg-white w-[700px] fixed top-[293px] rounded-b-2xl border-[1.5px] border-t-0 border-[#7B8FE190] ${
        isHidden ? "hidden" : "block"
      }`}
    >
      {HistoryData?.map((data, index) => {
        return <HistoryCard key={index} text={data.text} />;
      })}
      {RecommendationData?.map((data, index) => {
        return <RecommendationCard key={index} text={data.text} />;
      })}
    </div>
  );
};

export default SearchHistoryComponent;
