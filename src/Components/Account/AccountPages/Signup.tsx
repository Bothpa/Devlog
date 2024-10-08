import { useState } from "react";
import TermsAgreement from "../AccountComponents/TermsAgreement";
import SignupOauth from "../AccountComponents/SignupOauth";
import EnterInformation from "../AccountComponents/EnterInformation";
import SignupFinish from "../AccountComponents/SignupFinish";

const Signup = () => {
  const [page, setPage] = useState(0);

  return (
    <div>
      {page === 0 && <TermsAgreement setPage={setPage} />}
      {page === 1 && <SignupOauth setPage={setPage} />}
      {page === 2 && <EnterInformation setPage={setPage} />}
      {page === 3 && <SignupFinish />}
    </div>
  );
};

export default Signup;
