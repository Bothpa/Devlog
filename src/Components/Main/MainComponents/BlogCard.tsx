import { motion } from "framer-motion";
import BlogCardInterface from "../../../Interface/Main/BlogCardInterface";
import { useCallback, useEffect, useState } from "react";

const BlogCard: React.FC<BlogCardInterface> = (BlogCardProps) => {
  const { users, p_blog, config } = BlogCardProps;
  const { name } = users;
  const { userIcon, userInfo } = users.user_info;
  const { pDName } = p_blog;
  const { subscriberCount, isSubscribed } = config;

  const [SubscriptionButtonText, setSubscriptionButtonText] = useState(
    isSubscribed ? "구독중" : "구독하기"
  );

  const BlogCardClickEvent = useCallback(() => {
    console.log(pDName + " 블로그로 이동");
  }, []);

  const SubscribeClickEvent = useCallback((e: any) => {
    e.stopPropagation();
    console.log("SubscribeClickEvent");
  }, []);

  const handleMouseOver = useCallback(() => {
    if (isSubscribed) setSubscriptionButtonText("구독 취소");
  }, []);

  const handleMouseOut = useCallback(() => {
    if (isSubscribed) setSubscriptionButtonText("구독중");
  }, []);

  return (
    <motion.div
      onClick={BlogCardClickEvent}
      className="BlogCard cursor-pointer z-[999] ml-auto mr-auto"
      style={{ boxShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}
      whileHover={{
        y: -10,
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.3)",
        scale: 1.01,
      }}
    >
      <div className="w-full h-[88%] p-4 flex flex-col items-center justify-center">
        <img
          src={`${userIcon ? userIcon : "/Icon/DefaultProfileImg.png"}`}
          alt=""
          className="w-[6rem] h-[6rem] rounded-full mb-4"
        />
        <div className="font-bold text-lg mb-4">{name}</div>
        <div className="text-sm w-3/5 text-center mb-4 line-clamp-3">{userInfo}</div>
        <button
          onClick={SubscribeClickEvent}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className={`text-sm font-bold p-1 pl-2 pr-2 border rounded-xl ${
            isSubscribed ? "hover:bg-[#F3C3BB]" : "hover:bg-[#D3DBFC]"
          }`}
        >
          {SubscriptionButtonText}
        </button>
      </div>
      <div className="w-full h-[12%] border-t text-sm text-zinc-400 mt-auto flex items-center justify-center">
        구독자 {subscriberCount}명
      </div>
    </motion.div>
  );
};

export default BlogCard;
