import { useState } from "react";
import TermsAgreement from "../AccountComponents/TermsAgreement";
import SignupOauth from "../AccountComponents/SignupOauth";
import EnterInformation from "../AccountComponents/EnterInformation";
import SignupFinish from "../AccountComponents/SignupFinish";
import BenderPropsInterface from "../../../Interface/Account/BenderPropsInterface";

const Signup = () => {
  const [page, setPage] = useState(0);
  const [bender , setBender] = useState<BenderPropsInterface>({
    bender: "",
    email: "",
    uuid: ""
  });

  return (
    <div>
      {page === 0 && <TermsAgreement setPage={setPage} />}
      {page === 1 && <SignupOauth setPage={setPage} setBender={setBender}/>}
      {page === 2 && <EnterInformation setPage={setPage} bender={bender}/>}
      {page === 3 && <SignupFinish />}
    </div>
  );
};

export default Signup;
