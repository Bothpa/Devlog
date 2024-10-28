import { motion } from "framer-motion";
import { useState } from "react";

const SettingManagermentBoxHeader = ({text, clickEvent} : {text:string , clickEvent?:()=>void}) => {
    return <span className={`text-sm mt-2 ml-4 mb-1 whitespace-nowrap ${clickEvent ? 'cursor-pointer' : 'text-zinc-400'}`} onClick={clickEvent}>{text}</span>
};
const SettingManagermentBoxButton = ({text, clickEvent, others} : {text:string, clickEvent:()=>void, others?:string}) => {
    return <span className={`text-sm py-1 px-7 cursor-pointer hover:bg-[#D9D9D9] whitespace-nowrap ${others}`} onClick={clickEvent}>{text}</span>
};
const SettingManagermentBoxLine = () => {
    return <div className="w-full border-t mt-1 mb-1"/>
};


const SettingManagermentHeader = () => {
    const [isStatusBox, setIsStatusBox] = useState<boolean>(false);
    const [isViewBox, setIsViewBox] = useState<boolean>(false);
    
    return (
        <div className="w-full h-[65px] border border-[#7A90F5] rounded-lg flex flex-row items-center px-5">
            <input type="checkbox" className="w-7 h-7 border border-[#7A90F5] rounded"/>

            <span className="ml-3 text-lg text-zinc-600 cursor-pointer relative" onClick={(e)=>{e.stopPropagation();setIsStatusBox(prev => !prev)}}>
                변경 {isStatusBox ? '∨':'∧'}
                <motion.div initial={{ opacity: 0, y: -40 }} 
                whileInView={{ opacity: 1, y: 3, transition: { delay: 0.1 } }} 
                onClick={(e)=>{e.stopPropagation()}}
                className={`absolute flex flex-col left-[-5px] bottom-fit w-[150px] h-fit border border-[#7A90F5] rounded-lg bg-white cursor-default ${!isStatusBox && 'hidden'}`} 
                >
                    <SettingManagermentBoxHeader text="상태 변경" />
                    <SettingManagermentBoxButton text="공개" clickEvent={()=>{}} />
                    <SettingManagermentBoxButton text="비공개" clickEvent={()=>{}} />
                    <SettingManagermentBoxButton text="일부 공개" clickEvent={()=>{}} />    
                </motion.div>
            </span>

            <span className="ml-auto mr-2 text-lg text-zinc-600 cursor-pointer relative" onClick={(e)=>{e.stopPropagation();setIsViewBox(prev => !prev)}}>
                보기 {isViewBox ? '∨':'∧'}
                <motion.div initial={{ opacity: 0, y: -40 }} 
                whileInView={{ opacity: 1, y: 3, transition: { delay: 0.1 } }} 
                onClick={(e)=>{e.stopPropagation()}}
                className={`absolute flex flex-col left-[-5px] bottom-fit w-[150px] h-fit border border-[#7A90F5] rounded-lg bg-white cursor-default ${!isViewBox && 'hidden'}`} 
                >
                    <SettingManagermentBoxHeader text="모든 글 보기" clickEvent={()=>{}} />
                    <SettingManagermentBoxLine />
                    <SettingManagermentBoxHeader text="상태별 보기" />
                    <SettingManagermentBoxButton text="전체" clickEvent={()=>{}} others="text-[#E5897C]"/>
                    <SettingManagermentBoxButton text="공개" clickEvent={()=>{}} />
                    <SettingManagermentBoxButton text="비공개" clickEvent={()=>{}} />
                    <SettingManagermentBoxButton text="일부 공개" clickEvent={()=>{}} />  
                    <SettingManagermentBoxLine />
                    <SettingManagermentBoxHeader text="카테고리별 보기" />
                    <SettingManagermentBoxButton text="카테고리 전체보기" clickEvent={()=>{}}/>
                    <SettingManagermentBoxButton text="카테고리 없음" clickEvent={()=>{}} />
                    <SettingManagermentBoxButton text="카테고리1" clickEvent={()=>{}} />
                </motion.div>
            </span>

            <span className="text-lg text-zinc-600 mx-5 flex flex-row items-center cursor-pointer">검색 <img src="/Icon/Search.png" className="h-4 w-4 ml-1" alt="" /></span>

        </div>
    )
}

export default SettingManagermentHeader;
