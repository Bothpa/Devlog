import PostCardInterface from "../../../Interface/Main/PostCardInterface";

const PostCardSimple: React.FC<PostCardInterface> = (PostCardProps) => {
  const { name } = PostCardProps.users;
  const { userIcon } = PostCardProps.users.user_info;
  const { boardId, boardTitle, boardDate, boardContent } = PostCardProps.boards;
  const { imgPath } = PostCardProps.boards.images;
  const { comment_count, isLike } = PostCardProps.config;
  const { pDName } = PostCardProps.p_blog;
  const year = boardDate.getFullYear();
  const month = boardDate.getMonth() + 1;
  const day = boardDate.getDate();

  const ClickEvent = () => {
    console.log("/" + pDName + "/" + boardId + " 로 이동");
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
