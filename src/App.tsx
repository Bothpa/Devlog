import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountRouter from "./Router/AccountRouter";
import MainRouter from "./Router/MainRouter";
import PersonerBlogRouter from "./Router/PersonerBlogRouter";
import TeamBlogRouter from "./Router/TeamBlogRouter";
import WritingBlog from "./Components/PersonerBlog/PersonerBlogPages/WritingBlog";
import SettingRouter from "./Router/SettingRouter";
import { useEffect } from "react";
import { CookieAxios } from "./Axios/AxiosHeader";
import sessionStorageInAccessToken from "./Hooks/SessionStorageInAccessToken";
import AccountStore from "./Store/AccountStore";
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const { setLogin } = AccountStore();

  useEffect(() => {
      try{
        CookieAxios.post(`/user/login/r`)
        .then((res) => {  
          if (res.status === 200) 
          {
            const accessToken = res.headers['authorization'];
            if (accessToken) 
            {
              sessionStorageInAccessToken(accessToken);
              setLogin(res.data.name, res.data.profileImg, res.data.mail);
            }
          }else{
            console.log('로그인 실패');
          }
        })
      }
      catch(e){
        console.log("로그인 실패2");
      }
    }
  ,[]);

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}>
    <div className="min-w-screen min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<MainRouter />} />
          <Route path="/write" element={<WritingBlog />} />
          <Route path="/account/*" element={<AccountRouter />} />
          <Route path="/t/:domain/*" element={<TeamBlogRouter />} />
          <Route path="/p/:domain/*" element={<PersonerBlogRouter />} />
          <Route path="/setting/*" element={<SettingRouter />} />
          <Route path={"*"} element={<MainRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
    </GoogleOAuthProvider>
  );
};

export default App;
function setLogin(name: any, profileImg: any, mail: any) {
  throw new Error("Function not implemented.");
}

