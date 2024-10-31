import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import PCategoryInterface from "../../../Interface/PersonerBlog/PCategoryInterface";

const TeamBlogCateBar: React.FC = () => {
  const { domain } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const ParamCategory = searchParams.get('category');
  const [categorys, setCategorys] = useState<PCategoryInterface[]>([]);

  useEffect(() => {
    axios.get(`/api/cate/tBlog/${domain}`)
    .then((res) => {
      setCategorys(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  },[ParamCategory])

  const AllPostCountClickEvent = useCallback(() => {
    navigate("/t/" + domain + '/developmentjournal')
  },[])

  const CategoryClickEvent = useCallback((cateName:string) => {
    navigate("/t/" + domain + '/developmentjournal' + "?" + "category=" + cateName)
  },[])

  return (
    <div className="w-[200px] h-fit bg-[#EBEEFA60] rounded-xl p-5">
        <div className="w-full flex items-center mb-1">
            <span className={`mr-1 hover:underline cursor-pointer ${ParamCategory === null && 'text-[#a8b9fd]'}`} onClick={AllPostCountClickEvent }>전체보기</span>
        </div>
        {categorys.map((category, index) => (
            <div className="w-full flex items-center mb-1" key={index}>
                <span className={`mr-1 hover:underline cursor-pointer ${ParamCategory === category.cateName && 'text-[#a8b9fd]'}`} onClick={()=>CategoryClickEvent(category.cateName)}>{category.cateName}</span>
                <span className="text-zinc-400">({category.boardCount})</span>
            </div>
        ))}
    </div>
  );
};

export default TeamBlogCateBar;
