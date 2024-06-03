import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountRouter from "./Router/AccountRouter";
import MainRouter from "./Router/MainRouter";
import PersonerBlogRouter from "./Router/PersonerBlogRouter";
import TeamBlogRouter from "./Router/TeamBlogRouter";
import WritingBlog from "./Components/PersonerBlog/PersonerBlogPages/WritingBlog";
import HCTA from "./Axios/AxiosHeader";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    save2();
  }, []);
  const save2 = () => {
    console.log("save2");
    axios
      // .get("https://jungsonghun.iptime.org:8443/user/list")
      .get("/be/user/list")
      .then((res) => {
        console.log("11된거임");
        console.log(res);
      })
      .catch((err) => {
        console.log("11안된거임");
        console.log(err);
      });
  };

  return (
    <div className="min-w-screen min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<MainRouter />} />
          <Route path="/write" element={<WritingBlog />} />
          <Route path="/account/*" element={<AccountRouter />} />
          <Route path="/teamblog/*" element={<TeamBlogRouter />} />
          <Route path="/p/:domain/*" element={<PersonerBlogRouter />} />
          <Route path={"*"} element={<MainRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
