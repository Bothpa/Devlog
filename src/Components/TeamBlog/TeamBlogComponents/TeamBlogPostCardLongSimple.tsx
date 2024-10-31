import { useNavigate } from "react-router-dom";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";

const TeamBlogPostCardLongSimple: React.FC<{data:PostCardInterface}> = ({data}) => {
  const navigate = useNavigate();
  const name = data.userName;
  const userIcon = data.userIcon;
  const imgPath = data.boardProfilepath;
  const tdomain = data.tdomain;
  const boardId = data.boardUuid;
  const boardTitle = data.title;
  const boardContent = data.content;
  const date = new Date(data.boardDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const position = data.position;

  const PostCardLongClickEvent = () => {
    navigate("/t/" + tdomain + "/" + boardId ) 
  };

  return (
    <div className="h-[200px] w-full p-1 pt-3 pb-3 border-b flex flex-row cursor-pointer" onClick={PostCardLongClickEvent}>
      <div className="flex flex-col pr-10 ">
        <span className="text-xl font-bold">{boardTitle}</span>
        <span className="text-base mt-1 line-clamp-2 mb-4 text-zinc-600">{boardContent}</span>
        <div className="flex mt-auto flex-row items-center text-sm">
          <span className="mr-1">{name}</span>
          <span className="mr-3 text-zinc-400">{position}</span>
          <span>{year}.{month}.{day}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamBlogPostCardLongSimple;
