import { useState } from "react";
import MainCategorySelectBar from "../MainComponents/MainCategorySelectBar";
import CategoryHotPost from "../MainComponents/CategoryHotPost";
import MainCategoryPost from "../MainComponents/MainCategoryPost";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("design");

  return (
    <div className="w-full h-full">
      <MainCategorySelectBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <CategoryHotPost selectedCategory={selectedCategory} />
      <MainCategoryPost selectedCategory={selectedCategory} />
    </div>
  );
};

export default Category;
