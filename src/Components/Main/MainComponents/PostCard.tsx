import { motion } from "framer-motion";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// import test from "../../../Interface/Main/test";

// const PostCard: React.FC<test> = (PostCardProps) => {
//   const navigate = useNavigate();
//   const { name } = PostCardProps.user;
//   const { user_icon } = PostCardProps.user_info;
//   const { boardId, boardTitle, boardDate, boardContent } = PostCardProps.boards;
//   const { imgPath } = PostCardProps.boards.images;
//   const { comment_count, isLike } = PostCardProps.config;
//   const { pDName } = PostCardProps.p_blog;

//   const year = boardDate.getFullYear();
//   const month = boardDate.getMonth() + 1;
//   const day = boardDate.getDate();

//   const PostClickEvent = useCallback(() => {
//     console.log("/" + pDName + "/" + boardId + " 로 이동");
//     navigate("/p"+"/" + pDName + "/" + boardId);
//   }, []);

//   const LikeClickEvent = useCallback((e: any) => {
//     e.stopPropagation();
//     console.log(boardId + " 좋아요");
//   }, []);

//   // useEffect(()=>{
//   //   console.log("PostCard useEffect");
//   // },[PostClickEvent,LikeClickEvent])

//   return (
//     <motion.div
//       onClick={PostClickEvent}
//       className="Card cursor-pointer z-[999] bg-white"
//       style={{ boxShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}
//       whileHover={{
//         y: -10,
//         boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.3)",
//         scale: 1.01,
//       }}
//     >
//       <img
//         src={`${imgPath}`}
//         alt=""
//         className="w-full h-[130px] object-cover"
//       />
//       <div className="w-full h-[200px]">
//         <div className="flex flex-col h-4/5 p-3">
//           <div className="text-[16.5px] font-bold">{boardTitle}</div>
//           <div className="text-sm line-clamp-4">{boardContent}</div>
//           <div className="mt-auto text-xs text-zinc-400">
//             {year}년 {month}월 {day}일 <span className="text-base">·</span>{" "}
//             {comment_count}개의 댓글
//           </div>
//         </div>
//         <div className="h-1/5 p-1 pl-3 pr-3  border-t border-zinc-200 flex items-center">
//           <img
//             src={`${userIcon}`}
//             alt=""
//             className="w-7 h-7 mr-2 object-cover rounded-full"
//           />
//           <span className="text-sm text-zinc-400 mr-1">by</span>
//           <span className="text-sm">{name}</span>
//           <motion.img
//             onClick={LikeClickEvent}
//             whileHover={{ y: -3, scale: 1.1 }}
//             src={`${isLike ? "/Icon/LikeTrue.png" : "/Icon/LikeFalse.png"}`}
//             alt=""
//             className="w-5 h-5 ml-auto"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default PostCard;

const PostCard: React.FC<{data:PostCardInterface}> = ({data}) => {
  const navigate = useNavigate();
  const name = data.userName;
  const boardUuid = data.boardUuid;
  const boardTitle = data.title;
  const boardContent = data.content;
  const imgPath = data.boardProfilepath;
  const comment_count = data.commentCount;
  const pDName = data.pdomain;
  const userIcon = "data.";

  const dataformat = new Date(data.boardDate);
  const year = dataformat.getFullYear();
  const month = dataformat.getMonth() + 1;
  const day = dataformat.getDate();

  const PostClickEvent = useCallback(() => {
    navigate("/p"+"/" + pDName + "/" + boardUuid);
  }, []);

  // const LikeClickEvent = useCallback((e: any) => {
  //   e.stopPropagation();
  //   console.log(boardId + " 좋아요");
  // }, []);

  // useEffect(()=>{
  //   console.log("PostCard useEffect");
  // },[PostClickEvent,LikeClickEvent])

  return (
    <motion.div
      onClick={PostClickEvent}
      className="Card cursor-pointer z-[999] bg-white"
      style={{ boxShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}
      whileHover={{
        y: -10,
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.3)",
        scale: 1.01,
      }}
    >
      <img src={`${imgPath == null || imgPath == "" ? "/Icon/Defal.png" : imgPath}`} alt="" className="w-full h-[130px] object-cover"/>
      <div className="w-full h-[200px]">
        <div className="flex flex-col h-4/5 p-3">
          <div className="text-[16.5px] font-bold">{boardTitle}</div>
          <div className="text-sm line-clamp-4">{boardContent}</div>
          <div className="mt-auto text-xs text-zinc-400">
            {year}년 {month}월 {day}일 <span className="text-base">·</span>{" "}
            {comment_count}개의 댓글
          </div>
        </div>
        <div className="h-1/5 p-1 pl-3 pr-3  border-t border-zinc-200 flex items-center">
          <img
            src={`${userIcon}`}
            alt=""
            className="w-7 h-7 mr-2 object-cover rounded-full"
          />
          <span className="text-sm text-zinc-400 mr-1">by</span>
          <span className="text-sm">{name}</span>
          {/* <motion.img
            onClick={LikeClickEvent}
            whileHover={{ y: -3, scale: 1.1 }}
            src={`${isLike ? "/Icon/LikeTrue.png" : "/Icon/LikeFalse.png"}`}
            alt=""
            className="w-5 h-5 ml-auto"
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default PostCard;
