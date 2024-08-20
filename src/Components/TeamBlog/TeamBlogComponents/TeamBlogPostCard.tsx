import { useNavigate } from "react-router-dom";
import TeamBlogPostCardInterface from "../../../Interface/TeamBlog/TeamBlogPostCardInterface";
import { useCallback } from "react";
import { motion } from "framer-motion";

const TeamBlogPostCard: React.FC<TeamBlogPostCardInterface> = (
  TeamBlogPostCardProps
) => {
  const navigate = useNavigate();
  const { name } = TeamBlogPostCardProps.users;
  const { userIcon, userPosition } = TeamBlogPostCardProps.users.user_info;
  const { boardId, boardTitle, boardDate, boardContent } =
    TeamBlogPostCardProps.boards;
  const { imgPath } = TeamBlogPostCardProps.boards.images;
  const { pDName } = TeamBlogPostCardProps.p_blog;
  // const { comment_count, isLike } = PostCardProps.config;

  const year = boardDate.getFullYear();
  const month = boardDate.getMonth() + 1;
  const day = boardDate.getDate();

  const PostClickEvent = useCallback(() => {
    console.log("/" + pDName + "/" + boardId + " 로 이동");
    navigate("/p" + "/" + pDName + "/" + boardId);
  }, []);

  const LikeClickEvent = useCallback((e: any) => {
    e.stopPropagation();
    console.log(boardId + " 좋아요");
  }, []);

  // useEffect(()=>{
  //   console.log("PostCard useEffect");
  // },[PostClickEvent,LikeClickEvent])

  return (
    <motion.div
      onClick={PostClickEvent}
      className="TeamBlogCard cursor-pointer z-[999] bg-white flex flex-col"
      style={{ boxShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}
      whileHover={{
        y: -10,
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.3)",
        scale: 1.01,
      }}
    >
      <img
        src={`${imgPath}`}
        alt=""
        className="w-full h-[140px] object-cover"
      />
      <div className="flex items-center mb-1 p-1 relative border-t border-b">
        <img
          src={`${userIcon}`}
          alt=""
          className="w-[100px] h-[100px] rounded-full object-cover absolute left-6 top-[-55px] border"
        />
        <div className="ml-[120px] line-clamp-1">
          <span className="text-xs text-zinc-400 mr-1">{userPosition}</span>
          <span className="font-bold">{name}</span>
        </div>
      </div>
      <div className="flex flex-col h-[150px] p-3 pb-0">
        <div className="text-[19px] mb-1 font-bold line-clamp-2">{boardTitle}</div>
        <div className="text-sm line-clamp-4">{boardContent}</div>
      </div>
      <div className="mt-auto text-xs pl-3 p-1 text-zinc-400">
        {year}년 {month}월 {day}일
      </div>
    </motion.div>
  );
};

export default TeamBlogPostCard;
