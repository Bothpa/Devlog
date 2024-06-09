import { useState } from "react";
import {hottopic} from "../MainPages/testData";

interface HotTopicCardProps {
  text: string;
}

const HotTopicCard: React.FC<HotTopicCardProps> = ({ text }) => {
  const HotTopicClickEvent = (e: any) => {
    e.stopPropagation();
    console.log(text + " 클릭");
  };

  return (
    <div
      onClick={HotTopicClickEvent}
      className="min-w-16 p-1 pl-2 pr-2 bg-white text-[#A9BAFF] border-2 border-[#7B8FE190] rounded-lg mr-3 cursor-pointer flex items-center justify-center line-clamp-1"
    >
      {text}
    </div>
  );
};

const HotTopic = () => {
  const [HotTopicData, setHotTopicData] = useState<string[]>(hottopic);

  return (
    <div className="absolute top-[175px] w-[700px]">
      <div className="text-white mb-2 font-bold">#실시간 핫토픽</div>
      <div className="flex flex-row">
        {HotTopicData.map((data, index) => {
          return <HotTopicCard key={index} text={data} />;
        })}
      </div>
    </div>
  );
};

export default HotTopic;
