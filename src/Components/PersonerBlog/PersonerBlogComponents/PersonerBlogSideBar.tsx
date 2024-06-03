interface PersonerBlogSideBarProps {
  category: string[] | null;
}

const PersonerBlogSideBar: React.FC<PersonerBlogSideBarProps | null> = (
  category
) => {
  return (
    <div className="w-full h-[300px] bg-[#EBEEFA60] rounded-xl">사이드바</div>
  );
};

export default PersonerBlogSideBar;
