interface PersonerBlogBannerProps{
    url: string | null;
}

const PersonerBlogBanner:React.FC<PersonerBlogBannerProps> = ({url}) => {
    return <img src={`${url == "" || url == null ? "/Icon/Defal.png" : url}`} className="w-full h-[350px] object-cover" />
}

export default PersonerBlogBanner;