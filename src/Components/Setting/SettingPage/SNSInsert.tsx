import { useState } from "react";
import SettingInput from "../SettingComponents/SettingInput";

const SNSInsert = () => {
    const [GitHub, setGitHub] = useState<string>("");
    const [Instagram, setInstagram] = useState<string>("");
    const [Twitter, setTwitter] = useState<string>("");
    return (
        <div className="w-full h-full flex flex-col bg-white rounded-xl border border-[#7A90F5] px-10 py-8">
            <SettingInput Text="GitHUB" Value={GitHub} setValue={setGitHub} AxiosEvent={()=>{}}/>
            <SettingInput Text="Instagram" Value={Instagram} setValue={setInstagram} AxiosEvent={()=>{}}/>
            <SettingInput Text="Twitter" Value={Twitter} setValue={setTwitter} AxiosEvent={()=>{}}/>
        </div>
    );
}

export default SNSInsert;