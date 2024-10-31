import PostCardInterface from "../../../Interface/Main/PostCardInterface";
import PostCardLong from "./PostCardLong";

const MainCategoryPost: React.FC<{PostCardData:PostCardInterface[]}> = ({PostCardData}) => {
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
