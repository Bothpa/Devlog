import { useEffect, useState } from "react";
import SettingInput from "../SettingComponents/SettingInput";
import { TokenAxios } from "../../../Axios/AxiosHeader";
import AccountStore from "../../../Store/AccountStore";

const SettingInputFile = ({ Text, setValue, AxiosEvent, other, Value}: { Text: string, setValue: React.Dispatch<React.SetStateAction<File|null>>, AxiosEvent: () => void, other?:string, Value:File|null }) => {
    return (
        <>
            <span className="text-xl font-bold text-zinc-500 mb-3">{Text}</span>
            <span className={`w-full flex flex-row items-center ${other}`}>
                <span className="w-3/4 h-[40px] border border-[#7A90F5] rounded-xl flex items-center pl-3 cursor-pointer text-zinc-400" onClick={()=>{
                    const fileInput = document.getElementById("BannerInput");
                    fileInput?.click();
                }}>{Value ? Value.name : "배너 사진을 선택하세요"}</span>
                <input type="file" id="BannerInput" className="w-3/4 h-[40px] border border-[#7A90F5] rounded-xl" onChange={(e) => setValue(e.target.files?.[0] || new File([], ""))} style={{ display: "none" }}/>
                <button className="h-[40px] px-5 border border-[#7A90F5] rounded-md ml-5 hover:bg-[#D3DBFC]" onClick={AxiosEvent}>저장</button>
            </span>
        </>
    );
};

const SettingBlog = () => {
    const { setMyBlogName, setMyBlogDomain, myBlog} = AccountStore();
    const [pBlogName, setpBlogName] = useState<string>("");
    const [Domain, setDomain] = useState<string>("");
    const [Banner, setBanner] = useState<File|null>(null);

    useEffect(() => {
        setpBlogName(myBlog.name);
        setDomain(myBlog.domain);
    },[myBlog]);

    const pBlogNameEvent = () => {
        TokenAxios.patch('/p/name', { name : pBlogName })
        .then((res) => {
            if(res.status === 200){
                alert('성공적으로 등록되었습니다.');
                setMyBlogName(pBlogName);
            }
        })
        .catch((e) => {
            console.log(e);
        })
    }

    const domainEvent = () => {
        TokenAxios.patch('/p/domain', { domain : Domain })
        .then((res) => {
            if(res.status === 200){
                alert('성공적으로 등록되었습니다.');
                setMyBlogDomain("@"+Domain);
            }
        })
        .catch((e) => {
            console.log(e);
        })
    }

    const BannerEvent = () => {
        if(Banner){
            const formData = new FormData();
            formData.append('image', Banner);
            TokenAxios.post('/photo', formData)
            .then((res) => {
                if(res.status === 200){
                    TokenAxios.patch('/p/banner', { banner : "https://jungsonghun.iptime.org:7750/images/"+res.data})
                    .then((res) => {
                        if(res.status === 200){
                            alert('성공적으로 등록되었습니다.');
                        }
                    })
                    .catch((e) => {
                        console.log(e);
                    })
                }
            })
            .catch((e) => {
                console.log(e);
            })
        }
    }
    return (
        <>
        <div className="w-full h-full flex flex-col bg-white rounded-xl border border-[#7A90F5] px-10 py-8 mb-[100px]">
            <SettingInput Text="블로그 명" Value={pBlogName} setValue={setpBlogName} AxiosEvent={pBlogNameEvent} placeholder="블로그 명을 입력해주세요." other="mb-10"/>
            <SettingInput Text="블로그 도메인" Value={Domain} setValue={setDomain} AxiosEvent={domainEvent} placeholder="URL을 입력해주세요."/>
        </div>
        <div className="w-full h-full flex flex-col bg-white rounded-xl border border-[#7A90F5] px-10 py-8">
            <SettingInputFile Text="블로그 배너 설정" Value={Banner} setValue={setBanner} AxiosEvent={BannerEvent}/>
        </div>
        </>
    );
}

export default SettingBlog;