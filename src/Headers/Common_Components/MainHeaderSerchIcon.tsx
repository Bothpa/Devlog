import MainSearchStore from "../../Store/MainSearch";

const MainHeaderSerchIcon = () => {
  const { setBlock } = MainSearchStore();
  const SearchClickEvent = () => {
    setBlock();
  };
  return (
    <img
      onClick={SearchClickEvent}
      className={`ml-auto p-2 mr-6 h-[65%] border border-zinc-400 rounded-md cursor-pointer`}
      src="/Icon/Search.png"
    />
  );
};

export default MainHeaderSerchIcon;
