import PostCardInterface from "../../../Interface/Main/PostCardInterface";

const PostCardLongSimple: React.FC<{data:PostCardInterface}> = ({data}) => {
  const name = data.userName;
  const boardUuid = data.boardUuid;
  const boardTitle = data.title;
  const boardContent = data.content;
  const imgPath = data.boardProfilepath;
  const comment_count = data.visitCount;
  const userIcon = "data.";
  const pDName = "data.pDName";
  const cateName = data.categories;

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
