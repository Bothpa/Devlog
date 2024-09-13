import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountRouter from "./Router/AccountRouter";
import MainRouter from "./Router/MainRouter";
import PersonerBlogRouter from "./Router/PersonerBlogRouter";
import TeamBlogRouter from "./Router/TeamBlogRouter";
import WritingBlog from "./Components/PersonerBlog/PersonerBlogPages/WritingBlog";
import PersonerBlogSetting from "./Components/Setting/SettingPage/PersonerBlogSetting";

const App = () => {
  return (
    <div className="min-w-screen min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<MainRouter />} />
          <Route path="/write" element={<WritingBlog />} />
          <Route path="/account/*" element={<AccountRouter />} />
          <Route path="/t/:domain/*" element={<TeamBlogRouter />} />
          <Route path="/p/:domain/*" element={<PersonerBlogRouter />} />
          <Route path="/persnerblogsetting" element={<PersonerBlogSetting />} />
          <Route path={"*"} element={<MainRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
