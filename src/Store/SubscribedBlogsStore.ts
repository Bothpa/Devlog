import { create } from "zustand";
import SubscribedBlogCard from "../Interface/Main/SubscribedBlogInterface";

import { data3 } from "../Components/Main/MainPages/testData";

interface SubscribedBlogsStore {
  blogs: SubscribedBlogCard[] | null;
  setBlog: (data: SubscribedBlogCard[]) => void;
}

const SubscribedBlogsStore = create<SubscribedBlogsStore>((set) => ({
  blogs: data3,
  setBlog: (data) => set({ blogs: data }),
}));

export default SubscribedBlogsStore;
