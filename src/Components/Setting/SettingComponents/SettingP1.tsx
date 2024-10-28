const SettingP1 = ({text, others}:{text:string, others?:string}) => {
    return <span className={`text-2xl font-bold ${others}`}>{text}</span>
};

export default SettingP1;