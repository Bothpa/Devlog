import DeVlog from "../../OtherComponents/DeVlog";
import CustomSubmit from "../../OtherComponents/CustomSubmit";
import { useNavigate } from "react-router-dom";

const SignupFinish = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[450px] h-[550px] p-10 rounded-2xl flex flex-col border items-center border-zinc-300 ">
      <div className="mb-auto">
        <DeVlog />
      </div>

      <span className="mb-auto mt-auto text-center text-2xl font-bold">
        가입이 완료되었습니다
        <br />
        감사합니다!
      </span>

      <div className="mt-auto w-full">
        <CustomSubmit
          text="확인"
          onClick={() => {
            navigate("/account/login");
          }}
        />
      </div>
    </div>
  );
};

export default SignupFinish;
