const SideBarLine = () => {
    return (
        <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
    );
}

const SideBarh1 = ({text, url}:{text:string, url:string}) => {
    return (
        <span className={`w-fit font-bold text-lg pl-3 pb-1 pt-1 ${url == "" ? '' : 'cursor-pointer'}`}>{text}</span>
    );
}

const SideBarh2 = ({text, url}:{text:string, url:string}) => {
    return (
        <span className="w-fit text-sm text-zinc-400 font-bold pl-8 pb-1 cursor-pointer">{text}</span>
    );
}

const PersonerBlogSetting = () => {

    return (
        <div className="w-full h-full CenterPadding">
            <div className="w-full h-full flex flex-row border border-black">
                <div className="w-[255px] h-full flex flex-col border-r">
                    <div className="w-full h-[280px] bg-[#D9D9D9] object-cover flex justify-center items-center">ProfileImage</div>
                    {/* <img src="/Icon/User.png" alt="프로필사진" className="w-full h-[280px] bg-[#D9D9D9] object-cover" /> */}
                    <div className="flex flex-col p-3">
                        <SideBarh1 text="Home" url="/home"/> 
                        <SideBarLine />
                        <SideBarh1 text="Contents" url=""/> 
                        <SideBarh2 text="카테고리 관리" url=""/>
                        <SideBarh2 text="게시글 관리" url=""/>
                        <SideBarh2 text="공지사항 추가" url=""/>
                    </div>
                </div>
                <div className="flex-1 h-full bg-[#325235]">
                    
                </div>
            </div>
        </div>
    );
}

export default PersonerBlogSetting;