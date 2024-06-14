interface PersonerBlogInterface {
  p_blog: {
    pBanner: string | null; //블로그 배너 사진
    pName: string; //블로그 이름
    pDname: string;
  };
  users: {
    name: string; //블로거 이름
    user_info: {
      userIcon: string | null; //블로거 프로필사진
      userInfo: string | null; //블로거 소개
      userGit: string | null; //블로거 깃허브url
      userX: string | null; //블로거 트위터url
      userInsta: string | null; //블로거 인스타url
    };
  };
  category: {
      cateName: string;
      postCount: number;
  }[];
}

export default PersonerBlogInterface;
