import { Route, Routes } from "react-router-dom";
import MainHeader from "../Headers/MainHeader";
import MainSelectBar from "../Components/Main/MainComponents/MainSelectBar";

import Category from "../Components/Main/MainPages/Category";
import Subscribing from "../Components/Main/MainPages/Subscribing";
import Search from "../Components/Main/MainPages/Search";
import SearchResults from "../Components/Main/MainPages/SearchResults";
import MostRecentPost from "../Components/Main/MainPages/MostRecentPost";

const MainRouter = () => {
  return (
    <div className="w-full h-full CenterPadding HeaderPadding">
      <MainHeader />
      <MainSelectBar />
      <Routes>
        <Route path="/" element={<MostRecentPost />} />
        <Route path="/subscribing" element={<Subscribing />} />
        <Route path="/category" element={<Category />} />
        <Route path="/searchresults" element={<SearchResults />} />
        <Route path={"*"} element={<MostRecentPost />} />
      </Routes>
      <Search />
    </div>
  );
};

export default MainRouter;
