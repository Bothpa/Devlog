import PostCardInterface from "../../../Interface/Main/PostCardInterface";

const PostCardLong: React.FC<{data:PostCardInterface}> = ({data}) => {
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

  const PostCardLongClickEvent = () => {
    console.log("/" + pDName + "/" + boardUuid + " 로 이동");
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
