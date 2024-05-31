import PostCardInterface from "../../../Interface/Main/PostCardInterface";

const PostCardLongSimple: React.FC<PostCardInterface> = (PostCardProps) => {
  const { name } = PostCardProps.users;
  const { userIcon } = PostCardProps.users.user_info;
  const { boardId, boardTitle, boardDate, boardContent } = PostCardProps.boards;
  const { imgPath } = PostCardProps.boards.images;
  const { comment_count, isLike } = PostCardProps.config;
  const { cateName } = PostCardProps.categorys;
  const { pDName } = PostCardProps.p_blog;
  const year = boardDate.getFullYear();
  const month = boardDate.getMonth() + 1;
  const day = boardDate.getDate();

  const PostCardLongClickEvent = () => {
    console.log("/" + pDName + "/" + boardId + " 로 이동");
  };

  return (
    <div
      className="h-[165px] w-full p-1 pt-3 pb-3 border-b flex flex-row cursor-pointer"
      onClick={PostCardLongClickEvent}
    >
      <div className="flex flex-col pr-10 ">
        <span className="text-xl font-bold">{boardTitle}</span>
        <span className="text-base mt-1 line-clamp-2">{boardContent}</span>
        <div className="flex mt-auto flex-row items-center text-sm text-zinc-400">
          <span className="mr-3">{cateName}</span>
          <span>
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

export default PostCardLongSimple;
