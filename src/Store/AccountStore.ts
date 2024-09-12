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
  profileImg: string;
  myBlog: myBlog;
  teamBlog: teamBlog[] | null;
  
  setLogin: (name: string, profileImg: string, email: string, myBlog : myBlog, teamBlog : teamBlog[]|null) => void;
  setLogout: () => void;
}

const AccountStore = create<AccountStore>((set) => ({
  isLogin: false,
  name: "",
  email: "",
  profileImg: "",
  myBlog: { pDName: "", pName: "" },
  teamBlog: null,
  setLogin: (name, profileImg, email, myBlog, teamBlog) => set({ isLogin: true, name: name, profileImg: profileImg, email: email, myBlog: myBlog, teamBlog: teamBlog }),
  setLogout: () => set({ isLogin: false, name: "", profileImg: "", email: "", myBlog: { pDName: "", pName: "" }, teamBlog: null}),
}));

export default AccountStore;
