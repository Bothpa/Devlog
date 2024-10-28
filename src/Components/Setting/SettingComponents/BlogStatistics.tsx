const BlogStatistics = ({title, sub1, sub1Count, sub2, sub2Count, isBorder}:{title:string, sub1:string, sub1Count:number, sub2:string,  sub2Count:number, isBorder:boolean}) => {

    return (
        <div className={`w-1/3 h-full flex flex-col ${isBorder && 'border-r border-zinc-300'}`}>
            <span className="font-bold text-base ml-10 mb-2">{title}</span>
            <div className="flex flex-row">
                <div className="flex flex-col ml-[80px] items-center">
                    <span className="text-sm ml-4 mb-3 text-zinc-500">{sub1}</span>
                    <span className="text-lg ml-4 font-bold">{sub1Count}</span>
                </div>
                <div className="flex flex-col ml-[40px] items-center">
                    <span className="text-sm ml-8 mb-3 text-zinc-500">{sub2}</span>
                    <span className="text-lg ml-8 font-bold">{sub2Count}</span>
                </div>
            </div>
        </div>
    );
}

export default BlogStatistics;