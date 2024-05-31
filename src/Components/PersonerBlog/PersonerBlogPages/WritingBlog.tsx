import { useCallback, useEffect, useRef, useState } from "react";
import MarkdownConverter from "../../../Hooks/MarkdownConverter";
import SetInnerHTML from "../PersonerBlogComponents/SetInnerHTML";
import TextEditorIcon from "../PersonerBlogComponents/TextEditorIcon";
import ErrorPopup from "../PersonerBlogComponents/ErrorPopup";
import { Link, useNavigate } from "react-router-dom";

const WritingBlog = () => {
  const [Title, setTitle] = useState<string>("");
  const [Content, setContent] = useState<string>("");
  const [TagList, setTagList] = useState<string[]>([]);
  const [html, setHtml] = useState<string>("");
  const previewRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [cursorPosition, setCursorPosition] = useState<number | null>(0);
  const navigate = useNavigate();

  const [isErrorPopup, setIsErrorPopup] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const errorEvent = useCallback((msg: string) => {
    setIsErrorPopup(true);
    setErrorMsg(msg);
  }, []);

  const change = useCallback(async (markdowntext: string) => {
    const html = await MarkdownConverter(markdowntext);
    setHtml(html);
  }, []);

  const TagEvent = useCallback(
    (e: any) => {
      e.preventDefault();
      const form = e.target;
      const tag = form.elements.tag.value;
      form.reset();
      if (tag === "") return;
      if (TagList.includes(tag)) return;
      setTagList([...TagList, tag]);
    },
    [TagList]
  );

  const TagDeleteEvent = useCallback(
    (RemoveIndex: number) => {
      const newTagList = TagList.filter((_, Index) => Index !== RemoveIndex);
      setTagList(newTagList);
    },
    [TagList]
  );

  useEffect(() => {
    change(Content);
    if (previewRef.current) {
      previewRef.current.scrollTop = previewRef.current.scrollHeight;
    }
  }, [Content, change]);

  const TextareaSelect = useCallback(
    (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
      const position = (e.target as HTMLTextAreaElement).selectionStart;
      setCursorPosition(position);
    },
    []
  );

  const ButtonClick = useCallback(
    (value: string) => {
      const buttonConfig: { [key: string]: [string, number, number] } = {
        H1: ["# 텍스트입력", 2, 0],
        H2: ["## 텍스트입력", 3, 0],
        H3: ["### 텍스트입력", 4, 0],
        H4: ["#### 텍스트입력", 5, 0],
        Bold: ["**텍스트입력**", 2, 0],
        Em: ["_텍스트입력_", 1, 0],
        Del: ["~~텍스트입력~~", 2, 0],
        Blockquote: ["> 텍스트입력", 2, 0],
        Code: ["```\n코드입력\n```", 4, 1],
        Link: ["[링크텍스트](링크주소)", 8, 1],
      };

      const [insertText, startPlus, endSub] = buttonConfig[value] || ["", 0, 0];

      if (textareaRef.current && cursorPosition !== null) {
        const newText =
          Content.slice(0, cursorPosition) +
          insertText +
          Content.slice(cursorPosition);
        setContent(newText);
        setTimeout(() => {
          const start = cursorPosition + startPlus;
          const end = start + 5 - endSub;
          textareaRef.current!.setSelectionRange(start, end);
          textareaRef.current!.focus();
        }, 0);
      }
    },
    [Content, cursorPosition]
  );

  const InsertImage = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const fileInput = event.target;
      const image = fileInput.files?.[0];
      if (image) {
        if (textareaRef.current && cursorPosition !== null) {
          const newText =
            Content.slice(0, cursorPosition) +
            `![image](http://jungsonghun.iptime.org:7749/images/1716634327919si.png)` +
            Content.slice(cursorPosition);
          setContent(newText);
          setTimeout(() => {
            textareaRef.current!.focus();
          }, 0);
        }
        fileInput.value = "";
      } else {
        alert("image upload error");
        return;
      }
    },
    [Content, cursorPosition]
  );

  const TemporaryStorageEvent = useCallback(() => {
    console.log("임시저장");
  }, []);

  const PostEvent = useCallback(() => {
    console.log("완료");
    errorEvent("제목을 입력해 주세요. ");
  }, []);

  return (
    <div className="fixed top-0 flex flex-row h-full w-full bg-white">
      <div className="p-10 pt-5 pb-0 w-1/2 h-full flex flex-col">
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="w-full h-fit text-[45px] font-bold mb-5 bg-[#F4F4F4] rounded-lg"
        />

        <div className="w-full mb-5 pt-2 pb-2 h-fit flex flex-wrap items-center text-lg bg-[#F4F4F4] rounded-lg">
          {TagList.map((tag, index) => (
            <span
              key={index}
              className="mr-1 ml-1 mb-1 bg-[#BEC7FA] text-white rounded-3xl p-1 pl-3 pr-3 cursor-pointer"
              onClick={() => TagDeleteEvent(index)}
            >
              {tag}
            </span>
          ))}

          <form onSubmit={TagEvent}>
            <input
              type="text"
              name="tag"
              placeholder="테그를 입력하세요"
              className="w-[200px] mb-1 text-[#8e9be3] placeholder-[#8e9be380] bg-[#F4F4F4] rounded-lg"
            />
          </form>
        </div>

        <div className="w-full h-[50px] mb-1 flex flex-row items-center">
          <TextEditorIcon value="H1" ButtonClick={ButtonClick} />
          <TextEditorIcon value="H2" ButtonClick={ButtonClick} />
          <TextEditorIcon value="H3" ButtonClick={ButtonClick} />
          <TextEditorIcon value="H4" ButtonClick={ButtonClick} />
          <TextEditorIcon value="Bold" ButtonClick={ButtonClick} />
          <TextEditorIcon value="Em" ButtonClick={ButtonClick} />
          <TextEditorIcon value="Del" ButtonClick={ButtonClick} />
          <TextEditorIcon value="Blockquote" ButtonClick={ButtonClick} />
          <TextEditorIcon value="Code" ButtonClick={ButtonClick} />
          <input
            type="file"
            id="fileInput"
            onChange={InsertImage}
            style={{ display: "none" }}
            accept="image/*"
          />
          <TextEditorIcon
            value="Image"
            ButtonClick={() => {
              const fileInput = document.getElementById("fileInput");
              fileInput?.click();
            }}
          />
          <TextEditorIcon value="Link" ButtonClick={ButtonClick} />
          <button
            className="ml-auto mr-3 font-bold text-xl flex flex-row items-center"
            onClick={() => navigate(-1)}
          >
            나가기
            <img src="/Icon/Close.png" alt="Close" className="w-5 h-5 ml-1"/>
          </button>
        </div>

        <textarea
          ref={textareaRef}
          className="w-full h-[800px] text-xl resize-none bg-[#F4F4F4] rounded-lg"
          placeholder="내용을 입력하세요"
          value={Content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          onSelect={TextareaSelect}
          spellCheck={false}
        />

        <div className="flex p-3 h-fit mt-auto">
          <button
            onClick={TemporaryStorageEvent}
            className="w-[110px] pt-2 pb-2 ml-auto mr-5 border rounded-lg font-bold text-lg bg-[#BEC7FA] text-white hover:bg-[#d2d8fb]"
          >
            임 시 저 장
          </button>
          <button
            onClick={PostEvent}
            className="w-[110px] pt-2 pb-2 border rounded-lg font-bold text-lg bg-[#BEC7FA] text-white hover:bg-[#d2d8fb]"
          >
            완 료
          </button>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------ */}
      <div
        ref={previewRef}
        className="p-10 pt-20 pb-5 w-1/2 bg-[#F7F3E730] overflow-y-scroll"
      >
        <div className="text-6xl font-bold mb-10">{Title}</div>
        <SetInnerHTML html={html} />
      </div>

      <ErrorPopup
        errorMsg={errorMsg}
        isErrorPopup={isErrorPopup}
        setIsErrorPopup={setIsErrorPopup}
      />
    </div>
  );
};

export default WritingBlog;
