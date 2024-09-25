import SettingSideBar from "../Components/Setting/SettingComponents/SettingSideBar";
import SettingHome from "../Components/Setting/SettingPage/SettingHome";
import SettingHeader from "../Headers/SettingHeader";
import { Routes, Route } from "react-router-dom";

const SettingRouter = () => {

    return (
        <div className="w-full h-fit min-w-full min-h-full CenterPadding pt-[110px] pb-[240px]">
            <SettingHeader/>
            <div className="min-w-[1337px] w-full h-full flex flex-row">
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

