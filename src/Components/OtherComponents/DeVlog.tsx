import { useNavigate } from "react-router-dom";

const DeVlog = () => {
    const navigate = useNavigate();
    return <span className="text-3xl font-bold cursor-pointer" onClick={()=>{navigate('/')}}>
        <img src="/Icon/Devlog.png" className="h-10" />
    </span>;
}

export default DeVlog;