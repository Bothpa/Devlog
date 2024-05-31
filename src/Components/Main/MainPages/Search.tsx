import { useCallback, useEffect, useState } from "react";
import MainSearchStore from "../../../Store/MainSearch";
import SearchHistoryComponent from "../MainComponents/SearchHistoryComponent";
import HotTopic from "../MainComponents/HotTopic";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const { isComponentHidden, setHidden } = MainSearchStore();
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<boolean>(true);

  useEffect(() => {
    if (isComponentHidden) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      setSearchHistory(true);
      setSearchValue("");
    };
  }, [isComponentHidden]);

  const SearchSubmitEvent = useCallback(
    (e: any) => {
      e.preventDefault();
      navigate(`/searchresults?value=${searchValue}`);
      setHidden();
    },
    [searchValue, navigate]
  );

  return (
    <div
      onClick={setHidden}
      className={`fixed top-0 left-0 z-[1001] w-screen h-screen flex justify-center bg-[rgb(0,0,0,0.3)] ${
        isComponentHidden ? "hidden" : "block"
      }`}
    >
      <HotTopic />
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`absolute top-[250px] w-[1000px] h-[43px] pt-1 pb-1 bg-white flex flex-row border-[1.5px] border-[#7B8FE190] ${
          searchHistory ? "rounded-2xl" : "rounded-t-2xl"
        }`}
      >
        <div className="h-full w-[100px] flex items-center justify-center border-r-2 border-[#D3DBFC] font-bold text-[#7B8FE1]">
          검색
        </div>
        <form
          onSubmit={SearchSubmitEvent}
          className="h-full w-[900px] flex flex-row items-center"
        >
          <input
            type="text"
            className="h-full w-[870px] pl-2 text-[17px]"
            value={searchValue}
            onFocus={() => {
              setSearchHistory(false);
            }}
            onChange={(e) => {
              setSearchValue(e.currentTarget.value);
            }}
            required
          />
          <img
            src="/Icon/X.png"
            className="w-5 h-5 absolute right-[55px] cursor-pointer"
            onClick={() => {
              setSearchValue("");
            }}
          />
          <button className="h-full w-[30px]">
            <img src="/Icon/Search.png" className="w-5 h-5" />
          </button>
        </form>
        <SearchHistoryComponent
          isHidden={searchHistory}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
};

export default Search;
