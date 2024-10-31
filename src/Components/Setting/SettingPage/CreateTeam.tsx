import React, { useEffect, useState } from 'react';
import { TokenAxios } from '../../../Axios/AxiosHeader';
import { useNavigate } from 'react-router-dom';

const CreateTeam = () => {
    const navigate = useNavigate();
    const [teamName, setTeamName] = useState<string>('');
    const [teamDomain, setTeamDomain] = useState<string>('');
    const [teamProjectTopic, setTeamProjectTopic] = useState<string>('');
    const [teamDescription, setTeamDescription] = useState<string>('');
    
    useEffect(() => {
        TokenAxios.get('/t/my')
        .then((res)=>{
            if(res.status === 200){
                alert("팀 블로그는 한개만 생성 가능합니다.")
                navigate(-1)
            }
        })
        .catch((e) => {
            console.log(e);
        })
    },[]);

    
    const createTeam = () => {
        TokenAxios.post('/t', {
            tName: teamName,
            tDomain: teamDomain,
            tSubject: teamProjectTopic,
            tInfo: teamDescription
        })
        .then((response) => {
            alert("팀블로그가 생성되었습니다.")
            navigate(-1)
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className="w-full h-full flex flex-col bg-white rounded-xl border border-[#7A90F5] px-10 py-8">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">팀블로그 생성</h1>
            </div>
            <div className="mt-8">
                <div className="flex flex-col mb-4">
                    <label htmlFor="teamName" className="text-lg font-bold mb-2">팀 이름</label>
                    <input 
                        type="text" 
                        id="teamName" 
                        className="w-full h-10 px-4 border border-[#7A90F5] rounded-lg" 
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="teamDomain" className="text-lg font-bold mb-2">도메인</label>
                    <input 
                        type="text" 
                        id="teamDomain" 
                        className="w-full h-10 px-4 border border-[#7A90F5] rounded-lg" 
                        value={teamDomain}
                        onChange={(e) => setTeamDomain(e.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="teamProjectTopic" className="text-lg font-bold mb-2">팀 프로젝트 주제</label>
                    <input 
                        type="text" 
                        id="teamProjectTopic" 
                        className="w-full h-10 px-4 border border-[#7A90F5] rounded-lg" 
                        value={teamProjectTopic}
                        onChange={(e) => setTeamProjectTopic(e.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="teamDescription" className="text-lg font-bold mb-2">팀 설명</label>
                    <textarea 
                        id="teamDescription" 
                        className="w-full h-32 px-4 py-2 border border-[#7A90F5] rounded-lg"
                        value={teamDescription}
                        onChange={(e) => setTeamDescription(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <div className="flex justify-end mt-8">
                <button className="w-20 h-10 bg-[#7A90F5] text-white font-bold rounded-lg" onClick={createTeam}>생성</button>
            </div>
        </div>
    );
}

export default CreateTeam;