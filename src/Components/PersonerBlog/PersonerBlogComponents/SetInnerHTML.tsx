interface SetInnerHTMLProps {
  html: string;
}

const SetInnerHTML: React.FC<SetInnerHTMLProps> = ({ html }) => {
  return (
      <div
        className="w-full html text-xl flex flex-col"
        dangerouslySetInnerHTML={{ __html: html }}
      />
  );
};

export default SetInnerHTML;
