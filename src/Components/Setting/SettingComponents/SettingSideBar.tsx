
const SideBarLine = () => {
    return (
        <div className="w-full h-[1px] mb-2 mt-2 bg-[#D9D9D9]"></div>
    );
}

const SideBarh1 = ({text, url}:{text:string, url:string}) => {
    return (
        <span className={`w-fit font-bold text-base pl-2 pb-1 pt-1 mb-1 ${url == "" ? '' : 'cursor-pointer  hover:underline'}`}>{text}</span>
    );
}

const SideBarh2 = ({text, url}:{text:string, url:string}) => {
    return (
        <span className="w-fit text-sm text-zinc-500 font-bold pl-6 pb-1 mb-1 cursor-pointer hover:underline">{text}</span>
    );
}

const SettingSideBar = () => {
    return (
        <div className="w-[255px] h-full flex flex-col border-r">
            <div className="w-[255px] h-[280px] bg-[#D9D9D9] object-cover flex justify-center items-center">ProfileImage</div>
            {/* <img src="/Icon/User.png" alt="프로필사진" className="w-[255px] h-[280px] bg-[#D9D9D9] object-cover" /> */}

            <div className="w-[255px] flex flex-col p-2 pl-5 pr-5">
                <SideBarh1 text="Home" url="/home"/> 
                <SideBarLine />
                <SideBarh1 text="CONTENTS" url=""/> 
                <SideBarh2 text="카테고리 관리" url=""/>
                <SideBarh2 text="게시글 관리" url=""/>
                <SideBarh2 text="공지사항 추가" url=""/>
                <SideBarLine />
                <SideBarh1 text="TEAM BLOG" url=""/> 
                <SideBarh2 text="팀블로그 관리" url=""/>
                <SideBarh2 text="팀 멤버 관리" url=""/>
                <SideBarh2 text="팀 멤버 관리" url=""/>
                <SideBarLine />
                <SideBarh1 text="LINK" url=""/> 
                <SideBarh2 text="SNS 추가" url=""/>
                <SideBarLine />
                <SideBarh1 text="OTHERS" url=""/> 
                <SideBarh2 text="차단된 사용자" url=""/>
                <SideBarh2 text="계정 연동" url=""/>
            </div>
        </div>
    );
}

export default SettingSideBar;