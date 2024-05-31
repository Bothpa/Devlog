import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Github = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get('code');

  const GithubLogin = async () => {
    try{
      const respones:AxiosResponse<{}> = await axios.get(`http://jungsonghun.iptime.org:7223/account/github/login/${code}`,{ withCredentials: true })
      if(respones.status === 200){
        console.log(respones.data);
      }
    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    console.log(code);
  },[code]);

  return <div>{code}</div>;
};

export default Github;

// https://localhost/api/oauth/github?code=a43eee3490ae4fe838ec