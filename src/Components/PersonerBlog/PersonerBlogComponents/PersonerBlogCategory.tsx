import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import PostCardLongSimple from "../PersonerBlogComponents/PostCardLongSimple";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";
import axios from "axios";

const PersonerBlogCategory = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const {domain} = useParams();
    const [PostData, setPostData] = useState<PostCardInterface[]>([]);

    useEffect(() => {
        axios.get(`/api/board/p/${category}`)
        .then((res)=>{
          if(res.status === 200){
              setPostData(res.data);
          }
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []);

  return (
    <div className="w-full h-fit">
      {PostData.map((data, index) => {
        return (
          <div key={index} className="ml-auto mr-auto mb-5">
            <PostCardLongSimple data={data} />
          </div>
        );
      })}
    </div>
  );
}

export default PersonerBlogCategory;