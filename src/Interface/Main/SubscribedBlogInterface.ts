interface SubscribedBlogCard {
  users : {
    name: string; //블로거 이름
  }

  subscribe : {
    subDate: Date; //블로거 구독시작 시간
  }

  p_blog : {
    pDName: string; // 블로그 도메인 url
    pName: string; // 블로그 이름
    pBanner: string; //블로그 배너 사진 url
  }

  config: {
    subscriberCount: number; // 구독자 수
  }
}

export default SubscribedBlogCard;
