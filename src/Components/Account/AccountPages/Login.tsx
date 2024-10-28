import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckBox from "../../OtherComponents/CheckBox";
import CustomSubmit from "../../OtherComponents/CustomSubmit";
import OauthPopup from "../../../Hooks/OauthPopup";
import DeVlog from "../../OtherComponents/DeVlog";
import AccountStore from "../../../Store/AccountStore";
import { CookieAxios } from "../../../Axios/AxiosHeader";
import sessionStorageInAccessToken from "../../../Hooks/SessionStorageInAccessToken";

interface OauthIconProps {
  icon: string;
  url: string;
}

const OauthIcon: React.FC<OauthIconProps> = ({ icon, url }) => {
  const oauthLoginEvent = (url: string) => {
    OauthPopup(url)
      .then((data) => {
        console.log(data);
        // 여기에 로그인 처리 axios
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return <img src={`/Icon/${icon}.png`} alt={`${icon}`} className="w-10 h-10 cursor-pointer ml-auto mr-auto" onClick={() => oauthLoginEvent(url)} />
}

const Login = () => {
  const navigate = useNavigate();
  const { setLogin } = AccountStore();
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const LoginEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    CookieAxios.post(`/user/login`, { id: id, pw: password })
    .then((res) => {
      if (res.status === 200) {
        const accessToken = res.headers['authorization'];
        if (accessToken) {
          sessionStorageInAccessToken(accessToken);
          setLogin(res.data.name, res.data.profileImg, res.data.mail);
          navigate('/');
        } else {
          alert('서버 오류!.');
        }
      } else {
        alert('아이디 또는 비밀번호가 일치하지 않습니다.');
      }
    })
    .catch((error) => {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    });
  }

  return (
    <div className="w-[420px] h-[470px] pl-5 pr-5 rounded-2xl flex flex-col justify-center items-center border border-zinc-300">
      <div className="ml-auto mr-auto mb-8">
        <DeVlog />
      </div>

      <form onSubmit={LoginEvent} className="flex flex-col w-full">

        <input
          type="text"
          className="w-full h-[45px] rounded-xl mb-3 border border-zinc-300"
          placeholder="ID 입력"
          value={id}
          onChange={e => setId(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full h-[45px] rounded-xl mb-3 border border-zinc-300"
          placeholder="패스워드 입력"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <div className="w-full flex flex-row items-center text-sm text-zinc-500 mb-8">
          <CheckBox isBoolean={isLogin} onClick={() => { setIsLogin(!isLogin); }} />
          <span className="mr-auto ml-1">로그인 상태 유지</span>
          <span className="cursor-pointer hover:underline">ID / 비밀번호 찾기</span>
        </div>

        <div className="w-full flex flex-row mb-8">
          <OauthIcon icon="Github" url="github" />
          <OauthIcon icon="Naver" url="naver" />
          <OauthIcon icon="Google" url="google" />
        </div>

        <CustomSubmit text="로그인" />

        <div className="text-zinc-500 text-sm ml-auto">
          <span className="mr-2">아이디가 없으신가요?</span>
          <span className="hover:underline cursor-pointer" onClick={() => { navigate('/account/signup') }}>회원가입</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
