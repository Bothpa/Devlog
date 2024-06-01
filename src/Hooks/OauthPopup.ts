// const OauthPopup = (url:string) => {
//     let authUrl = '';
//     if(url === 'github'){
//       authUrl=`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`;
//     }else if(url === 'naver'){
//       authUrl=`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}&state=naver`;
//     }else if(url === 'google'){
//       authUrl=`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&scope=openid%20profile%20email&state=google`;
//     }else{
//       alert('OauthIcon Error');
//     }
//     const authWindow = window.open(authUrl, url, `width=500,height=600,top=${window.screen.height / 2 - 300},left=${window.screen.width / 2 - 250}`);
//     const receiveMessage = (event: MessageEvent) => {
//       if (event.origin === window.location.origin && (event.data.type === "github" || event.data.type === "naver" || event.data.type === "google")){
//         if (authWindow) authWindow.close();
//         console.log(event.data.payload);
//       }
//     };
//     window.addEventListener("message", receiveMessage);
//     const checkPopup = setInterval(() => {
//       if (authWindow && authWindow.closed) {
//         clearInterval(checkPopup);
//         window.removeEventListener("message", receiveMessage);
//       }
//     }, 1000);
// };

// export default OauthPopup;

const OauthPopup = (url:string): Promise<any> => {
    return new Promise((resolve, reject) => {
      let authUrl = '';
      if(url === 'github'){
        authUrl=`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`;
      }else if(url === 'naver'){
        authUrl=`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}&state=naver`;
      }else if(url === 'google'){
        authUrl=`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&scope=openid%20profile%20email&state=google`;
      }else{
        alert('OauthIcon Error');
      }
      const authWindow = window.open(authUrl, url, `width=500,height=600,top=${window.screen.height / 2 - 300},left=${window.screen.width / 2 - 250}`);
      const receiveMessage = (event: MessageEvent) => {
        if (event.origin === window.location.origin && (event.data.type === "github" || event.data.type === "naver" || event.data.type === "google")){
          if (authWindow) authWindow.close();
          resolve(event.data.payload);
        }
      };
      window.addEventListener("message", receiveMessage);
      const checkPopup = setInterval(() => {
        if (authWindow && authWindow.closed) {
          clearInterval(checkPopup);
          window.removeEventListener("message", receiveMessage);
          reject(new Error('Auth window closed'));
        }
      }, 1000);
    });
  };
  
  export default OauthPopup;