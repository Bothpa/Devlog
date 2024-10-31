import { useNavigate } from "react-router-dom";
import { CookieAxios } from "../../../Axios/AxiosHeader";
import { TokenAxios } from "../../../Axios/AxiosHeader";
import AccountStore from "../../../Store/AccountStore";

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

const SideBarh2 = ({text, url, onClick}:{text:string, url:string, onClick?:()=>void}) => {
    const navigate = useNavigate();
    const navigateEvent = () => {
        navigate(url);
    }
    return (
        <span className={`w-fit text-sm text-zinc-500 font-bold pl-6 pb-1 mb-2 cursor-pointer hover:underline`} onClick={onClick? onClick : navigateEvent}>{text}</span>
    );
}

const SettingSideBar = () => {
    const { setLogout } = AccountStore();
    const navigate = useNavigate();
    const MembershipWithdrawal = () => {
        try{
            const password = prompt("회원탈퇴를 진행하려면 비밀번호를 입력해주세요:","");
            if (password == null || password == "") return;
            TokenAxios.post("/user/check", password)
            .then((res) => {
                if(res.status == 200){
                    TokenAxios.delete("/user")
                    .then((res) => {
                        if(res.status === 200){
                            alert("회원탈퇴가 완료되었습니다.");
                            sessionStorage.clear();
                            setLogout();
                            navigate("/");
                        }else{
                            alert("비밀번호가 일치하지 않습니다.");
                        }
                    })
                }
            })
        }catch(err){
            alert("회원탈퇴에 실패하였습니다.");
        }
    }
    return (
        <div className="w-[240px] h-full flex flex-col border border-[#7A90F5] rounded-sm">
            <div className="w-[237px] h-[280px] bg-[#D9D9D9] object-cover flex justify-center items-center">ProfileImage</div>
            {/* <img src="/Icon/User.png" alt="프로필사진" className="w-[255px] h-[280px] bg-[#D9D9D9] object-cover" /> */}

            <div className="w-[240px] flex flex-col p-2 pl-5 pr-5">
                <SideBarh1 text="Home" url=""/> 
                <SideBarLine />
                <SideBarh1 text="CONTENTS" url={null}/> 
                <SideBarh2 text="블로그 설정" url=""/>
                <SideBarh2 text="카테고리 관리" url="category"/>
                <SideBarh2 text="게시글 관리" url="post"/>
                <SideBarLine />
                <SideBarh1 text="TEAM BLOG" url={null}/> 
                <SideBarh2 text="팀블로그 관리" url=""/>
                <SideBarh2 text="팀 멤버 관리" url=""/>
                <SideBarLine />
                <SideBarh1 text="LINK" url={null}/> 
                <SideBarh2 text="SNS 추가" url="sns"/>
                <SideBarLine />
                <SideBarh1 text="ACCOUNT" url={null}/>
                <SideBarh2 text="회원탈퇴" url="" onClick={MembershipWithdrawal}/>
            </div>
        </div>
    );
}

export default SettingSideBar;