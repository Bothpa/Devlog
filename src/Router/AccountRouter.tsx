import { Route, Routes } from "react-router-dom";
import Login from "../Components/Account/AccountPages/Login";
import Google from "../Components/Account/AccountPages/Google";
import Naver from "../Components/Account/AccountPages/Naver";
import Github from "../Components/Account/AccountPages/Github";

const AccountRouter = () => {
    return(
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <Routes>
                <Route path="/login" element={<Login />} />
                {/* <Route path="/signup" element={<Login />} /> */}
                <Route path="/github" element={<Github />} />
                <Route path="/naver" element={<Naver />} />
                <Route path="/google" element={<Google />} />
                <Route path="*" element={<Login />} />
            </Routes> 
        </div> 
    )
}

export default AccountRouter;