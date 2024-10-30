
const TagCompo = ({text, onClick, TagList} : {text:string, onClick:()=>void, TagList:string[]}) => {
    const isTagIncluded = TagList.includes(text);
    return (
        <span className={`rounded-xl px-4 py-2 mx-2 cursor-pointer ${isTagIncluded ? 'bg-[#D2D8FB]' : 'bg-[#F4F4F4]'}`} onClick={onClick}>
            {text}
        </span>
    )
}

export default TagCompo;