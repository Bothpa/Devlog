import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import PCategoryInterface from "../../../Interface/PersonerBlog/PCategoryInterface";

const PersonerBlogSideBar = () => {
  const { domain } = useParams();
  const [searchParams] = useSearchParams();
  const ParamCategory = searchParams.get('category');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/cate/pBlog/${domain}`)
    .then((res)=>{
      if(res.status == 200){
        setCategory(res.data)
      }
    })
    .catch((err)=>{
      console.log(err);
    });
  },[]);

  const [Category, setCategory] = useState<PCategoryInterface[]>([])
  const AllPostCount = useMemo(() => {
    return Category.reduce((acc, cur) => acc + cur.boardCount, 0);
  }, [Category]);

  const AllPostCountClickEvent = useCallback(() => {
    navigate("/p/" + domain)
  },[])

  const CategoryClickEvent = useCallback((cateName:string) => {
    navigate("/p/" + domain + "?" + "category=" + cateName)
  },[])

  return (
    <div className="w-full h-fit bg-[#EBEEFA60] rounded-xl p-5">
      <div className="w-full flex items-center mb-1">
        <span className="mr-2 hover:underline cursor-pointer" onClick={AllPostCountClickEvent}>전체보기</span>
        <span className="text-zinc-400">({AllPostCount})</span>
      </div>
      {Category?.map((data, index) => {
        return (
          <div key={index} className="w-full flex items-center mb-1">
            <span className={`mr-1 hover:underline cursor-pointer ${ParamCategory === data.cateName&& 'text-[#a8b9fd]'}`} onClick={()=>CategoryClickEvent(data.cateName)}>{data.cateName}</span>
            <span className="text-zinc-400">({data.boardCount})</span>
          </div>
        );
      })}
    </div>
  );
};

export default PersonerBlogSideBar;
