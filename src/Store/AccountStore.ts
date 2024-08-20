import { create } from "zustand";

interface blog {
  pDName: string;
  pName: string;
  isMyBlog: boolean;
}

interface AccountStore {
  isLogin: boolean;
  name: string;
  email: string;
  profileImg: string;
  blog : blog[] | null;
  setLogin: (name: string, profileImg: string, email: string, blog: blog[]) => void;
  setLogout: () => void;
}

const AccountStore = create<AccountStore>((set) => ({
  isLogin: false,
  name: "",
  email: "",
  profileImg: "",
  blog: null,
  setLogin: (name, profileImg, email, blog) => set({ isLogin: true, name: name, profileImg: profileImg, email: email, blog: blog}),
  setLogout: () => set({ isLogin: false, name: "", profileImg: "", email: "", blog: null}),
}));

export default AccountStore;
