import { motion } from "framer-motion";
import SubscribedBlogCardInterface from "../../../Interface/Main/SubscribedBlogInterface";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TokenAxios } from "../../../Axios/AxiosHeader";

const BlogCard: React.FC<{data:SubscribedBlogCardInterface, setYame?:React.Dispatch<React.SetStateAction<number>>}> = ({data, setYame}) => {  
  const navigate = useNavigate();
  const name = data.name;
  const pDName = data.pblogDTO.domain;
  const subscriberCount = data.subCount;
  const userIcon = data.userInfo.userIcon;
  const userInfo = data.userInfo.userSummary;
  const [isSubscribed, setIsSubscribed] =  useState<boolean>(data.sub);

  const [SubscriptionButtonText, setSubscriptionButtonText] = useState(isSubscribed ? "구독중" : "구독하기");

  const BlogCardClickEvent = useCallback(() => {
    navigate(`/p/${pDName}`);
  }, []);

  const SubscribeClickEvent = useCallback((e: any) => {
    e.stopPropagation();
    if(!window.confirm("정말 구독을 하시겠습니까?")) return;
    TokenAxios.post(`/user/s`,{subUserId : data.id})
    .then((res) => {
      if(res.status === 200) {
        setSubscriptionButtonText("구독중");
        setIsSubscribed(true);
        if(setYame) setYame((prev) => prev + 1);
      }
    })
    .catch((err) => {
      console.error(err);
    })
  }, []);

  const unSubscribeClickEvent = useCallback((e: any) => {
    e.stopPropagation();
    if(!window.confirm("정말 구독을 취소 하시겠습니까?")) return;
    TokenAxios.delete(`/user/s/${data.id}`)
    .then((res) => {
      if(res.status === 200) {
        setSubscriptionButtonText("구독하기");
        setIsSubscribed(false);
        if(setYame) setYame((prev) => prev + 1);
      }
    })
    .catch((err) => {
      console.error(err);
    })
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
          onClick={isSubscribed? unSubscribeClickEvent : SubscribeClickEvent}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className={`text-sm font-bold w-[70px] p-1 pl-2 pr-2 border rounded-xl ${
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
