import { useNavigate } from "react-router-dom";


const SideBarLine = () => {
    return (
        <div className="w-full h-[1px] mb-1 mt-1 bg-[#D9D9D9]"></div>
    );
}

const SideBarh1 = ({text, url}:{text:string, url:string|null}) => {
    const navigate = useNavigate();
    const navigateEvent = () => {
        if(url != null){
            navigate(url);
        }
    }
    return (
        <span className={`w-fit font-bold text-base pl-2 pb-1 pt-1 mb-2 ${url != null && 'cursor-pointer  hover:underline'}`} onClick={navigateEvent}>{text}</span>
    );
}

const SideBarh2 = ({text, url}:{text:string, url:string}) => {
    const navigate = useNavigate();
    const navigateEvent = () => {
        navigate(url);
    }
    return (
        <span className="w-fit text-sm text-zinc-500 font-bold pl-6 pb-1 mb-2 cursor-pointer hover:underline" onClick={navigateEvent}>{text}</span>
    );
}

const SettingSideBar = () => {
    return (
        <div className="w-[240px] h-full flex flex-col border border-[#7A90F5] rounded-sm">
            <div className="w-[237px] h-[280px] bg-[#D9D9D9] object-cover flex justify-center items-center">ProfileImage</div>
            {/* <img src="/Icon/User.png" alt="프로필사진" className="w-[255px] h-[280px] bg-[#D9D9D9] object-cover" /> */}

            <div className="w-[240px] flex flex-col p-2 pl-5 pr-5">
                <SideBarh1 text="Home" url=""/> 
                <SideBarLine />
                <SideBarh1 text="CONTENTS" url={null}/> 
                <SideBarh2 text="카테고리 관리" url="category"/>
                <SideBarh2 text="게시글 관리" url="post"/>
                <SideBarh2 text="공지사항 추가" url=""/>
                <SideBarLine />
                <SideBarh1 text="TEAM BLOG" url={null}/> 
                <SideBarh2 text="팀블로그 관리" url=""/>
                <SideBarh2 text="팀 멤버 관리" url=""/>
                <SideBarh2 text="팀 멤버 관리" url=""/>
                <SideBarLine />
                <SideBarh1 text="LINK" url={null}/> 
                <SideBarh2 text="SNS 추가" url=""/>
                <SideBarLine />
                <SideBarh1 text="OTHERS" url={null}/> 
                <SideBarh2 text="계정 연동" url=""/>
            </div>
        </div>
    );
}

export default SettingSideBar;