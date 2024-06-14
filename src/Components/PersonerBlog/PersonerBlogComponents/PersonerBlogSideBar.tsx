import { useCallback, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface PersonerBlogSideBarProps {
  category: {
    cateName: string;
    postCount: number;
  }[];
  pDName: string;
}

const PersonerBlogSideBar: React.FC<PersonerBlogSideBarProps> = ({category, pDName}) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const ParamCategory = searchParams.get('category');
  const AllPostCount = useMemo(() => {
    return category.reduce((acc, cur) => acc + cur.postCount, 0);
  }, [category]);

  const AllPostCountClickEvent = useCallback(() => {
    navigate("/p/" + pDName)
  },[])

  const CategoryClickEvent = useCallback((cateName:string) => {
    navigate("/p/" + pDName + "?" + "category=" + cateName)
  },[])

  return (
    <div className="w-full h-fit bg-[#EBEEFA60] rounded-xl p-5">
      <div className="w-full flex items-center mb-1">
        <span className="mr-2 hover:underline cursor-pointer" onClick={AllPostCountClickEvent}>전체보기</span>
        <span className="text-zinc-400">({AllPostCount})</span>
      </div>
      {category?.map((data, index) => {
        return (
          <div key={index} className="w-full flex items-center mb-1">
            <span className={`mr-1 hover:underline cursor-pointer ${ParamCategory === data.cateName&& 'text-[#a8b9fd]'}`} onClick={()=>CategoryClickEvent(data.cateName)}>{data.cateName}</span>
            <span className="text-zinc-400">({data.postCount})</span>
          </div>
        );
      })}
    </div>
  );
};

export default PersonerBlogSideBar;
