import { Route, Routes } from "react-router-dom";
import TeamMain from "../Components/TeamBlog/TeamBlogPages/TeamMain";

const TeamBlogRouter = () => {
    return (
        <div className="w-full h-full HeaderPadding">
            <Routes>
                <Route path="/" element={<TeamMain />} />
            </Routes> 
        </div> 
    );
};

export default TeamBlogRouter;