interface TeamBlogBannerProps {
  url: string | null;
  pName: string;
}

const TeamBlogBanner: React.FC<TeamBlogBannerProps> = ({ url, pName }) => {
  return (
    <>
      {url ? (
        <img src={`${url}`} className="w-full h-[350px] absolute left-0 object-cover" />
      ) : (
        <div className="w-full h-[350px] absolute left-0 flex items-center justify-end CenterPadding text-2xl font-bold border-t border-b">
          {pName}
        </div>
      )}
    </>
  );
};

export default TeamBlogBanner;
