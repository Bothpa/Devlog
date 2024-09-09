interface TeamBlogInterface {
  p_blog: {
    pBanner: string | null; //블로그 배너 사진
    pName: string; //블로그 이름
    pDname: string; //블로그 도메인
  };
  AboutProjectBanner: {
    isImageBanner: boolean; //이미지 배너인지 텍스트 배너인지,
    bannerImage: string | null; //이미지 배너일 경우 이미지 주소
    bannerText: string | null; //텍스트 배너일 경우 텍스트
    inproduce: string; //프로젝트 소개
  };
}

export default TeamBlogInterface;
