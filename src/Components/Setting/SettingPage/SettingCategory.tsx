import { Reorder } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { PlusIcon } from "../SettingComponents/CategoryItemIcon";
import SettingCategoryButton from "../SettingComponents/SettingCategoryButton";
import CategoryGroupItem from "../SettingComponents/CategoryGroupItem";
import SelectCategory from "../../PersonerBlog/PersonerBlogComponents/SelectCategory";
import SettingP1 from "../SettingComponents/SettingP1";
import { TokenAxios } from "../../../Axios/AxiosHeader";
import CategoryInterface from "../../../Interface/Setting/CategoryInterface";

const SettingCategory = () => {
    const [Categorys, setCategorys] = useState<CategoryInterface[]>([]);
    const [CategoryTitleLimit, setCategoryTitleLimit] = useState<number>(0);
    const [CategoryPostCount, setCategoryPostCount] = useState<string | null>(null);
    const [isCategoryPostCount, setIsCategoryPostCount] = useState<boolean>(true);
    const dataformat = new Date();
    const hour = dataformat.getHours();
    const minute = dataformat.getMinutes();
    const second = dataformat.getSeconds();
  
    const AddCategory = useCallback(() => {
        if (Categorys.length >= 10) {
            alert("카테고리는 최대 10개까지 추가 가능합니다.");
        } else {
            TokenAxios.post("/cate/pBlog", {cateName: `새 카테고리${hour+minute+second}`, cateIdx: Categorys.length == 0 ? 0 : Categorys[Categorys.length -1].cateIdx + 1})
            .then((res) => {
                if (res.status === 200) {
                    const categoryData = {
                        cateName: res.data.cateName,
                        cateUuid: res.data.cateUuid,
                        cateIdx: res.data.cateIdx,
                    };
                    console.log(categoryData);
                    setCategorys([...Categorys, categoryData]);
                }
            })
            .catch(() => {
                alert("카테고리 추가 중 오류가 발생하였습니다.");
            });
        }
    }, [Categorys]);

    useEffect(() => {
        TokenAxios.get("/cate/pBlog")
            .then((res) => {
                if (res.status === 200) {
                    const categoryData = res.data.map((category: any) => ({
                        cateName: category.cateName,
                        cateUuid: category.cateUuid,
                        cateIdx: category.cateIdx,
                    }));
                    setCategorys(categoryData);
                }
            })
            .catch(() => {
                alert("카테고리 불러오기 중 오류가 발생하였습니다.");
            });
    }, []);

    useEffect(() => {
        setIsCategoryPostCount(CategoryPostCount === "표시합니다.");
    }, [CategoryPostCount]);

    const SaveChanges = useCallback(() => {
        console.log(`CategoryTitleLimit: ${CategoryTitleLimit}\n CategoryPostCount: ${CategoryPostCount}\n Categorys: ${Categorys.map((cat) => cat.cateName)}`);
    }, [isCategoryPostCount, CategoryTitleLimit, Categorys]);

    const SaveCateChanges = useCallback(() => {
        const categoryData = Categorys.map((category, index) => ({
            cateName: category.cateName,
            cateUuid: category.cateUuid,
            cateIdx: index,
        }));
        TokenAxios.patch("/cate/pBlog", categoryData)
        .then((res) => {
            if (res.status === 200) {
                alert("카테고리 변경사항이 저장되었습니다.");
            }
        })
        .catch(() => {
            alert("카테고리 변경사항 저장 중 오류가 발생하였습니다.");
        });
    }, [Categorys]);

    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-full flex flex-col">
            <SettingP1 text="카테고리 관리" others="mb-3" />
            <div className="flex flex-col w-full h-fit px-8 py-6 border mb-10 bg-white">

                <div className="flex flex-row mb-4">
                    <div>
                         <span className="text-base text-[#6E716E]">카테고리 순서를 변경하고 주제 연결을 설정할 수 있습니다.</span>
                         <span className="underline ml-2 cursor-pointer text-[14px] text-zinc-500">자세히 보기</span><br/>
                         <span className="text-[14px] text-zinc-500">드래그 앤 드롭으로 카테고리 순서르 변경할 수 있습니다.</span>
                    </div>
                </div>

                <div className="flex flex-col w-full h-fit px-8 py-6 border mb-6 bg-[#E7EDF3]">
                <div className="flex h-[61px] flex-row items-center bg-white pr-3 text-xl border-b pl-6">전체보기</div>
                    <Reorder.Group axis="y" onReorder={setCategorys} values={Categorys} className="ml-0">
                        {Categorys.map((item) => (
                            <CategoryGroupItem key={item.cateUuid} item={item} Categorys={Categorys} setCategorys={setCategorys} />
                        ))}
                    </Reorder.Group>
                    
                    <div className="flex flex-row items-center p-3 text-xl border border-black border-dotted pl-4 mt-1 cursor-pointer" onClick={AddCategory}>
                        <PlusIcon />
                        <span className="ml-5">카테고리 추가</span>
                        <span className="ml-auto text-base text-zinc-500">{Categorys.length.toString()} <span className="mr-10 text-base text-zinc-400">/ 10</span></span>                       
                    </div>         
                </div>
                <SettingCategoryButton w="w-[190px]" h="h-[40px]" text="변경사항 저장" onClickEvent={SaveCateChanges} others="ml-auto mt-auto"/>
            </div>

            <SettingP1 text="카테고리 설정" others="mb-3" />
            <div className="flex flex-col w-full h-fit px-8 py-6 border mb-2 bg-white">
                <span className="text-base text-[#6E716E] mb-4">
                    카테고리명이
                    <input type="number" className="border ml-2 mr-2 p-1 w-[80px]" value={CategoryTitleLimit} onChange={(e)=>{setCategoryTitleLimit(Number(e.target.value))}}/>
                    글자까지 표시됩니다.
                </span>
                <span className="text-base text-[#6E716E] flex flex-row items-center">
                    카테고리별 글 수를
                    <SelectCategory options={["표시합니다.","표시하지 않습니다."]} setCategory={setCategoryPostCount} others="w-[145px] text-base ml-2"/>
                </span>
            </div>

            <div className="flex flex-col w-full h-fit px-5 py-3 border bg-white">
                <SettingCategoryButton w="w-[190px]" h="h-[40px]" text="변경사항 저장" onClickEvent={SaveChanges} others="ml-auto mt-auto"/>
            </div>
        </div>
        </div>
    );
};

export default SettingCategory;
