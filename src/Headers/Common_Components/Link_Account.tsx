import { useNavigate } from "react-router-dom";
import AccountStore from "../../Store/AccountStore";
import { motion } from "framer-motion";
import { useState } from "react";
import { removeCookie } from "../..";

interface LinkProps {
  url: string;
  text: string;
}

const Link: React.FC<LinkProps> = ({ url, text }) => {
  const navigate = useNavigate();
  return (
    <div
      // className={`mr-4 text-[#B5C1FA] cursor-pointer font-bold`}
      className={`mr-4 text-black cursor-pointer font-bold`}
      onClick={() => {
        navigate(`${url}`);
      }}
    >
      {text}
    </div>
  );
};

const LoginButton = () => {
  const navigate = useNavigate();
  const ClickEvent = () => {
    navigate("/account/login");
  };
  return (
    <div
      className="w-[100px] p-[5px] text-center font-black bg-[#D3DBFC] rounded-lg cursor-pointer"
      onClick={ClickEvent}
    >
      로그인
    </div>
  );
};

const AccountIcon = () => {
  const navigate = useNavigate();
  const setLogout = AccountStore((state) => state.setLogout);
  const { profileImg, name, email } = AccountStore();
  const [isPopup, setIsPopup] = useState(false);
  const ClickEvent = () => {
    navigate("/");
  };
  const LogoutEvent = () => {
    sessionStorage.clear();
    setLogout();
    removeCookie();
    navigate("/");
    console.log("Logout");
  };
  return (
    <div>
      <img
        onClick={() => setIsPopup(!isPopup)}
        src={`${profileImg ? profileImg : "/Icon/DefaultProfileImg.png"}`}
        alt="Default"
        className="rounded-full w-9 h-9 cursor-pointer"
      />

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 3, transition: { delay: 0.1 } }}
        className={`w-[300px] h-[400px] flex flex-col fixed right-[300px] rounded-xl pl-3 pr-3 bg-[#E7EBFF]  ${
          isPopup ? "block" : "hidden"
        }`}
      >
        <div className="border-b border-white p-4">
          <div className="text-2xl mb-1">{name}</div>
          <div className="text-sm text-[#8E9ACC]">
            <span>{email}</span>
            <span
              className="ml-10 text-[15px] cursor-pointer"
              onClick={ClickEvent}
            >
              계정관리
            </span>
          </div>
        </div>
        <div
          className="w-full text-[16px] text-[#8E9ACC] p-3 cursor-pointer"
          onClick={LogoutEvent}
        >
          <div className="w-fit ml-auto flex flex-row items-center">
            <span className="mr-2">로그아웃</span>
            <img src="/Icon/Logout.png" className="h-6" alt="logout" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Link_Account = () => {
  const { isLogin } = AccountStore();
  return (
    <div className="h-full flex flex-row items-center">
      <Link url="/teamblog" text="팀 블로그" />
      <Link url="/" text="블로그 홈" />
      <Link url="/p/jungsonghun.blog" text="임시개인블로그버튼" />
      <Link url="/write" text="임시글쓰기버튼" />
      {isLogin ? <AccountIcon /> : <LoginButton />}
    </div>
  );
};

export default Link_Account;
