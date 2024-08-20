import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IntroductionBannerTestData } from "../../Main/MainPages/testData";

interface TeamBlogIntroductionBannerInterface {
  isImageBanner : boolean; //true이면 이미지배너 false이면 글형식배너
  bannerImage : string | null;
  bannerText : string | null;
}

const TeamBlogIntroductionBanner = () => {
  const [IntroductionBannerData, setIntroductionBannerData] = useState<TeamBlogIntroductionBannerInterface | null>(IntroductionBannerTestData);
  const { domain } = useParams();

  useEffect(() => {
    console.log(domain);
    //여기에 팀블로그 소개배너를 가져오는 함수를 넣어주세요.
  },[domain]);
    
  return (
    <div className="w-full h-[300px] flex flex-row flex-wrap mt-[350px] mb-5">
      {IntroductionBannerData?.isImageBanner? (
        <div className="w-full h-full flex flex-row flex-wrap">
          <img src={IntroductionBannerData.bannerImage? IntroductionBannerData.bannerImage : 'default.png'} alt="Banner" className="w-full h-full object-cover"/>
        </div>
      ) : (
        <div className="w-full h-full flex flex-row flex-wrap">
          <span className="w-full font-bold text-2xl mb-5">{IntroductionBannerData?.bannerText}</span>
        </div>
      )}
    </div>
  );
};

export default TeamBlogIntroductionBanner;