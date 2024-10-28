const SettingCategoryButton = ({w, h, text, others, onClickEvent} : {w:string, h:string, text:string, others?:string, onClickEvent:()=>void}) => {
    return <button className={`border ${w} ${h} ml-1 mr-1 text-[#9C9D9C] hover:border-[#C5CDD7] hover:shadow-sm hover:text-black ${others}`} onClick={onClickEvent}>{text}</button>
}

export default SettingCategoryButton;