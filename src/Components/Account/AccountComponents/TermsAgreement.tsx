import { useState } from "react";
import DeVlog from "../../OtherComponents/DeVlog";
import CheckBox from "../../OtherComponents/CheckBox";
import CustomSubmit from "../../OtherComponents/CustomSubmit";

interface TermsAgreementProps {
  setPage: (page: number) => void
};

const TermsAgreement:React.FC<TermsAgreementProps> = ({ setPage }) => {
  const [isAll, setIsAll] = useState(false);
  const [isService, setIsService] = useState(false);
  const [isPrivacy, setIsPrivacy] = useState(false);
  const [isMarketing, setIsMarketing] = useState(false);

  const AllEvent = () => {
    if(isAll == true){ 
      setIsAll(false);
      setIsService(false);
      setIsPrivacy(false);
      setIsMarketing(false);
    }else{
      setIsAll(true);
      setIsService(true);
      setIsPrivacy(true);
      setIsMarketing(true);
    }
  };

  const ServiceEvent = () => {
    setIsService(!isService);
  };
  const PrivacyEvent = () => {
    setIsPrivacy(!isPrivacy);
  };
  const MarketingEvent = () => {
    setIsMarketing(!isMarketing);
  };

  const NextEvent = () => {
    if(isService && isPrivacy){
      setPage(1);
    }else{
      alert("필수 항목에 동의해주세요");
    }
  }

  return (
    <div className="w-[500px] h-[750px] p-10 rounded-2xl flex flex-col border border-zinc-300 ">

      <div className="ml-auto mr-auto mb-10">
        <DeVlog />
      </div>

      <div className="flex flex-co items-center">
        <CheckBox isBoolean={isAll} onClick={AllEvent} />
        <span className="ml-2 font-bold text-xl">전체 이용 동의하기</span>
      </div>
      <span className="text-xs text-zinc-400 ml-7 mb-5">디블로그는 이용 약관, 개인정보 수집 및 이용을 <br /> 포합합니다.</span>

      <div className="flex flex-co items-center">
        <CheckBox isBoolean={isService} onClick={ServiceEvent} />
        <span className="ml-1 font-bold text-base">[필수]디블로그 이용 약관의 동의</span>
      </div>
      <div className="w-full h-[130px] border border-zinc-300 rounded-2xl overflow-y-auto mb-10"></div>

      <div className="flex flex-co items-center">
        <CheckBox isBoolean={isPrivacy} onClick={PrivacyEvent} />
        <span className="ml-1 font-bold text-base">[필수]개인정보 수집 및 이용에 동의</span>
      </div>
      <div className="w-full h-[130px] border border-zinc-300 rounded-2xl overflow-y-auto mb-10"></div>

      <div className="flex flex-co items-center">
        <CheckBox isBoolean={isMarketing} onClick={MarketingEvent} />
        <span className="ml-1 font-bold text-base">개인정보 수집 및 이용에 동의</span>
      </div>
      <span className="text-xs text-zinc-400 ml-6 mb-10">✔ 이벤트 혜택 정보 수신</span>

      <CustomSubmit text="다음" onClick={NextEvent} />

    </div>
  );
};

export default TermsAgreement;