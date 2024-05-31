import { AxiosRequestConfig, AxiosResponse } from "axios";
import HCTA from "./AxiosHeader";

const OauthLogin = async (url:string) => {
  try {
    const response:AxiosResponse<{massage:string}> = await HCTA.post(`/be/api/oauth/${url}`);
    if (response.status === 200) {
      return response.data;
    }else {
      return response.data;
    }
  } catch (error) {
    return error;
  }
}

export default OauthLogin;