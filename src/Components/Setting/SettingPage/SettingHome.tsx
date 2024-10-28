import SettingHomeChart from '../SettingComponents/SettingHomeChart';
import BlogStatistics from '../SettingComponents/BlogStatistics';
import SettingPopularPost from '../SettingComponents/SettingPopularPost';

const SettingHome = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="w-full h-[130px] border-[0.5px] border-[#7A90F590] rounded-lg pt-4 pb-4 flex flex-row mb-10 bg-white">
                <BlogStatistics title="TODAY" sub1="방문자" sub1Count={10} sub2="조회수" sub2Count={20} isBorder={true}/>
                <BlogStatistics title="누적" sub1="방문자" sub1Count={10} sub2="조회수" sub2Count={20} isBorder={true}/>
                <BlogStatistics title="구독자" sub1="오늘" sub1Count={10} sub2="총" sub2Count={20} isBorder={false}/>
            </div>
            <div className="w-full h-fit border-[0.5px] border-[#7A90F590] rounded-lg bg-white pb-10 px-5 flex flex-col">
                <SettingHomeChart/>
                <SettingPopularPost/>
            </div>
        </div>
    );
}

export default SettingHome;