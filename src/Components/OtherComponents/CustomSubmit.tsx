interface CustomSubmitProps {
    text : string;
    onClick?: () => void;
}

const CustomSubmit:React.FC<CustomSubmitProps> = ({text, onClick}) => {
    return (
        <button type="submit" className="w-full h-[45px] border border-zinc-300 text-xl font-bold rounded-lg mb-2" onClick={onClick}>{text}</button>
    )
}

export default CustomSubmit;