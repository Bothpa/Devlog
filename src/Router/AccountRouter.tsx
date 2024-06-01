import { Route, Routes } from "react-router-dom";
import Login from "../Components/Account/AccountPages/Login";
import Signup from "../Components/Account/AccountPages/Signup";

const AccountRouter = () => {
    return(
        <div className="w-full h-screen flex justify-center items-center">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Login />} />
            </Routes> 
        </div> 
    )
}

export default AccountRouter;