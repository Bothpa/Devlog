interface SubscribedBlogCard {
    userInfo: {
        userIcon: string,
        userSummary: string,
        userGit: string,
        userX: string,
        userInsta: string
    },
// password, bender, benderUuid는 민감정보 이므로 null로 값 치환해서 전송
    id: string,
    pw: null,
    bender: null,
    benderUuid: null,
    name: string,
    mail: string,
    subCount: number,
    sub: boolean,
    subDate: Date,
    accessRole: string,
    pblogDTO: {
        domain: string,
        banner: null,
        name: string
    }
}

export default SubscribedBlogCard;
