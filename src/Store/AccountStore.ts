import { create } from "zustand";
import { TeamBlog } from "../Components/Main/MainPages/testData";

interface myBlog {
  domain: string;
  name: string;
  banner: string | null;
}

interface teamBlog {
  tuuid: number,
  tname: string,
  tdomain: string,
  ttitle: string,
  tsubject: string,
  tinfo: string
}

interface AccountStore {
  isLogin: boolean;
  name: string;
  email: string;
  profileImg: string | null;
  myBlog: myBlog;
  teamBlog: teamBlog[] | null;
  
  setLogin: (name: string, profileImg: string, email: string, myBlog:myBlog, teamBlog:teamBlog[] | null) => void;
  setLogout: () => void;
}

const AccountStore = create<AccountStore>((set) => ({
  isLogin: false,
  name: "",
  email: "",
  profileImg: null,
  myBlog: { domain: "", name: "", banner: null },
  teamBlog: null,
  setLogin: (name, profileImg, email, myBlog, teamBlog) => set({ isLogin: true, name: name, profileImg: profileImg, email: email, myBlog: myBlog, teamBlog: teamBlog ?? null }),
  setLogout: () => set({ isLogin: false, name: "", profileImg: null, email: "", myBlog: { domain: "", name: "", banner: null }, teamBlog: null}),
}));

export default AccountStore;
