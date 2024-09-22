import SettingSideBar from "../Components/Setting/SettingComponents/SettingSideBar";
import SettingHome from "../Components/Setting/SettingPage/SettingHome";
import { Routes, Route } from "react-router-dom";

const SettingRouter = () => {

    return (
        <div className="w-screen h-screen min-w-screen min-h-screen CenterPadding">
            <div className="min-w-[1337px] w-full h-full flex flex-row border border-b-0 border-t-0 border-zinc-400">
                <SettingSideBar />
                <div className="flex-1 h-full">
                    <Routes>
                        <Route path="/" element={<SettingHome />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default SettingRouter;

// 1082 + 255 = 1337

