import axios from "axios";
import { useEffect, useState } from "react";
import UserDataInterface from "../../../Interface/Account/UserDataInterface";
import { useParams } from "react-router-dom";
import { TokenAxios } from "../../../Axios/AxiosHeader";

interface SnsInfoProps {
  imgUrl: string;
  link: string | null;
}

const SnsInfo: React.FC<SnsInfoProps> = ({ imgUrl, link }) => {
  const clickEvent = () => {
    if (!link) {
      alert("링크가 없습니다.");
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <img
      src={`${imgUrl}`}
      onClick={clickEvent}
      className="w-8 h-8 object-cover cursor-pointer ml-auto mr-auto"
    />
  );
};

const PersonerBlogUserInfo = () => {
  const { domain } = useParams();
  const [UserData, setUserData] = useState<UserDataInterface>({
    infoUuid: 0,
    userIcon: "로딩중~",
    userSummary: "로딩중~",
    userGit: "로딩중~",
    userX: "로딩중~",
    userInsta: "로딩중~"
  });
  useEffect (() => {
    axios.get(`/api/user/i/${domain}`)
    .then((res)=>{
      if(res.status === 200){
        setUserData(res.data);
      }
    })
    .catch((err)=>{
      console.log(err);
    });
  },[]);
  return (
    <div className="w-full flex flex-col justify-center items-center p-5 mb-5 bg-[#EBEEFA60] rounded-xl">
      <img
        src={`${UserData.userIcon == "" || UserData.userIcon == null? "/Icon/DefaultProfileImg.png" : UserData.userIcon}`}
        className="w-[150px] h-[150px] mb-3 rounded-full object-cover"
      />
      <div className="w-[150px] text-sm mb-3">{UserData.userSummary}</div>
      <div className="w-[150px] flex flex-row">
        <SnsInfo imgUrl="/Icon/Github.png" link={UserData.userGit} />
        <SnsInfo imgUrl="/Icon/Twitter.png" link={UserData.userX} />
        <SnsInfo imgUrl="/Icon/Instagram.png" link={UserData.userInsta} />
      </div>
    </div>
  );
};

export default PersonerBlogUserInfo;