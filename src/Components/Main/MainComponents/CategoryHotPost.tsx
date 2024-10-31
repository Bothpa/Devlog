import PostCard from "./PostCard";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";

const CategoryHotPost: React.FC<{PostCardData:PostCardInterface[]}> = ({PostCardData}) => {
  return (
    <div className="CenterPadding w-full h-[400px] absolute left-0 flex flex-row flex-nowrap items-center bg-gradient-to-r from-[#ACBAF9] to-[#F1C3BE]">
      {PostCardData.map((data, index) => {
        return (
          <div key={index} className="ml-auto mr-auto">
            <PostCard data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryHotPost;
