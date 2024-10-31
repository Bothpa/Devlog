interface CommentsInterface {
    commentUuid: number,
    comments: string,
    imagePath: string,
    boardUuid: number,
    userUuid: number | null,
    userName: string,
    commentDate: Date,
    userIcon: string
}

export default CommentsInterface;