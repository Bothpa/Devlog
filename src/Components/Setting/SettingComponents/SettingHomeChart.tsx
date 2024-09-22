import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
    {'name': '1', 'views': 16, 'visitors': 21},
    {'name': '2', 'views': 20, 'visitors': 25},
    {'name': '3', 'views': 39, 'visitors': 44},
    {'name': '4', 'views': 14, 'visitors': 19},
    {'name': '5', 'views': 25, 'visitors': 30},
    {'name': '6', 'views': 28, 'visitors': 33},
    {'name': '7', 'views': 1, 'visitors': 6},
    {'name': '8', 'views': 45, 'visitors': 50},
    {'name': '9', 'views': 21, 'visitors': 26},
    {'name': '10', 'views': 9, 'visitors': 14},
    {'name': '11', 'views': 37, 'visitors': 42},
    {'name': '12', 'views': 24, 'visitors': 29},
    {'name': '13', 'views': 45, 'visitors': 50},
    {'name': '14', 'views': 50, 'visitors': 39},
    {'name': '15', 'views': 34, 'visitors': 6},
    {'name': '16', 'views': 1, 'visitors': 16},
    {'name': '17', 'views': 11, 'visitors': 38},
    {'name': '18', 'views': 33, 'visitors': 42},
    {'name': '19', 'views': 37, 'visitors': 23},
    {'name': '20', 'views': 18, 'visitors': 15},
    {'name': '21', 'views': 10, 'visitors': 16},
    {'name': '22', 'views': 11, 'visitors': 46},
    {'name': '23', 'views': 41, 'visitors': 23},
    {'name': '24', 'views': 18, 'visitors': 27},
    {'name': '25', 'views': 22, 'visitors': 40},
    {'name': '27', 'views': 47, 'visitors': 27},
    {'name': '28', 'views': 35, 'visitors': 40}
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
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#9F9F9F" fontSize={14} fontWeight="bold">
        {payload.value}
      </text>
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

const SettingHomeChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={470}>
        <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />      
            <XAxis dataKey="name" tick={(props) => <CustomTick {...props} />} axisLine={false} tickLine={false} />         
            <YAxis axisLine={false} tickLine={false} tickFormatter={() => ''} tickCount={14} width={0}/>    
            <Tooltip content={<CustomTooltip />} />
            <Line type="linear" dataKey="views" stroke="#ff6384" strokeWidth={3} dot={{ r: 6 }} />
        </LineChart>
    </ResponsiveContainer>
  );
};

export default SettingHomeChart;