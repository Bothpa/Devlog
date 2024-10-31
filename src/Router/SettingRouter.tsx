import { Routes, Route } from "react-router-dom";
import SettingSideBar from "../Components/Setting/SettingComponents/SettingSideBar";
import SettingHeader from "../Headers/SettingHeader";
import SettingHome from "../Components/Setting/SettingPage/SettingHome";
import SettingCategory from "../Components/Setting/SettingPage/SettingCategory";
import SettingPostManagement from "../Components/Setting/SettingPage/SettingPostManagement";
import SNSInsert from "../Components/Setting/SettingPage/SNSInsert";
import SettingBlog from "../Components/Setting/SettingPage/SettingBlog";
import SettingTBlog from "../Components/Setting/SettingPage/SettingTBlog";
import SettingTCategory from "../Components/Setting/SettingPage/SettingTCategory";
import CreateTeam from "../Components/Setting/SettingPage/CreateTeam";

const SettingRouter = () => {

    return (
        <div className="w-full h-fit min-w-full min-h-full CenterPadding pt-[90px] pb-[280px] bg-[#F8F9FF38]">
            <SettingHeader/>
            <div className="w-[1337px] h-full flex flex-row mx-auto">
                <SettingSideBar />
                <div className="flex-1 h-full pl-10">
                    <Routes>
                        <Route path="/" element={<SettingHome />} />
                        <Route path="/category" element={<SettingCategory />} />
                        <Route path="/post" element={<SettingPostManagement />} />
                        <Route path="/sns" element={<SNSInsert />} />
                        <Route path="/blog" element={<SettingBlog />} />
                        <Route path="/tcategory" element={<SettingTCategory />} />
                        <Route path="/tblog" element={<SettingTBlog />} />
                        <Route path="/createteam" element={<CreateTeam />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default SettingRouter;