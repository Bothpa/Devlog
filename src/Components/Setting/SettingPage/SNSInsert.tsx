import { useEffect, useState } from "react";
import SettingInput from "../SettingComponents/SettingInput";
import AccountStore from "../../../Store/AccountStore";
import { use } from "marked";
import { TokenAxios } from "../../../Axios/AxiosHeader";

const SettingInputFile = ({ Text, setValue, AxiosEvent, other, Value}: { Text: string, setValue: React.Dispatch<React.SetStateAction<File|null>>, AxiosEvent: () => void, other?:string, Value:File|null }) => {
    return (
        <>
            <span className="text-xl font-bold text-zinc-500 mb-3">{Text}</span>
            <span className={`w-full flex flex-row items-center ${other}`}>
                <span className="w-3/4 h-[40px] border border-[#7A90F5] rounded-xl flex items-center pl-3 cursor-pointer text-zinc-400" onClick={()=>{
                    const fileInput = document.getElementById("BannerInput");
                    fileInput?.click();
                }}>{Value ? Value.name : "프로필 사진을 선택하세요"}</span>
                <input type="file" id="BannerInput" className="w-3/4 h-[40px] border border-[#7A90F5] rounded-xl" onChange={(e) => setValue(e.target.files?.[0] || new File([], ""))} style={{ display: "none" }}/>
                <button className="h-[40px] px-5 border border-[#7A90F5] rounded-md ml-5 hover:bg-[#D3DBFC]" onClick={AxiosEvent}>저장</button>
            </span>
        </>
    );
};

const SNSInsert = () => {
    const { instagram, github, twitter, userSummary:sibal , setGitHub: updateGitHub, setInstagram:updateInstagram, setPorfileImg, setTwitter:updateTwitter, setUserSummary:updateUserSummary} = AccountStore();
    const [GitHub, setGitHub] = useState<string>('');
    const [Instagram, setInstagram] = useState<string>('');
    const [Twitter, setTwitter] = useState<string>('');
    const [userIcon, setUserIcon] = useState<File|null>(null);
    const [userSummary, setUserSummary] = useState<string>('');

    useEffect(() => {
        setGitHub(github?github:'');
        setInstagram(instagram?instagram:'');
        setTwitter(twitter?twitter:'');
        setUserSummary(sibal?sibal:'');
    },[instagram, github, twitter, sibal]);

    const gitEvent = () => {
        TokenAxios.patch('/user/i/github', { userGit : GitHub })
        .then((res) => {
            if(res.status === 200){
                alert('성공적으로 등록되었습니다.');
                updateGitHub(GitHub);
            }
        })
        .catch((e) => {
            console.log(e);
        })
    }
    const twitEvent = () => {
        TokenAxios.patch('/user/i/twitter', { userX : Twitter })
        .then((res) => {
            if(res.status === 200){
                alert('성공적으로 등록되었습니다.');
                updateTwitter(Twitter);
            }
        })
        .catch((e) => {
            console.log(e);
        })
    }
    const instaEvent = () => {
        TokenAxios.patch('/user/i/instagram', { userInsta : Instagram })
        .then((res) => {
            if(res.status === 200){
                alert('성공적으로 등록되었습니다.');
                updateInstagram(Instagram);
            }
        })
        .catch((e) => {
            console.log(e);
        })
    }
    const iconEvent = () => {
        if(userIcon){
            const formData = new FormData();
            formData.append('image', userIcon);
            TokenAxios.post('/photo', formData)
            .then((res) => {
                if(res.status === 200){
                    const userIcon = res.data;
                    TokenAxios.patch('/user/i/icon', { userIcon : "https://jungsonghun.iptime.org:7750/images/"+res.data })
                    .then((res) => {
                        if(res.status === 200){
                            alert('성공적으로 등록되었습니다.');
                            setPorfileImg("https://jungsonghun.iptime.org:7750/images/"+userIcon);
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

    const summaryEvent = () => {
        TokenAxios.patch('/user/i/summary', { userSummary : userSummary })
        .then((res) => {
            if(res.status === 200){
                alert('성공적으로 등록되었습니다.');
                updateUserSummary(userSummary);
            }
        })
        .catch((e) => {
            console.log(e);
        })
    }

    return (
        <div className="w-full h-full flex flex-col bg-white rounded-xl border border-[#7A90F5] px-10 py-8">
            <SettingInput Text="GitHUB" Value={GitHub} setValue={setGitHub} AxiosEvent={gitEvent} placeholder="URL을 입력해주세요" other="mb-10"/>
            <SettingInput Text="Instagram" Value={Instagram} setValue={setInstagram} AxiosEvent={instaEvent} placeholder="URL을 입력해주세요" other="mb-10"/>
            <SettingInput Text="Twitter" Value={Twitter} setValue={setTwitter} AxiosEvent={twitEvent} placeholder="URL을 입력해주세요" other="mb-10"/>
            <SettingInput Text="한줄소개" Value={userSummary} setValue={setUserSummary} AxiosEvent={summaryEvent} placeholder="한줄소개를 입력해주세요" other="mb-10"/>
            <SettingInputFile Text="프로필사진" Value={userIcon} setValue={setUserIcon} AxiosEvent={iconEvent}/>
        </div>
    );
}

export default SNSInsert;