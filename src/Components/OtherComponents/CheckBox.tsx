interface CheckBoxProps {
    isBoolean: boolean;
    onClick: () => void;
}

const CheckBox:React.FC<CheckBoxProps> = ({isBoolean, onClick}) => {
    return (
        <div className={`w-[18px] h-[18px] border border-zinc-400 bg-white rounded-full cursor-pointer`} onClick={onClick}>
          {isBoolean && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
    );
}

export default CheckBox;