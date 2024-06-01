import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountRouter from "./Router/AccountRouter";
import MainRouter from "./Router/MainRouter";
import PersonerBlogRouter from "./Router/PersonerBlogRouter";
import TeamBlogRouter from "./Router/TeamBlogRouter";
import WritingBlog from "./Components/PersonerBlog/PersonerBlogPages/WritingBlog";
import HCTA from "./Axios/AxiosHeader";

const App = () => {
  // const save2 = () => {
  //   HCTA.get("/BE/test", { withCredentials: true })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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
