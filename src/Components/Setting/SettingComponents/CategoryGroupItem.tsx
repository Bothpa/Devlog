// import { Reorder, useDragControls, useMotionValue } from "framer-motion";
// import { useRaisedShadow } from "../../../Hooks/useRaisedShadow";
// import { createRef, useCallback, useEffect, useRef, useState } from "react";
// import { ReorderIcon } from "./CategoryItemIcon";
// import SettingCategoryButton from "./SettingCategoryButton";

// const CategoryGroupItem = ({ item, Categorys ,setCategorys} : {item : string, Categorys : string[] ,setCategorys : React.Dispatch<React.SetStateAction<string[]>>}) => {
//     const y = useMotionValue(0);
//     const boxShadow = useRaisedShadow(y);
//     const dragControls = useDragControls();
//     const [isChange, setIsChange] = useState(false);
//     const [newCategoryName, setNewCategoryName] = useState(item);
//     const inputRef = useRef<HTMLInputElement>(null);

//     useEffect(() => {
//         if (isChange && inputRef.current) {
//             inputRef.current.focus();
//         }
//     }, [isChange]);

//     const DeleteCategory = useCallback((categoryToDelete: string) => {
//         const confirmDelete = window.confirm(`정말로 ${categoryToDelete} 카테고리를 삭제하시겠습니까?`);
//         if (confirmDelete) {
//             setCategorys(Categorys.filter(category => category !== categoryToDelete));
//         }
//     },[Categorys]);

//     const CancelChangeCateory = useCallback(() => {
//         setNewCategoryName(item);
//         setIsChange(false);
//     },[]);

//     const CompletionChangeCategory = useCallback(() => {
//         if (Categorys.includes(newCategoryName)) {
//             alert("같은 이름의 카테고리가 이미 존재합니다.");
//             return;
//         }
//         setCategorys(Categorys.map((category) => {
//             if(category === item){
//                 return newCategoryName;
//             }else{
//                 return category;
//             }
//         }));
//         setIsChange(false);
//     },[Categorys, item, newCategoryName]);

//     const ChangeCategory = useCallback(() => {
//         setIsChange(true);
//     },[inputRef]);
  
//     return (
//       <Reorder.Item
//         value={item}
//         id={item}
//         style={{ boxShadow, y, userSelect: 'none'}}
//         dragListener={false}
//         dragControls={dragControls}
//         className="flex h-[61px] flex-row items-center bg-white pr-3 text-xl border-b pl-6"
//       >
//         <ReorderIcon dragControls={dragControls} />
//         {isChange ? 
//         <>
//             <input type="text" className="ml-5 border h-10 w-[400px]" value={newCategoryName} ref={inputRef} onChange={(e) => {setNewCategoryName(e.target.value)}} maxLength={20}/>
//             <SettingCategoryButton w="w-[50px]" h="h-[30px]" text="확인" onClickEvent={CompletionChangeCategory} others="ml-auto text-sm"/>
//             <SettingCategoryButton w="w-[50px]" h="h-[30px]" text="취소" onClickEvent={CancelChangeCateory} others="text-sm"/>
//         </>
//         : 
//         <>
//             <span className="ml-5">{item}</span>
//             <SettingCategoryButton w="w-[50px]" h="h-[30px]" text="수정" onClickEvent={ChangeCategory} others="ml-auto text-sm"/>
//             <SettingCategoryButton w="w-[50px]" h="h-[30px]" text="삭제" onClickEvent={()=>DeleteCategory(item)} others="text-sm"/>
//         </>
//         }
//       </Reorder.Item>
//     );
// };
  

// export default CategoryGroupItem;

import { Reorder, useDragControls, useMotionValue } from "framer-motion";
import { useRaisedShadow } from "../../../Hooks/useRaisedShadow";
import { useCallback, useEffect, useRef, useState } from "react";
import { ReorderIcon } from "./CategoryItemIcon";
import SettingCategoryButton from "./SettingCategoryButton";
import CategoryInterface from "../../../Interface/Setting/CategoryInterface";

const CategoryGroupItem = ({ item, Categorys, setCategorys }: { item: CategoryInterface, Categorys: CategoryInterface[], setCategorys: React.Dispatch<React.SetStateAction<CategoryInterface[]>> }) => {
    const y = useMotionValue(0);
    const boxShadow = useRaisedShadow(y);
    const dragControls = useDragControls();
    const [isChange, setIsChange] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState(item.cateName);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isChange && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isChange]);

    const DeleteCategory = useCallback((categoryToDelete: CategoryInterface) => {
        const confirmDelete = window.confirm(`정말로 ${categoryToDelete.cateName} 카테고리를 삭제하시겠습니까?`);
        if (confirmDelete) {
            setCategorys(Categorys.filter(category => category.cateUuid !== categoryToDelete.cateUuid));
        }
    }, [Categorys]);

    const CancelChangeCateory = useCallback(() => {
        setNewCategoryName(item.cateName);
        setIsChange(false);
    }, []);

    const CompletionChangeCategory = useCallback(() => {
        if (Categorys.some(category => category.cateName === newCategoryName)) {
            alert("같은 이름의 카테고리가 이미 존재합니다.");
            return;
        }
        setCategorys(Categorys.map((category) => (category.cateUuid === item.cateUuid ? { ...category, cateName: newCategoryName } : category)));
        setIsChange(false);
    }, [Categorys, item, newCategoryName]);

    return (
        <Reorder.Item
            value={item}
            id={item.cateName}
            style={{ boxShadow, y, userSelect: 'none'}}
            dragListener={false}
            dragControls={dragControls}
            className="flex h-[61px] flex-row items-center bg-white pr-3 text-xl border-b pl-6"
        >
            <ReorderIcon dragControls={dragControls} />
            {isChange ? 
            <>
                <input type="text" className="ml-5 border h-10 w-[400px]" value={newCategoryName} ref={inputRef} onChange={(e) => {setNewCategoryName(e.target.value)}} maxLength={20}/>
                <SettingCategoryButton w="w-[50px]" h="h-[30px]" text="확인" onClickEvent={CompletionChangeCategory} others="ml-auto text-sm"/>
                <SettingCategoryButton w="w-[50px]" h="h-[30px]" text="취소" onClickEvent={CancelChangeCateory} others="text-sm"/>
            </>
            : 
            <>
                <span className="ml-5">{item.cateName}</span>
                <SettingCategoryButton w="w-[50px]" h="h-[30px]" text="수정" onClickEvent={() => setIsChange(true)} others="ml-auto text-sm"/>
                <SettingCategoryButton w="w-[50px]" h="h-[30px]" text="삭제" onClickEvent={() => DeleteCategory(item)} others="text-sm"/>
            </>
            }
        </Reorder.Item>
    );
};

export default CategoryGroupItem;
