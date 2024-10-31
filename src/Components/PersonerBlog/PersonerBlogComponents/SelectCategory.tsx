import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SelectCategory = ({options, setCategory, others, text} : {options:string[], setCategory:React.Dispatch<React.SetStateAction<string | null>>, others?:string, text?:string}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    useEffect(() => {
        if (!text && options.length > 0) {
            setSelectedOption(options[0]);
            setCategory(options[0]);
        }
    }, [text, options, setCategory]);
  
    const toggleOpen = () => setIsOpen(!isOpen);
  
    const handleOptionClick = (option: string) => {
      setSelectedOption(option);
      setIsOpen(false);
      setCategory(option);
    };
  
    return (
        <div className={`relative h-fit rounded-lg ${others}`}>
            <div className="p-2 rounded cursor-pointer bg-[#F4F4F4] z-[10] line-clamp-1" onClick={toggleOpen}>   
            {selectedOption || text}
            </div>
            <AnimatePresence>
            {isOpen && (
                <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute w-full mt-1rounded-lg shadow-lg bg-white z-[9]"
                >
                {options.map((option, index) => (
                    <motion.div
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-200 line-clamp-1"
                    onClick={() => handleOptionClick(option)}
                    whileHover={{ scale: 1.0 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    {option}
                    </motion.div>
                ))}
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
};

export default SelectCategory;