import { motion } from "framer-motion";
import { useEffect } from "react";


interface ErrorPopupProps {
    isErrorPopup: boolean;
    setIsErrorPopup: (value: boolean) => void;
    errorMsg: string;
  }

  const ErrorPopup: React.FC<ErrorPopupProps> = ({
    errorMsg,
    isErrorPopup,
    setIsErrorPopup,
  }) => {
    useEffect(() => {
      if (isErrorPopup) {
        setTimeout(() => {
          setIsErrorPopup(false);
        }, 3000);
      }
    }, [isErrorPopup]);
  
    return (
      <motion.div
        animate={{ x: 100, opacity: isErrorPopup ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 70 }}
        className={`fixed top-[5%] left-[30%] w-fit p-3 pl-5 pr-5 h-fit bg-[#fc6161] text-white text-lg font-bold rounded-[6px] flex flex-col justify-center items-center`}
      >
        <span className="">{errorMsg}</span>
        <motion.div
        key={isErrorPopup ? 'visible' : 'hidden'}
          className="absolute bottom-0 left-0 h-[8px] bg-[#adbafd90] rounded-lg"
          initial={{ width: "100%" }}
          animate={{ width: isErrorPopup ? "0%" : "100%" }}
          transition={{ duration: 3 }}
        />
      </motion.div>
    );
  };

  export default ErrorPopup;