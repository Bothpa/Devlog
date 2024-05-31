import { create } from "zustand";

interface AccountStore {
  isLogin: boolean;
  name: string;
  email: string;
  profileImg: string;
  setLogin: (name: string, profileImg: string, email: string) => void;
  setLogout: () => void;
}

const AccountStore = create<AccountStore>((set) => ({
  isLogin: false,
  name: "",
  email: "",
  profileImg: "",
  setLogin: (name, profileImg, email) =>
    set({ isLogin: true, name: name, profileImg: profileImg, email: email }),
  setLogout: () => set({ isLogin: false, name: "", profileImg: "", email: "" }),
}));

export default AccountStore;
