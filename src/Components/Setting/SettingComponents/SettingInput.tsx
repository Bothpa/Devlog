import { useState } from "react";

const SettingInput = ({ Text, Value, setValue, AxiosEvent }: { Text: string; Value: string; setValue: React.Dispatch<React.SetStateAction<string>>; AxiosEvent: () => void }) => {
    return (
        <>
            <span className="text-xl font-bold text-zinc-500 mb-3">{Text}</span>
            <span className="w-full flex flex-row items-center mb-10">
                <input type="text" className="w-3/4 h-[40px] border border-[#7A90F5] rounded-xl" value={Value} onChange={(e) => setValue(e.target.value)} placeholder="URL을 입력해주세요." />
                <button className="h-[40px] px-5 border border-[#7A90F5] rounded-md ml-5 hover:bg-[#D3DBFC]" onClick={AxiosEvent}>저장</button>
            </span>
        </>
    );
};

export default SettingInput;