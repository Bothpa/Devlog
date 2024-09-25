import React, { useRef, useEffect, useState } from 'react';
import SettingHomeChart from '../SettingComponents/SettingHomeChart';

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

const SettingHome = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="ml-auto w-[95%] h-[130px] border border-[#7A90F5] rounded-lg pt-4 pb-4 flex flex-row mb-10">
                <BlogStatistics title="TODAY" sub1="방문자" sub1Count={10} sub2="조회수" sub2Count={20} isBorder={true}/>
                <BlogStatistics title="누적" sub1="방문자" sub1Count={10} sub2="조회수" sub2Count={20} isBorder={true}/>
                <BlogStatistics title="구독자" sub1="오늘" sub1Count={10} sub2="총" sub2Count={20} isBorder={false}/>
            </div>
            <div className="ml-auto w-[95%] h-[500px] border border-[#7A90F5] rounded-lg bg-white pb-10 pl-3 pr-3">
                <SettingHomeChart/>
            </div>
        </div>
    );
}

export default SettingHome;