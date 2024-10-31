
interface SubscribedBlogs {
    func : (text:string) => void;
}
const MySubscribingBlog:React.FC<SubscribedBlogs> = ({func}) => {
   const blogs: string | any[] = [];

    const SubmitEvent = (e: any) => {
        e.preventDefault();
        func(e.target.elements.searchWord.value);
    };
  
    return (
        <div className="w-full flex flex-row pt-3 line-clamp-1">
          <span className="font-bold">구독중</span>
          <span className="text-[#7E96FF63]">인 블로그</span>
          <span className="font-bold"> {blogs ? blogs.length : "0"}</span>
          <span className="text-[#7E96FF63]">개</span>
          <form
            onSubmit={SubmitEvent}
            className="ml-auto flex items-center justify-center relative"
          >
            <input
              type="text"
              name = "searchWord"
              className="w-[280px] p-1 pl-2 rounded-lg border"
              placeholder="블로그 검색"
            />
            <button type="submit" className="h-5 w-5 absolute right-1">
              <img src="/Icon/Search.png" alt="Search" className="w-fit" />
            </button>
          </form>
        </div>
    );
  };

export default MySubscribingBlog;