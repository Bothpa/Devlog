import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PostCardLongSimple from "../PersonerBlogComponents/PostCardLongSimple";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";

import { dataMidle } from "../../Main/MainPages/testData";

const PersonerBlogCategory = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const [PostData, setPostData] = useState<PostCardInterface[]>([]);

    useEffect(() => {
        // 여기에 API 연동
        console.log(category);
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