import { create } from "zustand";
import SubscribedBlogCard from "../Interface/Main/SubscribedBlogInterface";

interface SubscribedBlogsStore {
  blogs: SubscribedBlogCard[] | null;
  setBlog: (data: SubscribedBlogCard[]) => void;
}

// const SubscribedBlogsStore = create<SubscribedBlogsStore>((set) => ({
//   blogs: null,
//   setBlog: (data) => set({ blogs: data }),
// }));

const SubscribedBlogsStore = create<SubscribedBlogsStore>((set) => ({
  // test
  blogs: [
    {
      users : {
        name: "정송훈", //블로거 이름
      },
    
      subscribe : {
        subDate: new Date(), //블로거 구독시작 시간
      },
    
      p_blog : {
        pDName: "www.???.com", // 블로그 도메인 url
        pName: "김정민의 브이로그 블로그", // 블로그 이름
        pBanner: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", // 블로그 도메인 url
      },
    
      config: {
        subscriberCount: 102301, // 구독자 수
      },
    },{
      users : {
        name: "강성혁", //블로거 이름
      },
    
      subscribe : {
        subDate: new Date(), //블로거 구독시작 시간
      },
    
      p_blog : {
        pDName: "www.???.com", // 블로그 도메인 url
        pName: "강석혁의 브이로그 블로그", // 블로그 이름
        pBanner: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", // 블로그 도메인 url
      },
    
      config: {
        subscriberCount: 102301, // 구독자 수
      },
    },{
      users : {
        name: "성현우", //블로거 이름
      },
    
      subscribe : {
        subDate: new Date(), //블로거 구독시작 시간
      },
    
      p_blog : {
        pDName: "www.???.com", // 블로그 도메인 url
        pName: "성현우의 브이로그 블로그", // 블로그 이름
        pBanner: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", // 블로그 도메인 url
      },
    
      config: {
        subscriberCount: 102301, // 구독자 수
      },
    },{
      users : {
        name: "이민기", //블로거 이름
      },
    
      subscribe : {
        subDate: new Date(), //블로거 구독시작 시간
      },
    
      p_blog : {
        pDName: "www.???.com", // 블로그 도메인 url
        pName: "이민기의 브이로그 블로그", // 블로그 이름
        pBanner: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", // 블로그 도메인 url
      },
    
      config: {
        subscriberCount: 102301, // 구독자 수
      },
    }
  ],
  setBlog: (data) => set({ blogs: data }),
}));

export default SubscribedBlogsStore;
