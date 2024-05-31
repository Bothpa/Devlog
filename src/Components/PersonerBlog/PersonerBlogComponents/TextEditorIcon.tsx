interface TextEditorIconProps {
  value: string;
  ButtonClick: (value: string) => void;
}

const TextEditorIcon: React.FC<TextEditorIconProps> = ({
  value,
  ButtonClick,
}) => {
  return (
    <img
      src={`/Icon/${value}.png`}
      alt={`${value}`}
      // className={`cursor-pointer ${value==="H1"? 'h-[14px]':'h-[16px]'} w-[20px] mr-4 ml-4 object-contain`}
      className={`cursor-pointer h-[16px] w-[20px] mr-4 ml-4 object-contain`}
      onClick={() => ButtonClick(value)}
    />
  );
};

export default TextEditorIcon;
