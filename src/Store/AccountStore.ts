import { create } from "zustand";

interface myBlog {
  pDName: string;
  pName: string;
}

interface teamBlog {
  teamDname: string;
  teamName: string;
}

interface AccountStore {
  isLogin: boolean;
  name: string;
  email: string;
  profileImg: string | null;
  myBlog: myBlog;
  teamBlog: teamBlog[] | null;
  
  setLogin: (name: string, profileImg: string, email: string) => void;
  setLogout: () => void;
}

const AccountStore = create<AccountStore>((set) => ({
  isLogin: false,
  name: "",
  email: "",
  profileImg: null,
  myBlog: { pDName: "", pName: "" },
  teamBlog: null,
  setLogin: (name, profileImg, email) => set({ isLogin: true, name: name, profileImg: profileImg, email: email }),
  setLogout: () => set({ isLogin: false, name: "", profileImg: null, email: "", myBlog: { pDName: "", pName: "" }, teamBlog: null}),
}));

export default AccountStore;
