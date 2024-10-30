import { useState } from "react";
import CheckBox from "../../OtherComponents/CheckBox";
import DeVlog from "../../OtherComponents/DeVlog";
import OauthPopup from "../../../Hooks/OauthPopup";
import axios from "axios";
import BenderPropsInterface from "../../../Interface/Account/BenderPropsInterface";
import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from '@react-oauth/google';

interface SignupOauthProps { 
  setPage: (page: number) => void;
  setBender: (bender: BenderPropsInterface) => void;
}

const SignupOauth: React.FC<SignupOauthProps> = ({ setPage, setBender }) => {
  const [isAuthenticationAgreement, setIsAuthenticationAgreement] =
    useState(false);

  const AuthenticationAgreementEvent = () => {
    setIsAuthenticationAgreement(!isAuthenticationAgreement);
  };

  const CertifiedEvent = (url: string) => {
    if (!isAuthenticationAgreement) {
      alert("인증 약관에 동의해주세요.");
      return;
    }
    OauthPopup(url)
      .then((data) => {
        console.log(data);
        axios.post(`/api/oauth/${url}`, { code: data.code, state: data.state })
        .then((res) => {
          if (res.status === 200) {
            setBender({
              bender: url,
              email: res.data.email,
              uuid: res.data.uuid,
            });
            setPage(2);
          } else {
            alert("서버 오류!");
          }
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-[450px] h-[650px] p-10 rounded-2xl flex flex-col border border-zinc-300 ">
      <div className="ml-auto mr-auto mb-20">
        <DeVlog />
      </div>

      <div
        onClick={() => CertifiedEvent("google")}
        className="w-full border border-zinc-300 rounded-lg p-2 pl-3 pr-3 mb-5 flex flex-row items-center text-xl font-bold cursor-pointer bg-white"
      >
        <img src="/Icon/Google.png" className="w-8 h-8" />
        <span className="ml-auto mr-auto">구글로 인증하기</span>
      </div>

      <div
        onClick={() => CertifiedEvent("github")}
        className="w-full border border-zinc-300 rounded-lg p-2 pl-3 pr-3 mb-5 flex flex-row items-center text-xl font-bold cursor-pointer bg-[#000000] text-white"
      >
        <img src="/Icon/Github.png" className="w-8 h-8" />
        <span className="ml-auto mr-auto">깃허브로 인증하기</span>
      </div>

      <div
        onClick={() => CertifiedEvent("naver")}
        className="w-full border border-zinc-300 rounded-lg p-2 pl-3 pr-3 mb-20 flex flex-row items-center text-xl font-bold cursor-pointer bg-gradient-to-t from-[#03B466] to-[#03EA66] text-white"
      >
        <img src="/Icon/Naver.png" className="w-8 h-8" />
        <span className="ml-auto mr-auto">네이버로 인증하기</span>
      </div>

      <div className="flex flex-co items-center">
        <CheckBox
          isBoolean={isAuthenticationAgreement}
          onClick={AuthenticationAgreementEvent}
        />
        <span className="ml-1 font-bold text-base">
          [필수]인증 약관 전체동의
        </span>
      </div>
      <div className="flex flex-row">
        <span className="text-xs text-zinc-400 ml-6">
          ✔ 개인정보 이용
          <br />✔ 통신사 이용약관
          <br />✔ 디블로그 이용약관
        </span>
        <span className="text-xs text-zinc-400 ml-6">
          ✔ 고유식별정보 처리
          <br />✔ 인증사 이용약관
        </span>
      </div>
    </div>
  );
};

export default SignupOauth;
