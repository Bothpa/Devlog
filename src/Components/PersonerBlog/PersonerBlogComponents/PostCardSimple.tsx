import { useNavigate } from "react-router-dom";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";

const PostCardSimple: React.FC<{data:PostCardInterface}> = ({data}) => {
  const navigate = useNavigate();
  const name = data.userName;
  const boardUuid = data.boardUuid;
  const boardTitle = data.title;
  const boardContent = data.content;
  const imgPath = data.boardProfilepath;
  const comment_count = data.visitCount;
  const userIcon = "data.";
  const pDName = "data.pDName";

  const date = new Date(data.boardDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const ClickEvent = () => {
    navigate("/p" + "/" + pDName + "/" + boardUuid);
  };
  return (
    <div className="w-[200px] mr-auto cursor-pointer" onClick={ClickEvent}>
      <img
        src={`${imgPath ? imgPath : "DefaultImg.svg"}`}
        className="w-[200px] h-[240px] object-cover rounded-md"
      />
      <span className="font-bold line-clamp-1 mt-1">{boardTitle}</span>
      <span className="text-zinc-400 text-sm h-fit">
        {year}년 {month}월 {day}일
      </span>
    </div>
  );
};

export default PostCardSimple;
