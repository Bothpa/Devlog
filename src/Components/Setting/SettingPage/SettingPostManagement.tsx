import { useState } from "react";
import SettingP1 from "../SettingComponents/SettingP1";
import SettingManagermentHeader from "../SettingComponents/SettingManagermentHeader";

const SettingPostManagement = () => {
    const [Posts, setPosts] = useState<string[]>();
    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex flex-row items-end mb-7">
                <SettingP1 text="게시물 관리" />
                <span className="ml-2 text-[#7A90F5]">{Posts != null ? `${Posts.length.toString()}` : '0'}</span>
            </div>
            <SettingManagermentHeader />
        </div>
    );
}

export default SettingPostManagement;