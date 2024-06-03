import { useCallback, useState } from "react";
import DeVlog from "../../OtherComponents/DeVlog";
import CustomSubmit from "../../OtherComponents/CustomSubmit";

const EnterInformation = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [isPasswordSame, setIsPasswordSame] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const SignUpEvent = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("??")
    if (id === "" || password === "" || passwordCheck === "") {
      alert("모든 정보를 입력해주세요.");
      return;
    }

    if (!isPasswordSame) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    // 여기에 회원가입 axios
    console.log(id,password,passwordCheck,email)
  },[id,password,passwordCheck,isPasswordSame,email])

  const CheckPassword = useCallback(
    (e: any) => {
      setPassword(e.target.value);
      if (passwordCheck === e.target.value && e.target.value !== "") {
        setIsPasswordSame(true);
      } else {
        setIsPasswordSame(false);
      }
    },
    [passwordCheck]
  );

  const CheckPasswordCheck = useCallback(
    (e: any) => {
      setPasswordCheck(e.target.value);
      if (password === e.target.value && e.target.value !== "") {
        setIsPasswordSame(true);
      } else {
        setIsPasswordSame(false);
      }
    },
    [password]
  );

  return (
    <div className="w-[450px] h-[600px] p-12 rounded-2xl flex flex-col border border-zinc-300 ">
      <div className="ml-auto mr-auto mb-20">
        <DeVlog />
      </div>

      <form className="w-full flex flex-col" onSubmit={SignUpEvent}>
        <span className="text-sm font-bold ml-1 mb-1">가입정보 입력</span>

        <div className="w-full border border-zinc-300 rounded-xl mb-[100px] relative">
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border-b border-zinc-300 w-full h-10 rounded-t-xl id pr-8"
            required
          />
          <input
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={CheckPassword}
            className="border-b border-zinc-300 w-full h-10 password pr-8"
            required
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={passwordCheck}
            onChange={CheckPasswordCheck}
            className="border-b border-zinc-30 w-full h-10 passwordCheck pr-8"
            required
          />
          <input
            type="text"
            placeholder="(선택) E-mail 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 rounded-b-xl email pr-8"
          />
          <div className={`absolute top-[92px] right-[7px] w-4 h-4 rounded-full ${isPasswordSame? 'bg-green-500 text-white':'bg-white border border-zinc-300 text-zinc-400'} `}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
            </svg>
          </div>
        </div>

        <CustomSubmit text="가입하기" />
      </form>
    </div>
  );
};

export default EnterInformation;
