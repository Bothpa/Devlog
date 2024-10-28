interface TextEditorIconProps {
  value: string;
  ButtonClick: (value: string) => void;
}

const TextEditorIcon: React.FC<TextEditorIconProps> = ({value, ButtonClick}) => {
  return <img src={`/Icon/${value}.png`} alt={`${value}`} className={`cursor-pointer h-[16px] w-[20px] mr-4 ml-4 object-contain`} onClick={() => ButtonClick(value)}/>
};

export default TextEditorIcon;
