import React, { useRef, useState } from 'react';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart, Bar, Legend, Cell } from 'recharts';
import SettingCategoryButton from './SettingCategoryButton';
import SettingPopularPost from './SettingPopularPost';

const data = [
  {'month': '1', 'views': 16, 'visitors': 21},
  {'month': '2', 'views': 20, 'visitors': 25},
  {'month': '3', 'views': 39, 'visitors': 44},
  {'month': '4', 'views': 14, 'visitors': 19},
  {'month': '5', 'views': 25, 'visitors': 30},
  {'month': '6', 'views': 28, 'visitors': 33},
  {'month': '7', 'views': 1, 'visitors': 6},
  {'month': '8', 'views': 45, 'visitors': 50},
  {'month': '9', 'views': 21, 'visitors': 26},
  {'month': '10', 'views': 9, 'visitors': 14},
  {'month': '11', 'views': 37, 'visitors': 42},
  {'month': '12', 'views': 24, 'visitors': 29},
  {'month': '13', 'views': 45, 'visitors': 50},
  {'month': '14', 'views': 50, 'visitors': 39},
  {'month': '15', 'views': 34, 'visitors': 6},
  {'month': '16', 'views': 1, 'visitors': 16},
  {'month': '17', 'views': 11, 'visitors': 38},
  {'month': '18', 'views': 33, 'visitors': 42},
  {'month': '19', 'views': 37, 'visitors': 23},
  {'month': '20', 'views': 18, 'visitors': 15},
  {'month': '21', 'views': 10, 'visitors': 16},
  {'month': '22', 'views': 11, 'visitors': 46},
  {'month': '23', 'views': 41, 'visitors': 23},
  {'month': '24', 'views': 18, 'visitors': 27},
  {'month': '25', 'views': 22, 'visitors': 40},
  {'month': '27', 'views': 47, 'visitors': 27},
  {'month': '29', 'views': 35, 'visitors': 40},
  {'month': '30', 'views': 35, 'visitors': 40},
  {'month': '31', 'views': 35, 'visitors': 40},
];


interface CustomTickProps {
  x: number;
  y: number;
  payload: {
    value: string;
  };
}

const CustomTick: React.FC<CustomTickProps> = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={8} dy={0} textAnchor="middle" fill="#9F9F9F" fontSize={14} fontWeight="bold">
        {payload.value}
      </text>
      {/* <text x={0} y={24} dy={0} textAnchor="middle" fill="#9F9F9F" fontSize={14} fontWeight="bold">
        2024년
      </text> */}
    </g>
  );
};

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const { views, visitors } = payload[0].payload;
      return (
        <div className="w-[210px] h-[70px] flex flex-row bg-white border pt-2 pb-2">
            <div className='flex flex-col border-r w-1/2 p-1 ml-2'>
                <span className='flex flex-row items-center text-sm text-zinc-500'>일간 조회수 <div className='w-[7px] h-[7px] bg-[#ff6384] ml-1'/></span>
                <span className='text-lg font-bold'>{views}</span>
            </div>
            <div className='flex flex-col w-1/2 p-1 ml-2'>
                <span className='flex flex-row items-center text-sm text-zinc-500'>일간 방문자 <div className='w-[7px] h-[7px] bg-zinc-500 ml-1'/></span>
                <span className='text-lg'>{visitors}</span>
            </div>
        </div>
      );
    }
  
    return null;
};

const ChartButton = ({text, onClick, ifValue, others}:{text:string, onClick:()=>void, ifValue:string, others?:string}) => {
  return <button 
          className={`${others} text-sm ${ifValue == text ? 'text-white bg-[#5F5F5F]' : 'border border-[#C4CDD7] bg-white text-zinc-500'} w-[65px] h-[32px]`}
          onClick={onClick}
          >
            {text}
          </button>
}


const SettingHomeChart = () => {
  const [SelectType, setSelectType] = useState<string>('조회수');
  const [SelectType2, setSelectType2] = useState<string>('일간');
  const scrollRef = useRef<HTMLDivElement>(null);

  const smoothScroll = (element:any, target:any, duration:any) => {
    const start = element.scrollLeft;
    const change = target - start;
    const increment = 10;
    let currentTime = 0;

    const easeInOutQuad = (t:any, b:any, c:any, d:any) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animateScroll = () => {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if (currentTime < duration) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      smoothScroll(scrollRef.current, scrollRef.current.scrollLeft - 300, 100);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      smoothScroll(scrollRef.current, scrollRef.current.scrollLeft + 300, 100);
    }
  };
  
  return(
  <div className='relative mt-[80px] border-b mb-[20px]'>
    <div className='w-full h-fit absolute top-[-50px] right-4 z-20 flex'>
      <span className='text-2xl font-bold ml-10'>2024.09</span>{/* 년도 월 값 가져오셈 */}
      <ChartButton text='조회수' onClick={()=>{setSelectType('조회수')}} ifValue={SelectType} others='ml-auto'/>
      <ChartButton text='방문자' onClick={()=>{setSelectType('방문자')}} ifValue={SelectType}/>
      <ChartButton text='일간' onClick={()=>{setSelectType2('일간')}} ifValue={SelectType2} others='ml-6'/>
      <ChartButton text='주간' onClick={()=>{setSelectType2('주간')}} ifValue={SelectType2}/>
      <ChartButton text='월간' onClick={()=>{setSelectType2('월간')}} ifValue={SelectType2}/>
    </div>
    <div className='w-full h-fit px-[30px] mb-6'>
      <div className='w-full h-fit overflow-x-scroll hidden-scrollbar' ref={scrollRef}>
        <ResponsiveContainer width="200%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />  
            <XAxis dataKey="month" tick={(props) => <CustomTick {...props} />} axisLine={false} tickLine={false} />  
            <YAxis axisLine={false} tickLine={false} tickFormatter={() => ''} tickCount={14} width={0}/> 
            <Tooltip content={<CustomTooltip />} cursor={{fill: "rgb(0,0,0,0.05)"}}/>
            {SelectType == '조회수' && <Bar dataKey="visitors" fill="#7A90F5" barSize={15} /> }
            {SelectType == '방문자' && <Bar dataKey="views" fill="#1CAFEC" barSize={15} /> }      
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    <div className='w-full flex px-2 absolute bottom-3'>
        <SettingCategoryButton w='w-[37px]' h='h-[37px]' text='<' others='bg-white' onClickEvent={scrollLeft}/>
        <SettingCategoryButton w='w-[37px]' h='h-[37px]' others='ml-auto bg-white' text='>' onClickEvent={scrollRight}/>
    </div>
  </div>
  );
};

export default SettingHomeChart;