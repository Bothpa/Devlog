interface PostDataInterface{
    boards:{
        boardTitle:string;// 게시글 제목
        boardContent:string;// 게시글 내용
        boardDate:Date;// 게시글 작성일
        cateName:string;// 게시글 카테고리

        comments:{
            comment:string;// 댓글 내용
            //댓글 작성일
            //댓글 작성자
        }[]

        likes:{
            likeCount:number;// 좋아요 수
        }

        tags:{
            tag:string;// 태그
        }

        images:{
            imgPath:string;// 이미지 경로
        }
    }

    users:{
        name:string;// 유저 이름
    }


}

export default PostDataInterface;