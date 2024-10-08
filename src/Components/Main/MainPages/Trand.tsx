import { useEffect, useState } from "react";
import PostCard from "../MainComponents/PostCard";
import PostCardInterface from "../../../Interface/Main/PostCardInterface";

// import test from "../../../Interface/Main/test";
import { data } from "./testData";
import axios from "axios";

// const Trand = () => {
//   const [PostCardData, setPostCardData] = useState<test[]>();

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_BACKEND_URL}/board/list`)
//     .then((res) => {
//       console.log(res);
//       setPostCardData(res.data);
//     })
//   },[]);

//   return (
//     <div className="w-full h-full pt-6 flex flex-wrap justify-items-center">
//       {PostCardData?.map((data, index) => {
//         return (
//           <div key={index} className="ml-auto mr-auto mb-5">
//             <PostCard {...data} />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Trand;

const Trand = () => {
  const [PostCardData, setPostCardData] = useState<PostCardInterface[]>(data);

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_BACKEND_URL}/board/list`)
  //   .then((res) => {
  //     console.log(res);
  //     setPostCardData(res.data);
  //   })
  // },[]);

  return (
    <div className="w-full h-full pt-6 flex flex-wrap justify-items-center">
      {PostCardData?.map((data, index) => {
        return (
          <div key={index} className="ml-auto mr-auto mb-5">
            <PostCard {...data} />
          </div>
        );
      })}
    </div>
  );
};

export default Trand;
