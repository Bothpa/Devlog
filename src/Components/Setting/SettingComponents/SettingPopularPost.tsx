const PostBox = ({title, comments, views, postDate, index} : {title:string, comments:number, views:number, postDate:string, index:number}) => {
    return (
        <div className="w-full flex flex-row h-[50px] items-center text-[17px] whitespace-nowrap">
            <span className="ml-1 text-red-500">{index}</span>
            <span className="ml-6 font-bold">{title}</span>
            <span className="ml-auto mr-5 w-[60px] text-center text-zinc-400">{comments}</span>
            <span className="mx-5 w-[60px] text-center text-zinc-400">{views}</span>
            <span className="mx-5 w-[90px] text-center text-zinc-400">{postDate}</span>
        </div>
    )
}

const SettingPopularPost = () => {
    return (
        <div className="w-full py-2  border-b">
            <div className="w-full flex flex-row text-lg font-bold whitespace-nowrap mb-3">
                <span className="">인기글</span>
                <span className="ml-auto mr-5 w-[60px] text-center">댓글</span>
                <span className="mx-5 w-[60px] text-center">조회</span>
                <span className="mx-5 w-[90px] text-center">작성일</span>
            </div>
            <PostBox title="아직 공사중입니다....!" comments={30} views={212350} postDate="2021-10-10" index={1}/>
            <PostBox title="아직 공사중입니다....!" comments={112340} views={212350} postDate="2021-10-10" index={2}/>
            <PostBox title="아직 공사중입니다....!" comments={1250} views={221350} postDate="2021-10-10" index={3}/>
            <PostBox title="아직 공사중입니다....!" comments={121350} views={22350} postDate="2021-10-10" index={4}/>
            <PostBox title="아직 공사중입니다....!" comments={101235} views={202135} postDate="2021-10-10" index={5}/>
        </div>
    );
}

export default SettingPopularPost;
