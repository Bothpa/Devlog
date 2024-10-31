import PostCardInterface from "../../../Interface/Main/PostCardInterface";

const PostCardSimple: React.FC<{data:PostCardInterface}> = ({data}) => {
  const name = data.userName;
  const boardUuid = data.boardUuid;
  const boardTitle = data.title;
  const boardContent = data.content;
  const imgPath = data.boardProfilepath;
  const comment_count = data.visitCount;
  const userIcon = "data.";
  const pDName = "data.pDName";

  const year = data.boardDate.getFullYear();
  const month = data.boardDate.getMonth() + 1;
  const day = data.boardDate.getDate();

  const ClickEvent = () => {
    console.log("/" + pDName + "/" + boardUuid + " 로 이동");
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
