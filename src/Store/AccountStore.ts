import { create } from "zustand";

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

interface userInfo {
  userInsta: string|null;
  userGit: string|null;
  userX: string|null;
  userSummary: string|null;
}

interface AccountStore {
  isLogin: boolean;
  name: string;
  email: string;
  profileImg: string | null;
  userSummary: string | null;
  myBlog: myBlog;
  teamBlog: teamBlog[] | null;
  id : string;

  instagram: string|null;
  github: string|null;
  twitter: string|null;

  setMyBlogDomain: (domain: string) => void;
  setMyBlogName: (name: string) => void;
  setUserSummary: (userSummary: string) => void;
  setInstagram: (instagram: string) => void;
  setGitHub: (github: string) => void;
  setTwitter: (twitter: string) => void;
  setLogin: (name: string, profileImg: string, email: string, myBlog:myBlog, teamBlog:teamBlog[] | null, userInfo:userInfo, id:string) => void;
  setLogout: () => void;
  setPorfileImg: (profileImg: string) => void;
}

const AccountStore = create<AccountStore>((set) => ({
  isLogin: false,
  name: "",
  email: "",
  profileImg: null,
  myBlog: { domain: "", name: "", banner: null },
  teamBlog: null,
  userSummary: null,
  id: "",

  instagram: null,
  github: null,
  twitter: null,

  setMyBlogDomain: (domain) => set((state) => ({
    myBlog: {
      domain: domain,
      name: state.myBlog.name,
      banner: state.myBlog.banner
    }
  })),
  setMyBlogName: (name) => set((state) => ({
    myBlog: {
      domain: state.myBlog.domain,
      name: name,
      banner: state.myBlog.banner
    }
  })),
  setUserSummary: (userSummary) => set({ userSummary: userSummary }),
  setInstagram: (instagram) => set({ instagram: instagram }),
  setGitHub: (github) => set({ github: github }),
  setTwitter: (twitter) => set({ twitter: twitter }),
  setPorfileImg: (profileImg) => set({ profileImg: profileImg }),
  setLogin: (name, profileImg, email, myBlog, teamBlog, userInfo, id) => set({ isLogin: true, name: name, profileImg: profileImg, email: email, myBlog: myBlog, teamBlog: teamBlog ?? null, instagram: userInfo.userInsta ? userInfo.userInsta : null, github: userInfo.userGit ? userInfo.userGit : null, twitter: userInfo.userX ? userInfo.userX : null, userSummary: userInfo.userSummary ? userInfo.userSummary : null, id: id }),
  setLogout: () => set({ isLogin: false, id:"", name: "", profileImg: null, email: "", myBlog: { domain: "", name: "", banner: null }, teamBlog: null, instagram: null, github: null, twitter: null, userSummary: null }),
}));

export default AccountStore;
