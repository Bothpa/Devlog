interface PersonerBlogBannerProps{
    url: string | null;
    pName: string;
}

const PersonerBlogBanner:React.FC<PersonerBlogBannerProps> = ({url,pName}) => {
    
    return (
        <>
        {url?(
        //    <img src={`${url}`} className="w-full h-[350px] object-contain" />
           <img src={`${url}`} className="w-full h-[350px] object-cover" />
        ):(
            <div className="w-full h-[350px] flex items-center justify-end CenterPadding text-2xl font-bold border-t border-b">{pName}</div>
        )}
        </>
    )
}

export default PersonerBlogBanner;