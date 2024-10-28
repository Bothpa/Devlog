const sessionStorageInAccessToken = (accessToken: string) => {
    const token = accessToken.startsWith('Bearer ') ? accessToken.slice(7) : accessToken;
    sessionStorage.setItem('accessToken', token);
}

export default sessionStorageInAccessToken;