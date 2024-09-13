import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./custom.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CookiesProvider } from "react-cookie";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

// export const setCookie = (name: string, value: string, options?: any) => {
//  	return cookies.set(name, value, {...options});
// }

// export const getCookie = (name: string) => {
//   return cookies.get(name);
// }

export const removeCookie = () => {
  cookies.remove("refreshToken");
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
);

reportWebVitals();
