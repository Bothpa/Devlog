const SettingCategoryButton = ({w, h, text, others, onClickEvent} : {w:string, h:string, text:string, others?:string, onClickEvent:()=>void}) => {
    return <button className={`border ${w} ${h} ml-1 mr-1 text-[#9C9D9C] hover:border-[#C5CDD7] hover:shadow-sm hover:text-black ${others}`} onClick={onClickEvent}>{text}</button>
}


const SettingCategory = () => {
    return (
        <div className="w-full h-full flex">
        <div className="w-[96%] h-full flex flex-col ml-auto border-t bg-[#F3F5F7] pt-1">
           <span className="text-2xl mb-2">카테고리 관리</span>
           <div className="flex flex-col w-full h-fit px-6 py-6 border bg-white">
                <div className="flex flex-row mb-4">
                    <div>
                        <span className="text-base text-[#6E716E]">카테고리 순서를 변경하고 주제 연결을 설정할 수 있습니다.</span>
                        <span className="underline ml-2 cursor-pointer text-[14px] text-zinc-500">자세히 보기</span><br/>
                        <span className="text-[14px] text-zinc-500">드래그 앤 드롭으로 카테고리 순서르 변경할 수 있습니다.</span>
                    </div>
                    <div className="ml-auto mt-auto">
                        <SettingCategoryButton w="w-[120px]" h="h-[35px]" text="전체 펼치기" onClickEvent={()=>{}}/>
                        <SettingCategoryButton w="w-[120px]" h="h-[35px]" text="전체 접기" onClickEvent={()=>{}}/>
                    </div>
                </div>
                <div className="w-full h-fit bg-[#E7EDF3] mb-[60px] p-2">
                    <div className="flex flex-row w-full p-2 bg-white h-[50px]">
                        <SettingCategoryButton w="w-[100px]" h="h-[35px]" others="ml-auto" text="취소" onClickEvent={()=>{}}/>
                        <SettingCategoryButton w="w-[100px]" h="h-[35px]" others="mr-5" text="확인" onClickEvent={()=>{}}/>
                    </div>

                </div>
                <SettingCategoryButton w="w-[190px]" h="h-[40px]" text="변경사항 저장" onClickEvent={()=>{}} others="ml-auto mt-auto"/>
           </div>
        </div>
        </div>
    );
}

export default SettingCategory;