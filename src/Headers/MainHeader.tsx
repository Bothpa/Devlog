import { motion } from "framer-motion";
import DeVlog from "../Components/OtherComponents/DeVlog";
import Link_Account from "./Common_Components/Link_Account";
import MainHeaderSerchIcon from "./Common_Components/MainHeaderSerchIcon";
import { useCallback, useEffect, useState } from "react";

const MainHeader = () => {
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
      className={`HeaderHeight CenterPadding w-full fixed top-0 left-0 flex items-center z-[1000] ${prevScrollPos === 0 ? 'bg-[#F8F9FA]':'bg-white'}`}
    >
      <DeVlog />
      <MainHeaderSerchIcon />
      <Link_Account />
    </motion.div>
  );
};

export default MainHeader;
