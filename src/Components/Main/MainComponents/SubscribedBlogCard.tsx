import SubscribedBlogCardInterface from "../../../Interface/Main/SubscribedBlogInterface";
import { useCallback, useEffect, useMemo, useState } from "react";

const SubscribedBlogCard: React.FC<
  SubscribedBlogCardInterface & { SearchSubscribingBlog: string }
> = (SubscribedBlogCard) => {
  const [subscribed, setSubscribed] = useState(true);
  const { name } = SubscribedBlogCard.users;
  const { subDate } = SubscribedBlogCard.subscribe;
  const { pName, pDName, pBanner } = SubscribedBlogCard.p_blog;
  const { subscriberCount } = SubscribedBlogCard.config;
  const { SearchSubscribingBlog } = SubscribedBlogCard;
  const year = subDate.getFullYear();
  const month = subDate.getMonth() + 1;
  const day = subDate.getDate();

  const PageNavigationEvent = useCallback(() => {
    console.log(pDName + " 페이지로 이동");
  }, []);

  const unsubscribeEvnet = useCallback(() => {
    console.log(name + " 구독취소");
  }, []);

  const formattedSubscriberCount = useMemo(() => {
    return subscriberCount > 10000
      ? `${Math.floor(subscriberCount / 10000)}만명`
      : `${subscriberCount}명`;
  }, []);

  const nameIndex = useMemo(
    () => name.indexOf(SearchSubscribingBlog),
    [name, SearchSubscribingBlog]
  );
  const nameBefore = useMemo(() => name.slice(0, nameIndex), [name, nameIndex]);
  const nameHighlighted = useMemo(
    () => name.slice(nameIndex, nameIndex + SearchSubscribingBlog.length),
    [name, nameIndex, SearchSubscribingBlog]
  );
  const nameAfter = useMemo(
    () => name.slice(nameIndex + SearchSubscribingBlog.length),
    [name, nameIndex, SearchSubscribingBlog]
  );

  const pNameIndex = useMemo(
    () => pName.indexOf(SearchSubscribingBlog),
    [pName, SearchSubscribingBlog]
  );
  const pNameBefore = useMemo(
    () => pName.slice(0, pNameIndex),
    [pName, pNameIndex]
  );
  const pNameHighlighted = useMemo(
    () => pName.slice(pNameIndex, pNameIndex + SearchSubscribingBlog.length),
    [pName, pNameIndex, SearchSubscribingBlog]
  );
  const pNameAfter = useMemo(
    () => pName.slice(pNameIndex + SearchSubscribingBlog.length),
    [pName, pNameIndex, SearchSubscribingBlog]
  );

  return (
    <div className="w-full h-[140px] mt-3 mb-3 flex flex-row items-center">
      <img src={`${pBanner}`} className="h-full w-[175px]" />
      <div className="h-1/2 ml-8 flex flex-col">
        <span
          onClick={PageNavigationEvent}
          className="text-xl font-bold line-clamp-1 cursor-pointer"
        >
          {pName.includes(SearchSubscribingBlog) ? (
            <>
              {pNameBefore}
              <span className="bg-[#768DF532] rounded-lg">
                {pNameHighlighted}
              </span>
              {pNameAfter}
            </>
          ) : (
            <>{pName}</>
          )}
        </span>
        <span
          onClick={PageNavigationEvent}
          className="text-zinc-400 mt-auto line-clamp-1 cursor-pointer"
        >
          {name.includes(SearchSubscribingBlog) ? (
            <>
              블로거 {nameBefore}
              <span className="bg-[#768DF532] rounded-lg">
                {nameHighlighted}
              </span>
              {nameAfter}님의 블로그
            </>
          ) : (
            <>블로거 {name}님의 블로그</>
          )}
        </span>
      </div>
      <div className="h-2/5 flex flex-col text-sm ml-auto text-zinc-400">
        <span className="line-clamp-1">구독자 {formattedSubscriberCount}</span>
        <span className="mt-auto line-clamp-1">
          구독 시작일 {year}.{month}.{day}
        </span>
      </div>
      <button
        className="w-[70px] h-8 ml-10 line-clamp-1 text-sm rounded-lg border bg-[#D3DBFC] font-bold"
        onMouseEnter={() => setSubscribed(false)}
        onMouseLeave={() => setSubscribed(true)}
        onClick={unsubscribeEvnet}
      >
        {subscribed ? "구독중" : "구독취소"}
      </button>
    </div>
  );
};

export default SubscribedBlogCard;
