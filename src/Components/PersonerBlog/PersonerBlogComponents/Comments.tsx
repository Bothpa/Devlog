import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentsInterface from "../../../Interface/PersonerBlog/CommentsInterface";
import DateFormat from "../../../Hooks/DateFormat";
import axios from "axios";
import { TokenAxios } from "../../../Axios/AxiosHeader";

const Comment: React.FC<{ commentData: CommentsInterface, setYame: React.Dispatch<React.SetStateAction<number>> }> = ({ commentData, setYame }) => {
    const DeleteComment = useCallback(() => {
        if(!window.confirm("정말 삭제하시겠습니까?")) return;
        TokenAxios.delete(`/board/comment/${commentData.commentUuid}`)
        .then((res) => {
            if (res.status === 200) {
                setYame(prev => prev + 1);
            }
        })
        .catch((err) => {
            alert("자신의 댓글만 삭제할 수 있습니다.");
        })
    }, [commentData.commentUuid, setYame]);
    
    return (
        <div className="w-full flex flex-row mb-2">
            <img src={`${commentData.imagePath == null || commentData.imagePath == "" ? "/Icon/DefaultProfileImg.png" : commentData.imagePath}`} alt="profile" className="w-10 h-10 rounded-full" />
            <div className="flex flex-col ml-2 w-full">
                <div className="flex flex-row w-full">
                    <span className="font-bold text-base w-[80px]">{commentData.userName}</span>
                    <span className="text-zinc-400 text-base">{DateFormat(new Date(commentData.commentDate))}</span>
                    <button className="ml-auto text-sm text-zinc-400 cursor-pointer hover:underline" onClick={DeleteComment}>삭제</button>
                </div>
                <span className="text-lg w-full line-clamp-3">{commentData.comments}</span>
            </div>
        </div>
    )
}

const Comments = () => {
    const { domain, postid } = useParams();
    const [CommentList, setCommentList] = useState<CommentsInterface[]>([]);
    const [CommentData, setCommentData] = useState<string>("");
    const [yame, setYame] = useState<number>(0);

    useEffect(() => {
        axios.get(`/api/board/comment/${postid}`)
        .then((res) => {
            setCommentList(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[yame])

    const postComment = useCallback((e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(CommentData == "") {
            alert("댓글을 입력해주세요.");
            return;
        }
        const data = {
            comments:CommentData,
            boardUuid: postid
        }
        TokenAxios.post(`/board/comment`, data)
        .then((res) => {
            if(res.status == 200) {
                setYame(prev => prev + 1);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    },[postid, CommentData])

    return (
        <div className="w-full h-full flex flex-col">
            <span className="text-xl font-bold mb-5">댓글 <span className="text-[#C2D4FF]">{CommentList.length}</span></span>
            <div className="border-b-2 mb-3">
                {CommentList.map((comment, index) => {
                    return <Comment commentData={comment} key={index} setYame={setYame} />
                })}
            </div>
            <textarea className="w-full h-[70px] border rounded-lg mb-2 p-1 resize-none" value={CommentData} onChange={(e)=>{setCommentData(e.target.value)}} maxLength={200}/>
            <button className="ml-auto rounded-lg px-4 py-1 bg-[#D3DBFC]" onClick={(e)=>{postComment(e)}}>등록</button>
        </div>
    );
}
export default Comments;