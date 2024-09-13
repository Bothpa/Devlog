import { useCallback, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


const TeamBlogCateBar: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const ParamCategory = searchParams.get('category');

  const AllPostCountClickEvent = useCallback(() => {
    // navigate("/p/" + pDName)
    navigate("/p/" + '팀블로그도메인')
  },[])

  const CategoryClickEvent = useCallback((cateName:string) => {
    // navigate("/t/" + pDName + "?" + "category=" + cateName)
    navigate("/t/" + '팀블로그도메인' + '/developmentjournal' + "?" + "category=" + cateName)
  },[])

  return (
    <div className="w-[200px] h-fit bg-[#EBEEFA60] rounded-xl p-5">
        {[1,2,3,4,5,6].map((category, index) => (
            <div className="w-full flex items-center mb-1">
                <span className={`mr-1 hover:underline cursor-pointer ${ParamCategory === "카테고리 변수명 와야됌" && 'text-[#a8b9fd]'}`} onClick={()=>CategoryClickEvent("카테고리 변수명 와야됌")}>카테고리명</span>
                <span className="text-zinc-400">(3)</span> {/* 카테고리로 작성된 게시물 숫자  */}
            </div>
        ))}
    </div>
  );
};

export default TeamBlogCateBar;
