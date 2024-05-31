import { useLocation, useParams } from "react-router-dom";

const Google = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    const state = params.get('state');
    const scope = params.get('scope');
    const authuser = params.get('authuser');
    const prompt = params.get('prompt');
  
  return (
    <div>
      {code}
      <br />
    {state}
    <br />
    {scope}
    </div>
  );
};

export default Google;

// https://localhost/api/oauth/google?state=google&code=4%2F0AdLIrYdh-pqySXBJr-Nv5MxAysmSd-QzUZ9z__gF4xLDdn0o08ZYBiAt0hgIkCC19PuiTA&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&authuser=0&prompt=consent
