import PostCardInterface from "../../../Interface/Main/PostCardInterface";

const PostCardLong: React.FC<PostCardInterface> = (PostCardProps) => {
  const { name } = PostCardProps.users;
  const { userIcon } = PostCardProps.users.user_info;
  const { boardId, boardTitle, boardDate, boardContent } = PostCardProps.boards;
  const { imgPath } = PostCardProps.boards.images;
  const { comment_count, isLike } = PostCardProps.config;
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
