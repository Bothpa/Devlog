import { useLocation, useNavigate } from "react-router-dom";

interface CateButtonProps {
  text: string;
  url: string;
}

const CateButton: React.FC<CateButtonProps> = ({ text, url }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentUrl = location.pathname;
  const ClickEvent = () => {
    navigate(url);
  };
  return (
    <div className="h-fit flex flex-row items-center pr-2">
      <div
        onClick={ClickEvent}
        className={`font-bold text-base mr-2 rounded-md p-[2px] cursor-pointer ${
          currentUrl === url ? "bg-[#D3DBFC]" : ""
        }`}
      >
        {text}
      </div>
      <div className="border-r-[1.8px] border-zinc-500 h-[1.1rem]"></div>
    </div>
  );
};

const MainSelectBar = () => {
  return (
    <div className="flex flex-row items-center border-b-2 pb-2 pt-3">
      <CateButton text="트랜드" url="/" />
      <CateButton text="구독중" url="/subscribing" />
      <CateButton text="카테고리" url="/category" />
    </div>
  );
};

export default MainSelectBar;
