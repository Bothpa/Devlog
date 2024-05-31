interface SelectButtonProps {
  text: string;
  value: string;
  currentCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

interface MainCategorySelectBarProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SelectButton: React.FC<SelectButtonProps> = ({
  text,
  value,
  currentCategory,
  setSelectedCategory,
}) => {
  return (
    <div
      className={`cursor-pointer text-2xl font-bold mr-20 pb-1 ${
        value === currentCategory ? "border-b-4 border-black" : "text-zinc-400"
      }`}
      onClick={() => setSelectedCategory(value)}
    >
      {text}
    </div>
  );
};

const MainCategorySelectBar: React.FC<MainCategorySelectBarProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex flex-row pt-3 pb-3">
      <SelectButton
        text="디자인"
        value="design"
        currentCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SelectButton
        text="웹"
        value="web"
        currentCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SelectButton
        text="기획"
        value="planning"
        currentCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SelectButton
        text="언어"
        value="language"
        currentCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SelectButton
        text="보안"
        value="security"
        currentCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SelectButton
        text="뉴스"
        value="news"
        currentCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};

export default MainCategorySelectBar;
