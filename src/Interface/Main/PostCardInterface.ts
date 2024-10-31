interface PostCardInterface{
  boardUuid: number,
  categories: string,
  title: string
  content: string
  tags: string[],
  userName: string,
  userUuID: null,
  boardProfilepath: string,
  boardDate: Date,
  visitCount: number,
  commentCount: number,
  pdomain: string,
}

// interface PostCardInterface {
//   // 유저테이블
//   users: {
//     name: string; // 게시물 작성 유저 이름
//     user_info: {
//       userIcon: string; // 게시물 작성 유저 아이콘
//     };
//   };

//   // 게시물 테이블
//   boards: {
//     boardId: string; //게시물 아이디
//     boardTitle: string; //게시물 제목
//     boardContent: string; // 게시물 내용
//     boardDate: Date; //게시물 작성 날짜
//     images: {
//       imgPath: string; //게시물 대표 이미지 경로
//     };
//   };

//   p_blog: {
//     pDName: string; // 블로그 도메인 주소
//   };

//   categorys: {
//     cateName: string; // 카테고리 이름
//   };

//   // 테이블없는것들
//   config: {
//     comment_count: number; // 게시물 댓글 수
//     isLike: boolean; // 좋아요 눌렀는지 여부
//   };
// }

export default PostCardInterface;
