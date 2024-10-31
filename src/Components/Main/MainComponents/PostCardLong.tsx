import { useNavigate } from "react-router-dom";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";

const PostCardLong: React.FC<{data:PostCardInterface}> = ({data}) => {
  const navigate = useNavigate();
  const name = data.userName;
  const boardUuid = data.boardUuid;
  const boardTitle = data.title;
  const boardContent = data.content;
  const imgPath = data.boardProfilepath;
  const comment_count = data.commentCount;
  const userIcon = data.userIcon == null || data.userIcon == "" ? "/Icon/DefaultProfileImg.png" : data.userIcon;
  const pDName = data.pdomain;
  const date = new Date(data.boardDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const PostCardLongClickEvent = () => {
    navigate(`/p/${pDName}/${boardUuid}`);
  };

  return (
    <div
      className="h-[165px] w-full p-1 pt-3 pb-3 border-b flex flex-row cursor-pointer"
      onClick={PostCardLongClickEvent}
    >
      <div className="flex flex-col pr-10 ">
        <span className="text-xl font-bold">{boardTitle}</span>
        <span className="text-base mt-1 line-clamp-2">{boardContent}</span>
        <div className="flex mt-auto flex-row items-center">
          <img
            src={`${userIcon}`}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-base ml-2">{name}</span>
          <span className="ml-3 text-sm mt-auto text-zinc-400">
            {year}.{month}.{day}
          </span>
        </div>
      </div>
      <img
        src={`${imgPath}`}
        className="h-full w-[200px] ml-auto object-cover"
      />
    </div>
  );
};

export default PostCardLong;
