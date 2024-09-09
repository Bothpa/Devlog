import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Link_Account from "./Common_Components/Link_Account";

interface TeamBlogHeaderLinkProps {
  text : string;
  url : string;
}

const TeamBlogHeaderLink:React.FC<TeamBlogHeaderLinkProps> = ({text, url}) => {
  const navigate = useNavigate();
  return (
    <span className="cursor-pointer text-xl font-bold ml-auto mr-auto w-fit h-fit hover:underline" onClick={()=>{navigate(url)}}>{text}</span>
  );
}

interface TeamBlogHeaderProps {
  pName: string;
  pDName: string;
}

const TeamBlogHeader: React.FC<TeamBlogHeaderProps> = ({ pName, pDName }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
    setIsVisible(isVisible);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
      className={`HeaderHeight CenterPadding w-full fixed top-0 left-0 flex items-center z-[1000] ${
        prevScrollPos === 0 ? "bg-[#F8F9FA]" : "bg-white"
      }`}
    >
      <span className="font-bold text-lg cursor-pointer" onClick={() => navigate(`/t/${pDName}`)}>
        {pName}
      </span>

      <TeamBlogHeaderLink text="About Project" url={`/t/${pDName}/aboutproject`}/>
      <TeamBlogHeaderLink text="팀원 소개" url={`/t/${pDName}/`}/>
      <TeamBlogHeaderLink text="개발일지" url={`/t/${pDName}/developmentjournal`}/>
      <Link_Account />
    </motion.div>
  );
};

export default TeamBlogHeader;
