import { useState } from "react";
import { useParams } from "react-router-dom";
import CommentsInterface from "../../../Interface/PersonerBlog/CommentsInterface";
import DateFormat from "../../../Hooks/DateFormat";

const Comment:React.FC<{commentData : CommentsInterface}> = ({commentData}) => {
    
    return (
        <div className="w-full flex flex-row mb-2">
            <img src={`${commentData.profile? commentData.profile : "/Icon/DefaultProfileImg.png"}`} alt="profile" className="w-10 h-10 rounded-full" />
            <div className="flex flex-col ml-2 w-full">
                <div className="flex flex-row w-full">
                    <span className="font-bold text-base w-[80px]">{commentData.name}</span>
                    <span className="text-zinc-400 text-base">{DateFormat(commentData.date)}</span>
                    <button className="ml-auto text-sm text-zinc-400 cursor-pointer hover:underline">삭제</button>
                </div>
                <span className="text-lg w-full line-clamp-3">{commentData.comment}</span>
                
            </div>
        </div>
    )
}

const Comments = () => {
    const { domain, postid } = useParams();
    const [CommentList, setCommentList] = useState<CommentsInterface[]>([
        {name: "이름1", date: new Date(), comment: "하지 마, 하지 마, 추억도 하지 마아픈 내 가슴아미워해, 미워해, 이젠 널 미워해너를 잊으려면 이럴 수밖에 없으니까"},
        {name: "이름2", date: new Date(), comment: "힘들던 그날의 인사를울지 마, 울지 마, 부디 행복해 줘나의 사랑, 안녕"},
        {name: "이름3", date: new Date(), comment: "미워해, 미워해, 이젠 널 미워해 너를 잊으려면 이럴 수밖에 없으니까"},
        {name: "이름4", date: new Date(), comment: "너는 내 가슴에 문신처럼 새겨져 지우려 해봐도 지울 수 없는 내 사랑아"},
        {name: "이름5", date: new Date(), comment: "너만, 너만, 너만사랑했던 나의 전부였었던널 아프게 해서미안해, 미안해, 다시 돌아갈 수 없지만난 너만, 난 너만, 난 너"},
    ]);
    return (
        <div className="w-full h-full flex flex-col">
            <span className="text-xl font-bold mb-5">댓글 <span className="text-[#C2D4FF]">{CommentList.length}</span></span>
            <div className="border-b-2 mb-3">
                {CommentList.map((comment, index) => {
                    return <Comment commentData={comment}/>
                })}
            </div>
            <textarea className="w-full h-[70px] border rounded-lg mb-2 p-1 resize-none" maxLength={200}/>
            <button className="ml-auto rounded-lg px-4 py-1 bg-[#D3DBFC]" onClick={()=>{}}>등록</button>
        </div>
    );
}
export default Comments;