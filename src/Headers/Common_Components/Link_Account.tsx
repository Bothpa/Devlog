import { useNavigate } from "react-router-dom";
import AccountStore from "../../Store/AccountStore";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CookieAxios } from "../../Axios/AxiosHeader";
interface LinkProps {
  url: string;
  text: string;
}

const Link: React.FC<LinkProps> = ({ url, text }) => {
  const navigate = useNavigate();
  return (
    <div
      // className={`mr-4 text-[#B5C1FA] cursor-pointer font-bold`}
      className={`mr-4 text-black cursor-pointer font-bold hover:underline`}
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
  const { profileImg, name, email, myBlog, teamBlog } = AccountStore();
  const [isPopup, setIsPopup] = useState(false);

  //Account Management System
  const AMSClickEvent = () => {
    navigate("/");
  };
  
  const LogoutEvent = () => {
    CookieAxios.delete("/user/logout")
    .then((res) => {
      if (res.status === 200) {
        sessionStorage.clear();
        setLogout();
        navigate("/");
      }
    })
  };

  useEffect(() => {
    console.log(teamBlog);
  },[]);

  return (
    <div>
      <img onClick={() => setIsPopup(!isPopup)} alt="Default"
        src={`${profileImg == null ? '/Icon/DefaultProfileImg.png' : profileImg}`}
        className="rounded-full w-9 h-9 cursor-pointer"
      />

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 3, transition: { delay: 0.1 } }}
        className={`w-[290px] h-fit flex flex-col fixed top-[60px] rounded-sm right-[285px] pl-3 pr-3 bg-white custumShadow  ${isPopup ? "block" : "hidden"}`}
      >
        <div className="border-b p-4">
          <div className="text-2xl mb-1">{name}</div>
          <div className="text-sm text-[#8E9ACC]">
            <span>{email}</span>
            {/* <span className="ml-10 text-[15px] cursor-pointer" onClick={AMSClickEvent}>계정관리</span> */}
          </div>
        </div>

        <div className="p-3 flex flex-row items-center">
          <div className="flex flex-col">
            <span className="text-sm text-zinc-400">운영중인 블로그</span>
            <span className="text-lg font-bold cursor-pointer hover:underline" onClick={() => {navigate(`/p/${myBlog.domain}`);}}>{myBlog.name}</span>
          </div>
          <img src="/Icon/Gear.png" alt="Gear" className="ml-auto h-7 cursor-pointer" onClick={() => navigate("/setting/blog")}/>
        </div>

        {teamBlog?.map((item, index) => {
          return (
            <div key={index} className="p-3 flex flex-row items-center">
              <div className="flex flex-col">
                <span className="text-sm text-zinc-400">참여 중인 팀블로그</span>
                <span className="text-lg font-bold cursor-pointer hover:underline" onClick={() => { navigate(`/t/${item.tdomain}`);}}>{item.tname}</span>
              </div>
              <img src="/Icon/Gear.png" alt="Gear" className="ml-auto h-7 cursor-pointer" onClick={() => {navigate("/setting/tblog");}}/>
            </div>
          );
        })}

        <div className="ml-auto w-full text-[16px] border-t text-[#8E9ACC] p-3">
          <div className="w-fit ml-auto flex flex-row items-center cursor-pointer"onClick={LogoutEvent}>
            <span className="mr-2 text-base">로그아웃</span>
            <img src="/Icon/Logout.png" className="h-5" alt="logout" />
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
      <Link url="/" text="블로그 홈" />
      <Link url="/write" text="글쓰기" />
      {isLogin ? <AccountIcon /> : <LoginButton />}
    </div>
  );
};

export default Link_Account;
