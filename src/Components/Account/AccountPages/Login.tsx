import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface OauthIconProps {
  icon: string;
  url: string;
}

const OauthIcon:React.FC<OauthIconProps> = ({icon, url}) => {
  const oauthLoginEvent = () => {
    if(url === 'github'){
      window.location.href=`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`;
    }else if(url === 'naver'){
      window.location.href=`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}&state=naver`;
    }else if(url === 'google'){
      window.location.href=`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&scope=openid%20profile%20email&state=google`;
    }else{
      alert('OauthIcon Error');
    }
  }

  return <img src={`/Icon/${icon}.png`} alt={`${icon}`} className="w-10 h-10 cursor-pointer ml-auto mr-auto" onClick={oauthLoginEvent}/>
}

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <div className="w-[420px] h-[470px] pl-5 pr-5 rounded-2xl flex flex-col justify-center items-center border border-zinc-300">
      <form className="flex flex-col justify-center items-cente mb-3 w-full">
        <input
          type="text"
          className="w-full h-[45px] rounded-xl mb-3 border border-zinc-300"
          placeholder="ID 입력"
        />
        <input
          type="text"
          className="w-full h-[45px] rounded-xl border border-zinc-300"
          placeholder="패스워드 입력"
        />
      </form>

      <div className="w-full flex flex-row items-center text-sm text-zinc-500 mb-8">
        <div className={`w-[18px] h-[18px] border border-zinc-400 bg-white rounded-full cursor-pointer mr-1`} onClick={() => {setIsLogin(!isLogin);}}>
          {isLogin && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <span className="mr-auto">로그인 상태 유지</span>
        <span className="cursor-pointer hover:underline">ID / 비밀번호 찾기</span>
      </div>

      <div className="w-full flex flex-row mb-8">
        <OauthIcon icon="Github" url="github"/>
        <OauthIcon icon="Naver" url="naver"/>
        <OauthIcon icon="Google" url="google"/>
      </div>

      <button type="submit" className="w-full h-10 border border-zinc-300 text-xl font-bold rounded-lg mb-2">로그인</button>

      <div className="text-zinc-500 text-sm ml-auto">
        <span className="mr-2">아이디가 없으신가요?</span>
        <span className="hover:underline cursor-pointer" onClick={()=>{navigate('/account/signup')}}>회원가입</span>  
      </div>
 
    </div>
  );
};

export default Login;
