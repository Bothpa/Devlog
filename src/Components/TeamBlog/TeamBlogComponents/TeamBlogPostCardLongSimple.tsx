import { useNavigate } from "react-router-dom";

const TeamBlogPostCardLongSimple: React.FC = () => {
  const navigate = useNavigate();
  // const year = boardDate.getFullYear();
  // const month = boardDate.getMonth() + 1;
  // const day = boardDate.getDate();
  const year = 2024
  const month = 7
  const day = 26

  const PostCardLongClickEvent = () => {
    navigate("/t/" + '팀블로그도메인' + "/" + '게시물아이디') 
  };

  return (
    <div className="h-[200px] w-full p-1 pt-3 pb-3 border-b flex flex-row cursor-pointer" onClick={PostCardLongClickEvent}>
      <div className="flex flex-col pr-10 ">
        <span className="text-xl font-bold">게시물 제목</span>
        <span className="text-base mt-1 line-clamp-2 mb-4 text-zinc-600">게시물 컨텐츠게시물 컨텐츠게시물 컨텐츠게시물 컨텐츠게시물 컨텐츠게시물 컨텐츠게시물 컨텐츠게시물 컨텐츠게시물 컨텐츠게시물 컨텐츠게시물 컨텐츠게시물 컨텐츠</span>
        <div className="flex mt-auto flex-row items-center text-sm">
          <span className="mr-1">작성자이름</span>
          <span className="mr-3 text-zinc-400">작성자직무</span>
          <span>{year}.{month}.{day}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamBlogPostCardLongSimple;
