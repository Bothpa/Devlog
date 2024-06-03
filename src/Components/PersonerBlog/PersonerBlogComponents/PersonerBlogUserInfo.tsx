interface PersonerBlogUserInfoProps {
  userIcon: string | null;
  userInfo: string | null;
  userGit: string | null;
  userX: string | null;
  userInsta: string | null;
}

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

const PersonerBlogUserInfo: React.FC<PersonerBlogUserInfoProps> = ({
  userGit,
  userIcon,
  userInfo,
  userInsta,
  userX,
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-5 mb-5 bg-[#EBEEFA60] rounded-xl">
      <img
        src={`${userIcon ? userIcon : "/Icon/DefaultProfileImg.png"}`}
        className="w-[150px] h-[150px] mb-3 rounded-full object-cover"
      />
      <div className="w-[150px] text-sm mb-3">{userInfo}</div>
      <div className="w-[150px] flex flex-row">
        <SnsInfo imgUrl="/Icon/Github.png" link={userGit} />
        <SnsInfo imgUrl="/Icon/Twitter.png" link={userX} />
        <SnsInfo imgUrl="/Icon/Instagram.png" link={userInsta} />
      </div>
    </div>
  );
};

export default PersonerBlogUserInfo;
