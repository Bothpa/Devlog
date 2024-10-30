import { useCallback, useEffect, useRef, useState } from "react";
import MarkdownConverter from "../../../Hooks/MarkdownConverter";
import SetInnerHTML from "../PersonerBlogComponents/SetInnerHTML";
import TextEditorIcon from "../PersonerBlogComponents/TextEditorIcon";
import ErrorPopup from "../PersonerBlogComponents/ErrorPopup";
import { useNavigate } from "react-router-dom";
import SelectCategory from "../PersonerBlogComponents/SelectCategory";
import { TokenAxios } from "../../../Axios/AxiosHeader";
import TagCompo from "../PersonerBlogComponents/TagCompo";

const WritingBlog = () => {
  const [Title, setTitle] = useState<string>("");
  const [Content, setContent] = useState<string>("");
  const [Category, setCategory] = useState<string | null>(null);
  const [CategoryList, setCategoryList] = useState<string[]>(["불러오는중!"]);
  const [TagList, setTagList] = useState<string[]>([]);
  const [html, setHtml] = useState<string>("");
  const [cursorPosition, setCursorPosition] = useState<number | null>(0);
  const previewRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const [isErrorPopup, setIsErrorPopup] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const ErrorEvent = useCallback((msg: string) => {
    setIsErrorPopup(true);
    setErrorMsg(msg);
  }, []);

  const change = useCallback(async (markdowntext: string) => {
    const html = await MarkdownConverter(markdowntext);
    setHtml(html);
  }, []);


  useEffect(() => {
    change(Content);
    if (previewRef.current) {
      previewRef.current.scrollTop = previewRef.current.scrollHeight;
    }
  }, [Content, change]);

  useEffect(() => {
    TokenAxios.get("/cate")
    .then((res)=>{
      if(res.status === 200){
        const categoryNames = res.data.map((category: { cateName: string; }) => category.cateName);
        setCategoryList(categoryNames);
      }
    })
    .catch((err) => {
      ErrorEvent("카테고리 불러오기중 오류가 발생하였습니다.");
    });
  }, []);

  const TextareaSelect = useCallback(
    (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
      const position = (e.target as HTMLTextAreaElement).selectionStart;
      setCursorPosition(position);
    },
    []
  );

  const ButtonClick = useCallback((value: string) => {
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

      if (textareaRef.current && cursorPosition !== null) 
      {
        const newText = Content.slice(0, cursorPosition) + insertText + Content.slice(cursorPosition);
        setContent(newText);
        setTimeout(() => {
          const start = cursorPosition + startPlus;
          const end = start + 5 - endSub;
          textareaRef.current!.setSelectionRange(start, end);
          textareaRef.current!.focus();
        }, 0);
      }
    },[Content, cursorPosition]);

  const InsertImage = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
      const fileInput = event.target;
      const image = fileInput.files?.[0];
      if (image) {
        if (textareaRef.current && cursorPosition !== null) {
          const formdata = new FormData();
          formdata.append("image", image);
          TokenAxios.post("/board/photo", formdata)
          .then((res) => {
            if(res.status === 200){
              const newImage = res.data;
              const newText =
              Content.slice(0, cursorPosition) +
              `![image](https://jungsonghun.iptime.org:7750/images/${newImage})` +
              Content.slice(cursorPosition);
              setContent(newText);
            }else{
              ErrorEvent("이미지 업로드중 오류가 발생하였습니다.");
            }
          });
          setTimeout(() => {
            textareaRef.current!.focus();
          }, 0);
        }
        fileInput.value = "";
      } else {
        ErrorEvent("이미지 업로드중 오류가 발생하였습니다.");
        return;
      }
    },
    [Content, cursorPosition]
  );

  const TemporaryStorageEvent = useCallback(() => {
    console.log("임시저장");
  }, []);

  const extractFirstImage = (content: string) => {
    const imgMarkdownRegex = /!\[.*?\]\((.*?)\)/;
    const match = content.match(imgMarkdownRegex);
    return match ? match[1] : '';
  };

  const PostEvent = useCallback(async() => {
    try{
      const imagePath = extractFirstImage(Content);
      const data = {
        "title": Title,
        "content": Content,
        "tags": TagList,
        "categories": Category,
        "boardProfilepath": imagePath? imagePath : null
      }
      console.log(data);
      await TokenAxios.post("/board", data)
      .then((res) => {
        if(res.status === 200){
          navigate(-1);
        }else{
          ErrorEvent("게시글 작성중 오류가 발생하였습니다.");
        }
      });
    }catch(e){
      ErrorEvent("게시글 작성중 오류가 발생하였습니다.");
    }

  }, [Category, Content, TagList, Title]);

  const TagEvent = useCallback((tag: string) => {
    if (TagList.includes(tag)) {
      setTagList(TagList.filter(item => item !== tag));
    } else {
      setTagList([...TagList, tag]);
    }
  },[TagList])

  return (
    <div className="fixed top-0 flex flex-row h-full w-full bg-white">
      <div className="p-10 pt-5 pb-0 w-1/2 h-full flex flex-col">

        <SelectCategory options={CategoryList} setCategory={setCategory} others="w-full text-lg mb-4" text={'카테고리 선택 ∨'}/>
        <div className="relative h-fit rounded-lg w-full text-lg mb-4">
          <TagCompo text="디자인" onClick={()=>TagEvent("디자인")} TagList={TagList}/>
          <TagCompo text="웹" onClick={()=>TagEvent("웹")} TagList={TagList}/>
          <TagCompo text="기획" onClick={()=>TagEvent("기획")} TagList={TagList}/>
          <TagCompo text="언어" onClick={()=>TagEvent("언어")} TagList={TagList}/>
          <TagCompo text="보안" onClick={()=>TagEvent("보안")} TagList={TagList}/>
          <TagCompo text="뉴스" onClick={()=>TagEvent("뉴스")} TagList={TagList}/>
        </div>

        <input type="text" placeholder="제목을 입력하세요" value={Title} onChange={(e) => { setTitle(e.target.value);}} className="w-full h-fit text-[45px] font-bold mb-5 bg-[#F4F4F4] rounded-lg"/>

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
          <input type="file" id="fileInput" onChange={InsertImage} style={{ display: "none" }} accept="image/*"/>
          <TextEditorIcon value="Image" ButtonClick={() => {
            const fileInput = document.getElementById("fileInput");
            fileInput?.click();
          }}/>
          <TextEditorIcon value="Link" ButtonClick={ButtonClick} />
          <button className="ml-auto mr-3 font-bold text-xl flex flex-row items-center" onClick={() => navigate(-1)}>
            나가기<img src="/Icon/Close.png" alt="Close" className="w-5 h-5 ml-1" />
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
          <button onClick={TemporaryStorageEvent} className="w-[110px] pt-2 pb-2 ml-auto mr-5 border rounded-lg font-bold text-lg bg-[#BEC7FA] text-white hover:bg-[#d2d8fb]">
            임 시 저 장
          </button>
          <button onClick={PostEvent} className="w-[110px] pt-2 pb-2 border rounded-lg font-bold text-lg bg-[#BEC7FA] text-white hover:bg-[#d2d8fb]">
            완 료
          </button>
        </div>

      </div>

      <div ref={previewRef} className="p-10 pt-20 pb-5 w-1/2 bg-[#F7F3E730] overflow-y-scroll">
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