interface BlogCardInterface {
  users: {
    name: string; // 블로그 주인 이름
    user_info: {
      userIcon: string | null; // 블로그 주인 프로필 사진
      userInfo: string; // 블로그 주인 소개
    };
  };

  p_blog: {
    pDName: string; // 블로그 도메인 주소
  };

  config: {
    subscriberCount: number; // 구독자 수
    isSubscribed: boolean; // 자신이 블로그 주인을 구독하고 있는지 여부
  };
}

export default BlogCardInterface;
