import Category from "./Category";
import PostDataInterface from "../../../Interface/PersonerBlog/PostDataInterface";

const data = [
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://velog.velcdn.com/images/oneoneone/profile/d7b4332e-760e-43c9-b4ca-a88832690ab5/social_profile.png", // 게시물 작성 유저 아이콘
      },
    },

    p_blog: {
      pDName: "jungsonghun.blogs", // 블로그 도메인 주소
    },

    categorys: {
      cateName: "카테고리 이름",
    },

    boards: {
      boardId: "111252135222", //게시물 아이디
      boardTitle: "저 개발자 취준 포기해야 할까요?", //게시물 제목
      boardContent:
        "안녕하세요.오늘은 얼어붙은 개발자 취업시장에서 왓에버가 자주 듣는 다음의 질문을 중심으로 이야기해보고자 합니다.물론, 이 질문은 커리어를 준비하고 시작하는 시점에서 매우 중요한 질문입니다.따라서 이 글에서 명확한 해답을 제시하거나 속 시원한 답변을 기대하기는 어려울 수 있습니다.", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
        "https://velog.velcdn.com/images/whatever/post/449defa4-cf25-4f5c-813a-5082bb3cc471/image.png"
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "ShadowHunter",
      user_info: {
        userIcon:
        "https://velog.velcdn.com/images/whatever/profile/0de033f1-c6e5-4c20-9dad-4458f3a40a9e/social_profile.png",
      },
    },
    categorys: {
      cateName: "카테고리 이름",
    },
    p_blog: {
      pDName: "jungsonghun.blogs", // 블로그 도메인 주소
    },

    boards: {
      boardId: "111252135222", //게시물 아이디
      boardTitle: "서류탈락 80%, '이것' 때문에 떨어진다.", //게시물 제목
      boardContent:
        "안녕하세요.오늘은 이력서 전형에 대해 이야기 나눠보고자 합니다. 현재 채용시장은 과거와는 비교할 수 없는 경쟁률을 자랑하고 있어, 이력서에서도 더 높은 기준이 요구되고 있습니다.이 포스팅에서는 시장에서 요구하는 이력서의 기준과 대부분의 지원자가 어떤 사유로 탈락하는지, 그리고 이를 개선할 방법에 대해 하나씩 다뤄보겠습니다.",
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://velog.velcdn.com/images/whatever/post/d5ad036d-6e7f-43b2-bbde-1f9439466a47/image.png",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "MysticEcho",
      user_info: {
        userIcon:
          "https://velog.velcdn.com/images/juunini/profile/ce644010-b83d-4693-9539-8228d0fb61b9/267557765_1090288931809216_2637187790467663409_n.jpeg", // 게시물 작성 유저 아이콘
      },
    },
    p_blog: {
      pDName: "jungsonghun.blogs", // 블로그 도메인 주소
    },
    categorys: {
      cateName: "카테고리 이름",
    },

    boards: {
      boardId: "111252135222", //게시물 아이디
      boardTitle: "대규모인지 대용량인지 암튼 트래픽 뭐시기 광고하는 그거 - 1편", //게시물 제목
      boardContent:
        "요 근래 페이스북 같은데에 광고 올라오는거 보면신입한테 대규모 대용량(은 왜?) 트래픽을 알려주겠다면서 그런 광고가 많이 나오던데", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://velog.velcdn.com/images/juunini/post/82056b75-cde7-4442-92ad-98e6e37070f9/image.png",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: false, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "BlazeStar",
      user_info: {
        userIcon:
          "https://velog.velcdn.com/images/typo/profile/6cb7f1f7-d1ba-489b-9cca-497a6cd814fa/image.jpeg", // 게시물 작성 유저 아이콘
      },
    },
    p_blog: {
      pDName: "jungsonghun.blogs", // 블로그 도메인 주소
    },
    categorys: {
      cateName: "카테고리 이름",
    },

    boards: {
      boardId: "111252135222", //게시물 아이디
      boardTitle: "[번역] CSS 미디어 쿼리, 그 너머로", //게시물 제목
      boardContent:
        "요약: 최근 몇 년간 출시된 많은 CSS 기능들이 특정 조건에서 적용되는 스타일 코드를 똑똑하게 작성하도록 고안되었습니다. 또한 그 중 상당수는 반응형 디자인과 직접적인 관련이 있습니다. 이것이 미디어 쿼리에 어떤 의미가 있을까요? Juan Diego Rodríguez(원저자)는", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://velog.velcdn.com/images/typo/post/5dafe16a-937a-4d4d-be58-eb1430aaf2e2/image.jpeg",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: false, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "LunaWhisper",
      user_info: {
        userIcon:
          "https://velog.velcdn.com/images/minboykim/profile/a0dd6f42-da27-4138-b4b3-c053cdcb4dde/social.jpeg", // 게시물 작성 유저 아이콘
      },
    },
    p_blog: {
      pDName: "jungsonghun.blogs", // 블로그 도메인 주소
    },
    categorys: {
      cateName: "카테고리 이름",
    },

    boards: {
      boardId: "111252135222", //게시물 아이디
      boardTitle: "Proxmox로 사설 클라우드 구축하기", //게시물 제목
      boardContent:
        "옛날부터 홈 서버를 구축해보고 싶다는 생각을 갖고있었는데, 얼마전 주변 지인의 추천으로 미니 PC를 구매하게 되어 드디어 홈 서버를 구축할 수 있게 되었다.나만의 사설 클라우드를 구축하는 과정을 함께 진행해보자.", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://velog.velcdn.com/images/minboykim/post/6c67d66c-f91d-47eb-94c0-db0d56333717/image.png",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: false, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "StormChaser",
      user_info: {
        userIcon:
          "https://velog.velcdn.com/images/sungpaks/profile/e26c2362-311d-4447-a47e-e68244338c8a/image.png", // 게시물 작성 유저 아이콘
      },
    },
    p_blog: {
      pDName: "jungsonghun.blogs", // 블로그 도메인 주소
    },
    categorys: {
      cateName: "카테고리 이름",
    },

    boards: {
      boardId: "111252135222", //게시물 아이디
      boardTitle: "대규모인지 대용량인지 암튼 트래픽 뭐시기 광고하는 그거 - 2편", //게시물 제목
      boardContent:
        "실전에 투입되면 어떻게 대규모 트래픽을 감당해야하나우리 개린이들이 아, 요즘 개는 민감한 단어인가알기 쉽게 설명을 해주겠다 이 말입니다.", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://velog.velcdn.com/images/juunini/post/41c60925-eade-4b60-906b-74a5ebc45490/image.jpg",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: false, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "FrostNova",
      user_info: {
        userIcon:
          "https://velog.velcdn.com/images/fing9/profile/f2254dc6-4c2c-48b1-a68d-857dc376b66a/image.jpeg", // 게시물 작성 유저 아이콘
      },
    },
    p_blog: {
      pDName: "jungsonghun.blogs", // 블로그 도메인 주소
    },
    categorys: {
      cateName: "카테고리 이름",
    },

    boards: {
      boardId: "111252135222", //게시물 아이디
      boardTitle: "자바스크립트와 남편의 공통점은? (초보자를 위한 자바스크립트 비동기 처리 설명)", //게시물 제목
      boardContent:
        "자바스크립트가 한 번에 한 가지 일만 할 수 싱글 스레드 언어라는 말을 들었을 때,제 머릿속엔 한 가지 생각이 스쳐 지나갔습니다.", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://velog.velcdn.com/images/khy2106/post/3d8edd4a-1cb3-4b0d-aa56-3e89e786ab37/image.jpeg",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: false, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "ThunderBolt",
      user_info: {
        userIcon:
          "https://velog.velcdn.com/images/yoni0207/profile/04ca7c26-dc6b-4c4d-9bee-dca7b4cf7f7c/social_profile.png", // 게시물 작성 유저 아이콘
      },
    },
    p_blog: {
      pDName: "jungsonghun.blogs", // 블로그 도메인 주소
    },
    categorys: {
      cateName: "카테고리 이름",
    },
    boards: {
      boardId: "111252135222", //게시물 아이디
      boardTitle: "난 더 성장해야 해..", //게시물 제목
      boardContent:
        "저는 소프트웨어마이스터고에 재학 중이며, 백엔드 개발자를 꿈꾸고 있는 학생입니다. 현재는 고등학교 3학년이고, 학기 초에 회사와의 컨택을 통해 현장실습이 거의 확정된 상태였습니다.그러나 예기치 못한 일이 발생하여 이를 회고하고, 제가 더욱 성장하기 위해 생각한 방법을 적어보려 합니다.", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://velog.velcdn.com/images/nicebrian0328/post/57ca8455-d080-45a5-b727-aae0733a877b/image.png",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: false, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "RavenHeart",
      user_info: {
        userIcon:
          "https://velog.velcdn.com/images/wijoonwu/profile/bafab08b-e30b-45bc-ab97-ed573eb83f9b/image.jpeg", // 게시물 작성 유저 아이콘
      },
    },
    p_blog: {
      pDName: "jungsonghun.blogs", // 블로그 도메인 주소
    },
    categorys: {
      cateName: "카테고리 이름",
    },
    boards: {
      boardId: "111252135222", //게시물 아이디
      boardTitle: "[TOP 10] 개발자들이 많이 읽은 아티클 모음 - 5월 4주차", //게시물 제목
      boardContent:
        "01. 서버 증설 없이 처리하는 대규모 트래픽✔ 라이브 쇼핑 보기 서비스는 트래픽 급증으로 서버에 치명적일 수 있어요.✔ Redis 과부하 문제를 해결하기 위해 캐싱 데이터를 분류하고, Local Cache를 사용해야 해요.✔ 포인트 지급과 데이터베이스 과부하 문제는 Kafka를 통해 비동기로 Insert하고, Throttling을 걸어야 해요.", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://velog.velcdn.com/images/oneoneone/post/1b46c1d0-c393-4f6a-b2c3-1dc33ea5fa85/image.png",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: false, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "SilverLining",
      user_info: {
        userIcon:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASbSURBVHgB7Z0tTytBFIYP914BDiQ4cIADB0EhwYFE8ifq7g/hJ2CRSCQ4kOCobF3ruHk3maS5aSnbdnfPOe/7JE0oCTvTnmc+dvbMsNbr9b5M0PLLBDUSgBwJQI4EIEcCkCMByJEA5EgAciQAORKAHAlAjgQgRwKQIwHIkQDkSAByJAA5EoAcCUCOBCBHApAjAciRAORIAHIkADkSgBwJQI4EIEcCkCMByJEA5EgAciQAOX+MhPX1dTs+Prbt7W3b3d21jY2N6ndgPB7bYDCw4XBor6+v9vHxUb1nIL0Ae3t7dn5+XgV9FhABYuC1v79f/Q4SPD8/28vLi2UmrQA/Cfx34O/wwjXu7u7S9gi/z87O/loyELTr62vb2tqyZcFQcXp6Wv2MXiEb6SaBCDwEWDVFqmykEgABOjo6sqbAtbNJkEaAi4uLRoNfQBmXl5eWhRQCIChlnG6Dk5OTVstrkvACYKLXxJg/D5RZ1hEiE14ABGIVs/26IPgZeoHQAiDwbYz7s4AA0XuB0AIsusizKsrycmRCC+Dhyz84OLDIhBUAra/rHgCgDpGHgbAC7OzsmBc81aUuYQXY3Nw0L3iqS13CCtDFrd8sPNWlLsoIIkcCkBNWAE8JGpGTRcIKgPw9L3iqS13CCvD5+Wle8FSXuoQVAJm8HlK0UAfUJSqhJ4Fvb2/WNcgcjkxoAfDld936oieKhhYAwX96erKuwJ6B6Oni4dcBIEAXvQAC//j4aNEJLwCC30UgUGaGzSIpVgLRC7Q5FKCsLFvG0iwFPzw8tBIUlIGyspDqWcD9/X2jEuDaKCMT6R4GIUBNzAlwzWzBByl3ByNYaK23t7dLP6vHfT6u9/7+bhlZ6/V6X5YYpI0jebRu/mD2wBfSHxCBngAv9ASQ4PDwsErhwvvJE0JGo1EV9H6/72KFsS1SCDAZyFngnh2vVUwSUV4WQUILULZnlR06aMGYqDW1QDN56khZho6+Ghh2DoBgXF1dTZ3koZWvcqWubECdtg0NZUQ+QiakAGjxOA9gHhABj4wXeWyMHgX5/j85Zwi9AXoeD4+n6xJOAASk7nbwkjyCGT0meXg/mcWDYOMsIJwShtaO3mWRHT/odaINCaHmAIsEHyCQOP6tHAHXFKVukSQIsxK4aPDbBnWMdG5ACAHwhUYIfgHzEwwjEXAvQFdHwCzLzc1NiC1jrgXA2I31/Ijbr1HnCEfKuRagq/N/VgXuJLzPB9wKgMBnOITJu8RuBUDXnwHvQ4FLAbDkGrnr/x8MBV7vClwKEHHWPw+vn8mdANlaf8FrL+BOgIytv+Dxs7kSAC0kY+sveOwFXAnQ5bGvbdH0A6m6uBLAw8GPTePtaFk3AmTv/gtYF/A0DLgRgKH1Fzx9VjcCIBuHBU89nRsBkKrFgqfNJm5SwpBGVc7fz/CvWKZRUsk9bS1PvzVMfI+OiiVHApAjAciRAORIAHIkADkSgBwJQI4EIEcCkCMByJEA5EgAciQAORKAHAlAjgQgRwKQIwHIkQDkSAByJAA5EoAcCUCOBCBHApAjAciRAORIAHIkADkSgBwJQI4EIOcfGjV2tEfztqEAAAAASUVORK5CYII=", // 게시물 작성 유저 아이콘
      },
    },
    p_blog: {
      pDName: "jungsonghun.blogs", // 블로그 도메인 주소
    },
    categorys: {
      cateName: "카테고리 이름",
    },
    boards: {
      boardId: "111252135222", //게시물 아이디
      boardTitle: "Gitlab, Jenkins, Docker, Docker Hub, Nginx, Blue-Green 무중단배포 CI/CD 구축 - 1", //게시물 제목
      boardContent:
        "SSAFY 프로젝트를 진행하면서 3번 다 인프라를 담당했습니다.처음 인프라 담당했을 때가 떠오르네요..CI/CD 배포에 대한 지식이 너무나 얕아서 너무나도 막막했던 그때 그 심정...", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://velog.velcdn.com/images/habins226/post/84e450d7-aaa9-4f45-917f-b8b906b2c08e/image.jpeg",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: false, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "PhoenixFlame",
      user_info: {
        userIcon:
          "https://velog.velcdn.com/images/eogns47/profile/bf001d90-f0af-4be4-bbf3-c70df1819141/image.jpg", // 게시물 작성 유저 아이콘
      },
    },
    p_blog: {
      pDName: "jungsonghun.blogs", // 블로그 도메인 주소
    },
    categorys: {
      cateName: "카테고리 이름",
    },
    boards: {
      boardId: "111252135222", //게시물 아이디
      boardTitle: "『튜링의 사과』 오리지널 강의 - '커맨드라인 도구로 이해하는 네트워크(HTTP, TCP/IP)'", //게시물 제목
      boardContent:
        "OSI 7계층을 외운다고 해서 네트워크를 이해하고 있는 것은 아닙니다. TCP/IP에 대한 이론 강의를 듣는다고 네트워크의 실체가 손에 잡히는 건 아닙니다. 네트워크 공부 중에는 이해가 되는 듯 한데, 뒤돌아서면 남아있는 지식이 많지 않습니다.", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://velog.velcdn.com/images/turingapple/post/82c2aade-1bbc-4452-8740-da06b157d090/image.png",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: false, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "PhoenixFlame",
      user_info: {
        userIcon:
          "https://velog.velcdn.com/images/kangactor123/profile/0d06712e-fb9a-46a6-acdc-1474193ea384/social.jpeg", // 게시물 작성 유저 아이콘
      },
    },
    p_blog: {
      pDName: "jungsonghun.blogs", // 블로그 도메인 주소
    },
    categorys: {
      cateName: "카테고리 이름",
    },
    boards: {
      boardId: "111252135222", //게시물 아이디
      boardTitle: "피드백 맷집 기르기", //게시물 제목
      boardContent:
        "우리 회사는 분기마다 코칭 세션을 갖는다. 지난 분기의 성과를 정리하고 리더들과 면담을 하며 장점과 개선점을 피드백 받는다. 이번 코칭 세션 때 장점으로 '적극적이다'라는 피드백을 받았다. 나는 열정적인 개발자는 아니라서 의외라는 생각이 먼저 들었다. 이어서 '피드백을 받는 데 거리낌이 없다'라는 이유가 덧붙었다. 이유를 듣고 납득이 갔다. 나는 실제로 피드백을 덜 두려워 하는 편이다.", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://velog.velcdn.com/images/hyemin916/post/57d33d46-8f16-465e-84c9-47ea4cff8715/image.png",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: false, // 좋아요 눌렀는지 여부
    },
  }
];

const dataShort = [
  {
    users: {
      name: "GalaxyKnight",
      user_info: {
        userIcon:
          "https://velog.velcdn.com/images/dus532/profile/bd073e62-314f-4986-86c7-8e88b1314ee8/image.png", // 게시물 작성 유저 아이콘
      },
    },
    categorys: {
      cateName: "카테고리 이름",
    },
    p_blog: {
      pDName: "jungsonghun.blogs", // 블로그 도메인 주소
    },

    boards: {
      boardId: "111252135222", //게시물 아이디
      boardTitle: "더 정확한 데이터를 향해, 소프트콘 뷰어십 제작기(9)", //게시물 제목
      boardContent:
        "뷰봇.인터넷 방송에서 시청률을 올리기 위해 시청자 수와 팔로우 수, 그외 것들을 올라가게 하는 봇.소프트콘 뷰어십은 데이터를 정확하게 파악하는 것이 가장 중요한 목적이기에 이러한 뷰봇을 탐지할 수 있는 시스템을 갖추는것이 중요한 목표중에 하나입니다.", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://velog.velcdn.com/images/dus532/post/2f405169-492b-49a8-9102-9d3b426c0873/image.png",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: false, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "CrimsonWolf",
      user_info: {
        userIcon:
          "https://velog.velcdn.com/images/kingwang09/profile/87e472e7-ac62-4bbe-808a-9a19975a78c2/image.png", // 게시물 작성 유저 아이콘
      },
    },
    categorys: {
      cateName: "카테고리 이름",
    },
    p_blog: {
      pDName: "jungsonghun.blogs", // 블로그 도메인 주소
    },
    boards: {
      boardId: "111252135222", //게시물 아이디
      boardTitle: "역삼역 중간 공사장 철근 추락", //게시물 제목
      boardContent:
        "5/28(화) 점심시간(12:40)쯤에 역삼역 가는길 철근이 떨어져지나가던 행인 분이 맞고 쓰러져있는 것을 봤습니다.옆에 긴 철근이 떨어져있었고다치신 시민분은 조용히 일자로 누워계셨고다른 시민분이 가슴쪽을 지압하고 계셨는데", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://velog.velcdn.com/images/kingwang09/post/7ab09967-bd1f-4b2d-a3fe-c34c8224a0ba/image.png",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: false, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "StarGazer",
      user_info: {
        userIcon:
          "https://velog.velcdn.com/images/ksk0605/profile/1cdf98c9-719b-4c9c-9e97-3074652c7410/image.jpg", // 게시물 작성 유저 아이콘
      },
    },
    p_blog: {
      pDName: "jungsonghun.blogs", // 블로그 도메인 주소
    },
    categorys: {
      cateName: "카테고리 이름",
    },
    boards: {
      boardId: "111252135222", //게시물 아이디
      boardTitle: "@Transactional(readOnly = true) 는 항상 정답일까?", //게시물 제목
      boardContent:
        "자바, 스프링, JPA 로 개발을 하다보면 필연적으로 @Transactional 키워드를 마주치게 됩니다. 그리고 읽기 전용의 기능에서는 readOnly 옵션을 true 로 사용하고는 합니다. 왜냐는 질문에 많은 사람들은 다음과 같이 이야기 하죠.", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://velog.velcdn.com/images/ksk0605/post/1daf6f80-4155-465a-a8dd-6d51cc48b5fd/image.png",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: false, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "MoonWalker",
      user_info: {
        userIcon:
          "https://velog.velcdn.com/images/yiseungyun/profile/5a36f8a9-e010-45c1-83d9-e6392ba5bfb8/image.jpg", // 게시물 작성 유저 아이콘
      },
    },
    p_blog: {
      pDName: "jungsonghun.blogs", // 블로그 도메인 주소
    },
    categorys: {
      cateName: "카테고리 이름",
    },

    boards: {
      boardId: "111252135222", //게시물 아이디
      boardTitle: "광卫 ㅇr님! 누구㈏★ ㉠ㅏ능 Next.js 프로젝트를 5분만에 앱으로", //게시물 제목
      boardContent:
        "Next.js로 프로젝트를 진행했는데, 데스크탑이 아닌 모바일 버전으로 사용할 것을 고려해 모바일 디자인으로만 했었다. 그런데 웹보다는 앱이 더 편할거 같아 앱으로 제작해야할까 고민하던 중 웹 앱으로 쉽게 발행할 수 있다고 해서 next-pwa를 이용해 웹 앱으로 만들어보았다.", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://velog.velcdn.com/images/yiseungyun/post/5a78fa60-9f8c-4bcf-8656-74ace0a2194a/image.png",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: false, // 좋아요 눌렀는지 여부
    },
  },
  
];

const dataMidle =[  {
  users: {
    name: "GalaxyKnight",
    user_info: {
      userIcon:
        "https://velog.velcdn.com/images/dus532/profile/bd073e62-314f-4986-86c7-8e88b1314ee8/image.png", // 게시물 작성 유저 아이콘
    },
  },
  categorys: {
    cateName: "카테고리 이름",
  },
  p_blog: {
    pDName: "jungsonghun.blogs", // 블로그 도메인 주소
  },

  boards: {
    boardId: "111252135222", //게시물 아이디
    boardTitle: "더 정확한 데이터를 향해, 소프트콘 뷰어십 제작기(9)", //게시물 제목
    boardContent:
      "뷰봇.인터넷 방송에서 시청률을 올리기 위해 시청자 수와 팔로우 수, 그외 것들을 올라가게 하는 봇.소프트콘 뷰어십은 데이터를 정확하게 파악하는 것이 가장 중요한 목적이기에 이러한 뷰봇을 탐지할 수 있는 시스템을 갖추는것이 중요한 목표중에 하나입니다.", // 게시물 내용
    boardDate: new Date(), //게시물 작성 날짜
    images: {
      imgPath:
        "https://velog.velcdn.com/images/dus532/post/2f405169-492b-49a8-9102-9d3b426c0873/image.png",
    },
  },

  config: {
    comment_count: 21, // 게시물 댓글 수
    isLike: false, // 좋아요 눌렀는지 여부
  },
},
{
  users: {
    name: "CrimsonWolf",
    user_info: {
      userIcon:
        "https://velog.velcdn.com/images/kingwang09/profile/87e472e7-ac62-4bbe-808a-9a19975a78c2/image.png", // 게시물 작성 유저 아이콘
    },
  },
  categorys: {
    cateName: "카테고리 이름",
  },
  p_blog: {
    pDName: "jungsonghun.blogs", // 블로그 도메인 주소
  },
  boards: {
    boardId: "111252135222", //게시물 아이디
    boardTitle: "역삼역 중간 공사장 철근 추락", //게시물 제목
    boardContent:
      "5/28(화) 점심시간(12:40)쯤에 역삼역 가는길 철근이 떨어져지나가던 행인 분이 맞고 쓰러져있는 것을 봤습니다.옆에 긴 철근이 떨어져있었고다치신 시민분은 조용히 일자로 누워계셨고다른 시민분이 가슴쪽을 지압하고 계셨는데", // 게시물 내용
    boardDate: new Date(), //게시물 작성 날짜
    images: {
      imgPath:
        "https://velog.velcdn.com/images/kingwang09/post/7ab09967-bd1f-4b2d-a3fe-c34c8224a0ba/image.png",
    },
  },

  config: {
    comment_count: 21, // 게시물 댓글 수
    isLike: false, // 좋아요 눌렀는지 여부
  },
},
{
  users: {
    name: "StarGazer",
    user_info: {
      userIcon:
        "https://velog.velcdn.com/images/ksk0605/profile/1cdf98c9-719b-4c9c-9e97-3074652c7410/image.jpg", // 게시물 작성 유저 아이콘
    },
  },
  p_blog: {
    pDName: "jungsonghun.blogs", // 블로그 도메인 주소
  },
  categorys: {
    cateName: "카테고리 이름",
  },
  boards: {
    boardId: "111252135222", //게시물 아이디
    boardTitle: "@Transactional(readOnly = true) 는 항상 정답일까?", //게시물 제목
    boardContent:
      "자바, 스프링, JPA 로 개발을 하다보면 필연적으로 @Transactional 키워드를 마주치게 됩니다. 그리고 읽기 전용의 기능에서는 readOnly 옵션을 true 로 사용하고는 합니다. 왜냐는 질문에 많은 사람들은 다음과 같이 이야기 하죠.", // 게시물 내용
    boardDate: new Date(), //게시물 작성 날짜
    images: {
      imgPath:
        "https://velog.velcdn.com/images/ksk0605/post/1daf6f80-4155-465a-a8dd-6d51cc48b5fd/image.png",
    },
  },

  config: {
    comment_count: 21, // 게시물 댓글 수
    isLike: false, // 좋아요 눌렀는지 여부
  },
},
{
  users: {
    name: "MoonWalker",
    user_info: {
      userIcon:
        "https://velog.velcdn.com/images/yiseungyun/profile/5a36f8a9-e010-45c1-83d9-e6392ba5bfb8/image.jpg", // 게시물 작성 유저 아이콘
    },
  },
  p_blog: {
    pDName: "jungsonghun.blogs", // 블로그 도메인 주소
  },
  categorys: {
    cateName: "카테고리 이름",
  },

  boards: {
    boardId: "111252135222", //게시물 아이디
    boardTitle: "광卫 ㅇr님! 누구㈏★ ㉠ㅏ능 Next.js 프로젝트를 5분만에 앱으로", //게시물 제목
    boardContent:
      "Next.js로 프로젝트를 진행했는데, 데스크탑이 아닌 모바일 버전으로 사용할 것을 고려해 모바일 디자인으로만 했었다. 그런데 웹보다는 앱이 더 편할거 같아 앱으로 제작해야할까 고민하던 중 웹 앱으로 쉽게 발행할 수 있다고 해서 next-pwa를 이용해 웹 앱으로 만들어보았다.", // 게시물 내용
    boardDate: new Date(), //게시물 작성 날짜
    images: {
      imgPath:
        "https://velog.velcdn.com/images/yiseungyun/post/5a78fa60-9f8c-4bcf-8656-74ace0a2194a/image.png",
    },
  },

  config: {
    comment_count: 21, // 게시물 댓글 수
    isLike: false, // 좋아요 눌렀는지 여부
  },
},  {
  users: {
    name: "GalaxyKnight",
    user_info: {
      userIcon:
        "https://velog.velcdn.com/images/dus532/profile/bd073e62-314f-4986-86c7-8e88b1314ee8/image.png", // 게시물 작성 유저 아이콘
    },
  },
  categorys: {
    cateName: "카테고리 이름",
  },
  p_blog: {
    pDName: "jungsonghun.blogs", // 블로그 도메인 주소
  },

  boards: {
    boardId: "111252135222", //게시물 아이디
    boardTitle: "더 정확한 데이터를 향해, 소프트콘 뷰어십 제작기(9)", //게시물 제목
    boardContent:
      "뷰봇.인터넷 방송에서 시청률을 올리기 위해 시청자 수와 팔로우 수, 그외 것들을 올라가게 하는 봇.소프트콘 뷰어십은 데이터를 정확하게 파악하는 것이 가장 중요한 목적이기에 이러한 뷰봇을 탐지할 수 있는 시스템을 갖추는것이 중요한 목표중에 하나입니다.", // 게시물 내용
    boardDate: new Date(), //게시물 작성 날짜
    images: {
      imgPath:
        "https://velog.velcdn.com/images/dus532/post/2f405169-492b-49a8-9102-9d3b426c0873/image.png",
    },
  },

  config: {
    comment_count: 21, // 게시물 댓글 수
    isLike: false, // 좋아요 눌렀는지 여부
  },
},
{
  users: {
    name: "CrimsonWolf",
    user_info: {
      userIcon:
        "https://velog.velcdn.com/images/kingwang09/profile/87e472e7-ac62-4bbe-808a-9a19975a78c2/image.png", // 게시물 작성 유저 아이콘
    },
  },
  categorys: {
    cateName: "카테고리 이름",
  },
  p_blog: {
    pDName: "jungsonghun.blogs", // 블로그 도메인 주소
  },
  boards: {
    boardId: "111252135222", //게시물 아이디
    boardTitle: "역삼역 중간 공사장 철근 추락", //게시물 제목
    boardContent:
      "5/28(화) 점심시간(12:40)쯤에 역삼역 가는길 철근이 떨어져지나가던 행인 분이 맞고 쓰러져있는 것을 봤습니다.옆에 긴 철근이 떨어져있었고다치신 시민분은 조용히 일자로 누워계셨고다른 시민분이 가슴쪽을 지압하고 계셨는데", // 게시물 내용
    boardDate: new Date(), //게시물 작성 날짜
    images: {
      imgPath:
        "https://velog.velcdn.com/images/kingwang09/post/7ab09967-bd1f-4b2d-a3fe-c34c8224a0ba/image.png",
    },
  },

  config: {
    comment_count: 21, // 게시물 댓글 수
    isLike: false, // 좋아요 눌렀는지 여부
  },
},
{
  users: {
    name: "StarGazer",
    user_info: {
      userIcon:
        "https://velog.velcdn.com/images/ksk0605/profile/1cdf98c9-719b-4c9c-9e97-3074652c7410/image.jpg", // 게시물 작성 유저 아이콘
    },
  },
  p_blog: {
    pDName: "jungsonghun.blogs", // 블로그 도메인 주소
  },
  categorys: {
    cateName: "카테고리 이름",
  },
  boards: {
    boardId: "111252135222", //게시물 아이디
    boardTitle: "@Transactional(readOnly = true) 는 항상 정답일까?", //게시물 제목
    boardContent:
      "자바, 스프링, JPA 로 개발을 하다보면 필연적으로 @Transactional 키워드를 마주치게 됩니다. 그리고 읽기 전용의 기능에서는 readOnly 옵션을 true 로 사용하고는 합니다. 왜냐는 질문에 많은 사람들은 다음과 같이 이야기 하죠.", // 게시물 내용
    boardDate: new Date(), //게시물 작성 날짜
    images: {
      imgPath:
        "https://velog.velcdn.com/images/ksk0605/post/1daf6f80-4155-465a-a8dd-6d51cc48b5fd/image.png",
    },
  },

  config: {
    comment_count: 21, // 게시물 댓글 수
    isLike: false, // 좋아요 눌렀는지 여부
  },
},
{
  users: {
    name: "MoonWalker",
    user_info: {
      userIcon:
        "https://velog.velcdn.com/images/yiseungyun/profile/5a36f8a9-e010-45c1-83d9-e6392ba5bfb8/image.jpg", // 게시물 작성 유저 아이콘
    },
  },
  p_blog: {
    pDName: "jungsonghun.blogs", // 블로그 도메인 주소
  },
  categorys: {
    cateName: "카테고리 이름",
  },

  boards: {
    boardId: "111252135222", //게시물 아이디
    boardTitle: "광卫 ㅇr님! 누구㈏★ ㉠ㅏ능 Next.js 프로젝트를 5분만에 앱으로", //게시물 제목
    boardContent:
      "Next.js로 프로젝트를 진행했는데, 데스크탑이 아닌 모바일 버전으로 사용할 것을 고려해 모바일 디자인으로만 했었다. 그런데 웹보다는 앱이 더 편할거 같아 앱으로 제작해야할까 고민하던 중 웹 앱으로 쉽게 발행할 수 있다고 해서 next-pwa를 이용해 웹 앱으로 만들어보았다.", // 게시물 내용
    boardDate: new Date(), //게시물 작성 날짜
    images: {
      imgPath:
        "https://velog.velcdn.com/images/yiseungyun/post/5a78fa60-9f8c-4bcf-8656-74ace0a2194a/image.png",
    },
  },

  config: {
    comment_count: 21, // 게시물 댓글 수
    isLike: false, // 좋아요 눌렀는지 여부
  },
},]

const data2 = [
  {
    users: {
      name: "스탁벅스",
      user_info: {
        userIcon:
          "https://velog.velcdn.com/images/stakbucks/profile/14dc43f3-c27e-440e-9ec7-ee09a245796d/image.JPG",
        userInfo: "안녕하세요! 저는 프론트엔드 개발자 송훈입니다. 리액트를 사용한 웹 개발에 매료되어, 매일 성장하고 있습니다. 이 블로그에서는 최신 리액트 기술, 프로젝트 사례, 그리고 개발 노하우를 공유합니다. 여러분과 함께 배우고 발전하는 공간이 되길 바랍니다. 많은 관심과 응원 부탁드립니다!",
      },
    },
    p_blog: {
      pDName: "www.???.???",
    },
    config: {
      subscriberCount: 13,
      isSubscribed: true,
    },
  },
  {
    users: {
      name: "shalomeir",
      user_info: {
        userIcon:
          "https://images.velog.io/images/shalomeir/profile/c7127210-26e2-11e9-bea4-4381aa38bb86/SHALOMEIR-LOGOwbclean.png",
        userInfo: "반갑습니다! 저는 리액트 꿈나무 정송훈입니다. 프론트엔드 개발의 매력에 빠져 리액트를 공부하고 있으며, 이 블로그에서 그 여정을 공유하고자 합니다. 리액트 관련 강좌, 실무 팁, 그리고 유용한 리소스를 소개합니다. 개발자로서 함께 성장해 나가고 싶은 분들과 소통하는 공간이 되기를 희망합니다.",
      },
    },
    p_blog: {
      pDName: "www.???.???",
    },
    config: {
      subscriberCount: 13,
      isSubscribed: false,
    },
  },
  {
    users: {
      name: "우현민",
      user_info: {
        userIcon:
          "https://images.velog.io/images/woohm402/profile/c95b494d-a931-4e03-a2ca-6bb1b529c282/social.jpeg",
        userInfo: "안녕하세요! 리액트 프론트엔드 엔지니어 송훈입니다. 이 블로그는 저의 리액트 학습과 개발 경험을 나누는 공간입니다. 여러분께 실용적인 리액트 팁, 프로젝트 경험담, 그리고 최신 기술 정보를 제공하고자 합니다. 저와 같은 열정을 가진 개발자들과 함께 배우고 성장하는 커뮤니티를 만들고 싶습니다. 많은 관심 부탁드립니다!",
      },
    },
    p_blog: {
      pDName: "www.???.???",
    },
    config: {
      subscriberCount: 13,
      isSubscribed: false,
    },
  },
  {
    users: {
      name: "종미(미아)",
      user_info: {
        userIcon:
          "https://velog.velcdn.com/images/jongmee/profile/b35d4d56-d953-4460-a0f2-6ae2739efce8/social_profile.jpeg",
        userInfo: "반갑습니다! 저는 리액트 개발자 정송훈입니다. 프론트엔드 개발에 대한 열정으로 리액트를 공부하며, 배운 것들을 이 블로그에 기록하고 있습니다. 리액트 관련 튜토리얼, 문제 해결 방법, 그리고 실무에서의 경험을 공유합니다. 저와 함께 리액트를 탐구하고, 더 나은 개발자로 성장해 나가는 여정을 함께 하시길 바랍니다!",
      },
    },
    p_blog: {
      pDName: "www.???.???",
    },
    config: {
      subscriberCount: 13,
      isSubscribed: false,
    },
  },
];

const hottopic = ["css", "java", "react", "nodejs", "html"];

const TD = {
  p_blog: {
    pBanner:
      "https://velog.velcdn.com/images/songsunkook/post/ddfa8aae-f8f9-45f9-9d3e-1fd9a064dc24/image.webp", //블로그 배너 사진
    pName: "사랑아 수겸해 블로그", //블로그 이름
    pDname: "jungsonghun.blogs",
  },
  users: {
    name: "정송훈", //블로거 이름
    user_info: {
      userIcon:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhIVFRUXFRUVGBUWFRUWGBUaFRYYFxcVFRUaHSgiGBolGxUYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHx0rLS0tLS0tNy0rLSstNy0wLS0tLTAtLS4tOC0rLS0tLS0tLS0tLSstLS0tLS03Ky0tLf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xABFEAACAQIDBAYHBQYEBgMBAAABAgMAEQQhMQUSQXEGEyJRYYEyQlKRobHBB2Jy0fAjM4KSorIUU8LhNENjc4PxJLPSFf/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAkEQACAgEFAAIDAQEAAAAAAAAAAQIRAwQSITFBE1EiI2EyFP/aAAwDAQACEQMRAD8A0oZldQyMGU6EG4NPriMFinhbfj0Pppfsv3nwbxrrtn49Jk3kPgQfSU9zDhXA1Gllif8ADrYc6yL+lo0rUSaBrIXgo0qVAAo0qVAAqPEzqilmNgP1Yd5qU6Vmw/t36w/u1P7Me0R/zT3jgPfU4Rvl+CbJcHAxPWyDtkWVf8tdd0fePE+Wgq7SoClKW5glSIsfKUjuvpGyr4sxCr8TT8dGFMOFU3WFRI59ptEvzO858qdhyvWdY5tFh1MjH75B3R5LvHzWoMJvHekf05GLt4XFlX+FQo8q3L9WBv2Rla+TL/EWDTuHnTSKdwHM1gNQ21IUqVIZVeQiVV4GNz5qy/RjVo1TxZtLD4l196E/6autU5dISYBTk48qaBRj48qigBaivCm05daBjJFBBBFwciDoedUYmMLCNs0OUbk+ib5RufkeOlaBpuIjDAqwBU5EHjUoyrhiasdQFUsFKVYwuSSBvIx1dNM/vLofI8au0pRoE7OEApyMyMHjO6wGo456MOIpvGnnh5fOvUSipKmcSMmnaOp2TtRZwct1x6Sd33l71NaPCuDQsGDId1lzB+h7weIrsNlbQE0YYCxGTL7LC1x9R4VxNXpfje5dHT0+ffw+y1ajQpVgNIaFEVWx+IKKAou7HdRe895+6BcnlTSt0Juivi2Mr9SvoDOU/KIeJ1PhzrQAt4AZAd1u6osJhurQLe5uSzHVmPpMfG9TVOb8QJeiFRYmbcVmtewyHFicgo8ScqlNURtCL/Eortfqx1hRVZ3Zj2YwFUE2GbcwtSw4986fRDJLbFss4uApHFhTmzHr5z3533eRewH3UNSsc6qIuLlZpOoCF2Ocz23UGSAKgJPZz4ZsatrsWdvTxO74RRqP6nLX91aNSt0qT4RThkorntiOlPtkOZqRdgpbtSzt/wCTd/sC1ImwcPYXjLfieRv7mNZ9i+yz5f4VKFWG6PQer1ifhmlA929aoJNkTpcxTBx7Ey58hIn1U0fGn0xrL9lPHjOI90vzRx9ausKytoSyqF62CRN2RCWW0iWBzO8uYFu8CtGGVXAZGDKdCCCD7qJQairJRmmyRRnQB+VFTQqkmCiNaVEUIAGkdaRpcfOgCrtDClwCps6HeRu49x8CMjzp+DxIkQNax0KnVWGTKfEGphVCX9lNvepLZW+649FvMdnnarI/ktpHp2cmad3UKPdXpziBUfI/KpsBjjA4f1TlIPu39K3eNeWVRKMr8/lQtlUMkFOO1koScXZ3ANwLaHO9IVidGMVdTCTmma34qdB5HL3VuA615zNjeObidiE90UxsjhQSTYAXJPADU1TwCFiZmFiwsin1E4ebanyHClix1jiP1RZ38bHsp5kXPgPGrkjhQSxAAFyToBS6XHo+w1XjxLSErAhkIyLX3Y1Pc0nHktzUmC2e+I7Uu8sPqxZhpPvScVU8E48e6tjEYuGBVDskYyCrcDyVePKpxx13yVSy/RnRbELZzys3/TjvGnK47TeZHKtXC4WOIbsaKg7lAHy1rkNu/aNh4GKLG8jDvKoPPVh5gVzmL+1WfSPDxqcs2Zm1F9LCtMdPll0ih5Y+nrFCvFF+0HaDlj1qrYXsqLbzuKfF9o+PV7F42F7WMY4crVZ/w5CHzRPaKIryeL7Vpxbfw8TZcGZfzrf2H9peGmYJMjQMbZk7yebWBUcxVctJljzRJZIs7kihQRwwuCCDmCDcHzo3rK+CYRWZjtixud5bxSe2lhf8a6P5itOlTUmgObhkdX6qUWex3WF92Ue0nce9TmPEZ1PWvisIkq7ji41B0KngykZgjvrn49+NzDKd5tUfIdYnj94aEcjxpSimrRdjyeMsUVoUV1qkuE1FdaBpLrT9BiFRYuASIVOhHu7iPOplpMflQuOQ7ODonhQokaeVerZwgj0fOk3CkeI8ac505UARpMUZZBqh3uY9YeYvXdROGFxmCAQRxBzFcMkDSMI0NmY2B9kalvIU3EIm+ViLrEg3ABJIAxGr2v3j61z9VgWaaS7NmDI4Rt9HcrGBc2tc3J8gLnyFZOEx5nk344jLGjHduwSMsvrsxBLW4KAbangK53C4FZJIoyTZ3sTvNcgAsRe/G1vOvQIowqhVACgWAGQA4ACsWTCsD55ZZ8zmuCs8MkpvO+XCKMsqDxZsjIedh4VwHTXbwhkbD4VVjIsJJV9I/cDagd9egWaZzGhKquUkg1/7aH2u88B4mq+2Oh+Aks8sYjCADeVurFh7Z48zV+njT3SIyi2uDxHqWd91QzMTkAN4m+eg1ru+j/2aSSDfxTGMFezGPSvbIv7IB4a8q7fZUWGgBGDwztfV1UAN4mVyN7+G9X5Npsmc0LovF1IkUfi3e0OdrVsllfhGOFLlngfUlGlRvSW6nmrWPyr1/oSsWMwaNPDG7IzR3ZFJO5obkXva1Y3TDoO8sjT4QButF2XeA7RN99SToRnXX9D9jthMKkLkF82a2m8xJI8bXteic04hixtS5RXxvQrASCxw6r4oSh+Brz7pj0bwGDayTy9YRcRWR7a2LNkVHO5r1jas7xwySIu+6ozKvtEAkCvn60+KnY7rSSuWJABJub8OA4UYm36GZJLhG10U6YTYMhQd+ItnG3C9s1I9E8sq9g2Dt+DGJvQvc+shydea/WvMNg/ZtiJCrYgiFMjbVz4W0XzNa/S3ooMFHHisEXRoiN/tEkgt6XhnqNLGqs+HHkfHZGCmlfh6ZQri+hHTdMSBDOQs/A6LLy7m8PdXaVzMmOWOVSLoyUuUOSqW1MCsybpO6wO8jjVGGjD5EcQTV1KaRULGc3hpyd5XFpEO648dQy96sMx/tVgmptuYEm00Q/aoMx/mJqUPjxHjzqtDKHVWU3DAEHwNRnHjcjRjnfDHUVpVSxG14UJXf3mHqIC7eYW9vOoxhKXSJOSXZdFG/wBKw8R0g3RlC/cC5VQTw03j8KTY/EnhEvk7W+IrRHRZpeFT1OOL7OeFOb0vOmCrEp7Z8vpXoDkkT6nnRf6CmSannUijLyNPwCJlv35ZggkEciM6KJYADQAD3UanwmClnfchW5AG8xyRPxN3+AqPC5ZKKb4K/WFSrjVGVgO/dN7fMeddtiMbdFMRDNLuiPPUt63JRcnkar4PobHrNI8h9lSY0HIKd741tYDY+HgzihRDa1wBf+bWsOoUMkk/o14scl2Qm2HRIIV3pCDYE/zyyHUC5v4kgcnYfZC7weY9dIM95x2VP/Tj0UeOZ8aviJQSwA3iACeJC3sDyuffXM9J+m0OEbq1HWzeyD2UuPXP0oim+EWtqK5OpNA14NtHpfjZ3u07qL+hGSijkAbnzJrS6LdP8RhyFnLTRHXeN3W/FWOvI/CrHhdFfzxuj1bZA3DLDwR7p4JIN4DkG3h5CtIVS2fJFKBiIjvCRF7Xeq3IFuBBY1cFUsvXQj9KzBtJGJGGQSnQutljB+9JbM+C3NQbbxUCtbFTxpEBfqy2ch4766lRlkNb56WpmH6X7PIAXExgaAZqPAC4AqSiyLa9Low+JPpTovgkVx5lmz8gKhxryIhXEIssRBDtGrAgG4JaI3utuIN/CtSKQMAykEHQg3B5EVIRSuh7TyTF/ZviOsD4WWNojZkcsQVGoOQN7d47q9I2VipFP+HxBBlVQQ4uBMosC4B0YHUeINNwydRL1Q/dSbzIPYcZug8CO0Bws1HpFCTC0ifvIryxn7yg3B8CLqR3NSzfsVMrWNR5RrCkapbD2kmJhjmj0YXtfNTxU+INxV21c2UXF0xpgFcbt7Ff4KQgIWWW7xgZKr/8xSeAzDC3ea7OsDptgOtwrEC7RkSr/DfeA5qWqeHa5JS6YNtco4TFbRmm/eOd32Euq+fFvM0yHseh2e62X/uq0b3sRpU9d/HjjBfiilty7NvCTiQeI1Gtj3jwqzXPxSlTca/PwNbME4YXHmOIPcatMmSG0xqmm9M8voKiGnmKlxDdo/rgKrAiNSR6HkaiNP3gAxOgBovgEWNnYF55BEmWV2b2E7+Z0A7+VejYHBpCixxrZQPMniWPEnW9Z3RjZnUQgsP2jgM/mMl5AfXvrTlc3CgZkanQW4+PKseWe5nQw4qRIKVVt5gbAlj42Cr4k2v5Z0+J8yC28eNhYD9eJvVBocCp0ixzQYWaVfSSNiOdrCvAUYswZiSxckknMk8Sa+iMfhFmjeJxdXUq3Ii1eN7b6E4rCkWQyx7xs8YJytlvLqD7x41qwSSMmojLw7LZn2b7NgwyS7QxgWR1DXEyKi3GQT27d/HuryrasUSTSLBIZIgxCSEbpdeBI4VJ/wDx8QSB1Epva37N+Pl412WwPsxlkAfFSdUDn1ajee3idF+NXOaRmjjk3SOs+y6Jl2em9xZ2X8JP5g1V+0bpa+FAggNpXXeL5HcW9hb7xz91djhMMsSLGgsqqFUdwFeU/a9s91xCTeo6BAe5kJuDzBrNCpTNc7jjo5HDYefEuQiSTSsxyALsSRqadtPZM+GG5iIXiY6B1IuO8d/lXYfZx04g2aswlgZy73Eke7vAAegQxHZvnkdTUX2i9PF2lGiJhzGsb7wZmBc3FrGwso42BNbDC3ZR+zfb7YfErEzHqpSEK3yVj6LAcM8jzr22+XnXzz0WwTzYuBUBJEiMbcArAknuGVfQx0rLmSs2aduiltHCl1UqQGSRHW/3TmPNSw86sSpvArwII94tTqQqg0M8x+yna3VTy4NjkWdk8GS4YeYHwr1Kvn/F4s4XaMkqf8vEyN/Wbj3V77hpg6K65hlDA+BAI+dU63HUlJembFLtEhOtMkUEEHMEEHkdadehWG6ZaeQY7AmKR1F7xuyEe0Aeyw8Stj501GuLiuj6XQbmKY/5iK3mOwfgq1zuIhIuy+Y+or0WnnuxpmW9sqHXqaKUo1x4XHePzqsGGtV3xuZ7OXffPyFXDlKKXJoXy86fiPSP64VGdDzFPm1Pl8hUDOMq9sbD9biY0OhO8fER9s/ED31QFbXQ8Xxv/gkt/NHUZuossxK5I9AalQpVzzo9DEQDTvJ95vQEQtYXHG41z8aydt9IosOdz95L/lqRlfi59UfGuL2htnEzElpWQcEiJRR5jNvfVkcbYbj0ldxMrheZsT4knWno4PokHkb/ACryBoFJuVBPe3aPvNO/w6ACygHPMZHhxFT+ETbfZ6+aFea4HbuJgbsuZFy/ZyG/D1X1Hxru9jbVjxMe+lwRkyH0kPcfz41CUGhp+F+qm1dmRYmMxTLvIc/EEaEHgat0qrTB8nC477M8JukrNLGL3uSrD4iocF9mOG9aeR11K2CX89bV37oDa/A387EfWop2bJVyvnva2t3Dias+WX2RWGD8KuydjYfDAiCJY76kekbd7HM1qcKohbGyC7cXbO3M8T4Cn7+6Mt520PcPDuXlULvst2V0T0RTUvbMAHuGY99QY2ORgFjYJc9prXIHHdBy3j3nTxpIgzwrpTh3bH4lURmPXObKpY630FevfZ7iS+BiVgQ0YMbA3BG7pcHTIitbBbPjhvuLYsbsxzZzxLMcyaiwRtiZ19pIpPM7yH4RrRqJqcK+ihY9rs0qFKlXMJnI9PEzgbj+0X4K3+muYtXVdPUygb7zj3qPyrl1OXka7mjf60Y83+jN2hhiASul7sv1FUS44Vu1lbRwdruunEd3iK12Z8kb5L7VLMdf4fl/tUJqaXj/AA/L/aokyO9aXRvEBMXEeDb8f8y3H9SgedZgFJ7gXU2YMGU9xU3B94pSVqiUXTs9arA6WbbMCqkf72S9jqEUasR38APyrR2PtIYiJZBkSLMvssMmH68K88x2OM8ryni5C+CKbKPO1+ZrHCH5cnRu1wV1TMZkkkkk5knUknib0y9SIbHzPyqOtI+gU86CmU4nIUAJqn2btB8NKJUz4OvtrxHMZ2NQPqaFqVWDPWIJldVdTdWAYEcQRcfCn1zvQSa+GK+xI6jkbOB/XXRVjkqY0L8qN6V6FIYFUDTjmacBkOdI0Tp5/SkAKVAUaYgVRwrb2JlIzCRRxk/eLM9vIEfzUMXi2ZjDBYyZbzG5WIHRm727l177CrmAwqxJuLc6kk6sxzZmPeTnVOaaS2kW7JqNKhWJkTj+n0vagTwkf4Ko/uNc2Poa0+lWJ6zFOBmI1WPzzZrebAeVZij613dNHbjRjyu5DRTrZHnam09fR8/oa0FRVf6VJKcz5fKon+g+VPlOfu+VAAFG2vOgmtK+tAGhsjajYaQOO0jKBInfbRl+8PiMqyMNIpXsZqGYA+AJANdR0d6OicLLN+6sN1Abb9vWY+z4ceVXtt9D1a74XdjfjHpG/kPQPiBbw41RKcdxtwxklbOTXXzPyqI1Ni4nhfdmjaM3Niw7Jy9V9DUNTuy60xUDRoGgY+XU8z86Yaln1PM1JsvZ5xEoiUZZFz7Kcb+J0HOk3SEztehOF3MMGOsjNJ5HJf6QPfW+PpTY1AAAyAAAHLKjvAam3PKskuWS6QaFUZds4dWKmUEjULd938W6Du+dMG2Eb90ksvcUjbdPJ2sp99RFaNM0OHn9KzZdoSqL/wCEmOWimEnlbfrPj2k85CvIMICfQIKzHw33AVT+He50tyE5JGxjNoRxEB27R0QAs7ckFyedVmSebI3gj7hYzP5jKMcrnlVvZ+zoogerWxOrG7M3izm5bzNWzWeed9RI3ZBg8IkSbsahV1sOJOpJ4k95zqdKVBmAFyQB3k2HvrNy2Aqztv7UGGiLau3ZRfaYjLyGpNZ+1OlkMYtDaZ8x2T2F/E/HkL1xuLxLysZJW3m07go9lRwFbMGllJ3LopyZEuECMHdzNybknvJNyfMknzpKfkacD2aEmR99dhJLoyt2MIp/qnmKa3691OHonmPlTEVJOHIU0mnIjOVVQWY3AAtwz4+AoTRMh3XVlPcwtfkdDVe+N7b5JKLqx0WvvpkoNmAOZB99Pw/pe/5Vs9F9iriXcyE7iWG6DbfY3OZGdgBw76cnSCEdzpHa7FkVsNCyiy9Ulh3WUC1XKy12c0Fv8KFC2F4WJVfxI4BKHwsQfA51Wxe0pZWXDLG8UkgO85KEJGuUjoysbtmFFwM2vwrFKuWdFOlyTyRjFSFTnBG1mHCaQer+BOPecuBFRY3ojhXvuoYieMZ3f6PRPurZwuHWNFRBZVFgPz7zUxrBLPK+GR9OMl6Cn1MSf44gfirCs/FdD8SliHR14lUO8P4C+fka9EagKlHV5F6DX0eaTbAllO7BMHa9m/ZMgjPESMzZHwAJrp9j9GXijCnEuL5sIgqAniSxBZjzPkK6JIwosABxyFszqedGieqnLhCUfsyzsMcZ8Sf/ADMPlapItgYYA3hRyRYtIOtY82e5rQpy/Sqvlk/R0Q4eBY1Coioo0CgKByAqSkKVQbbHQTTJIwwswDA6ggEHyNSDShQnQjNGxIRnGGi/7TtGP5VO78KcdmtwxM4/iQ/3Ia0KVPcwpGeMDKNMVJ5pCf8AQK4Lb0UvXsmJcyFc0JAClWvZlQCwORB8RXptcz05wO9EswGcTdo/cfI+47reRrTpclTVleSNo5AjsqOdMFPPojzpldvwxEl+yaU+tNU5Gk5zP64UgE2tOvkfxUG4U71T+L6GmBY6Jwb0rOfUjsObn8lNO6WYi8iR8FUtzLXA+R99Wehx7Mn4l+VQdLobPG/BlKX8VO8B7ifdXD33rufDqba0vBio1s69A6JbIaCMs57Uu6xW2SZGy+JzzrzwC/G3j3eNen7A2oMRCj5Bt0b68Va2dx3cR4EV087aVGTTJNh2uSeqi3iolk3WZTZrBGcqp4E7tr916zr3nAwQQ9QhWVb9khyCIhbRyQTvcOOuWvjjAxWKYI2/cqjgENu+B7r1X2PGpeSRAFj7MSBQApERN2FuG8zAfhrHkkowNMi9gsWsq7y3yNmUizIw1VhwNTk1SxmEbe62KwlAsQcllX2Ht8G1HjpUuCxaygkXUg2ZG9JG7mH10IsawOPqIotGm05qFRGIUqVKkAKI/OgaK00AqAo0qAFQo0KADahaiDlSpsBVDi4BIjI2YZWU+YtU1ChOnYM8ojFkUHUFlPNTY/EUmFXtu4bqp5U4dY7jlJ2/mTVXEJY/ruFeixyuKZgkuRiHXkPnQJpA60hxqZEf+vlTzofxD60wHLyNEHsnmPkaQFrojiAsrIct9QV8WQm452PwNdFtPArNGUbLiDxUjQiuEiJ1BIIzBHAhhYiulwHSZNwdcCrjIlQWVvEWzHKuJrtLkWT5cZ09Jng4fHMq4Loy+/8AtmUoOCX7fgSR2RyvVjpXNGqqiqOtNrMBZo1HrBhmO4UMf0nQC0ILN7TAqq+NjmT4VzjOWJZjvMTck6n9d1T0+LPmmp5eEvBZsmLHFxx9nTdDMUrySQz/ALTrbFTJ280F9ztXyt2gOdd4qACwAAGQA0HgK8gw0zIQ6GzIwYc1ztyOY869Y2fi1miWRdGF7cQdCp8QQR5VLW46e5dFGGV8Ms1j9IImVRLEdyUPEgbMgh5FUq6+svaPLhatckAXJsO86e+sHam2cO/VxJKru08OSne0kVjcjIZKayY4u7SLW1Rp7PxnWAq43JVydL3t95T6yHgfLW9XDVTH4Lfs6HdlS+61vejDih4jkRmKrYfbcJUl3RGU7roWFwwyIHtC97H9BNXygNOlWa22VP7uOSTkm6P5nsLcr1nwYrF4l7IY4ogSGdQZGJHqRs1gT3ndIHjSUbCzo7VBNjI4/TkRfAsATyGtZ74CLrFjcyyFkdrvK5XsFAQUBA9fu4VfwuCij/dxon4VUfIU6S7Arja6H0UmblDJbyJUA0042dvQwxHjM6oPcm+flWlSotfQ6MWfEzIw65yq5G0MDuD4NIQ39orYRwwBGhAI4fCnUSKTdhVApUjSqICoUaVA2cR08g3Zo3GjoUPNDvD4E+6sXF+l7vkK7Hpzht/ClgM4mWTyGTf0sT5VxWLN293yFdvRT3Y6+jFmVSI6c3Hy+lM3aefoPpWsqHtp5Uh6PmPlRvl5flUaC9ICgmh5fUUAcqUfrcvqKaDSEGiuhptOByPlQA4MADc2/wDRrRwG0sXGpSBpApYt2Y9+xOtiVNhletjoVs5d1p2AJYlUuL2VbgkX0u1/dWrtnENcIrOnZZmZFDlQLAHdPC5ztnXMza1OfxpWaoYuLs5w7Px04HWCRu1f9o4C6a7t8vdRwuypMNLDJM0SoJVJ7ZuMmsfRA1FX8PHIQJG7StkBLI7lz6rRIum8LndP0Jq9s3Y6giWWOLrOCogVUv8A3N4k8qpnqnFc1X8JrHZo4mV5+JjizFtHkHidUU92pGttKLlI1ud1VUWvYCw7h+VCfFWbcRS8hzCDu9pj6q+J+NWMFsyzCSYh5OA9SPwQcT945nw0rDUp8vhF3CK0WCfEfvLxxexpJJ+M+ov3de+2lbUUYUBVAAAAAAsABwA4UbUasXHCEZ+M/wCIg5S/Jf8AatAVn4n/AImH/tzn/wCsfWtCpS6QkA0qNC1QGIUTSoGkAaS0qVNAKlSpHSmgIsRAJEZGzVlKnkwsfnXlkqFWKtqp3DzXs/SvV68y28m7jMQP+oG/nRW+ZNb9BL8mijOuLK2J9JuZ+ZocfL6UcT6Tcz8zTVOfl9K6plJGGXkPmPypsRzHOkdPL6ilD6S8xQBnRnJuX1FNpyety+oplIQ4jSmgG9hmTZR4k5Ae805jkP1xrS6NYffxUY4LeQ93ZGV/4iPdVeWW2DkShHc6O8wWHEUaINEULfkLE1zu0ZhKWZB1hduqjMbgOAhtISPYNzc6aeFbu1T+xe3s29+VV8fF1REsSrvdmIqcgwZgFNwMrE+69ecxSVuT7Z0ZLiizh4Ny8kpFwD4LGvsrflmdTyyqKHEPPJ1ce8i7m+ZSMyL2tGp7/aI4GwOtSw4LMNK3WNqBoq/hT6m58atbKzlmbuEae4Mx/vFEHFy5B9FzBYJIlsi2ubknNmPtMxzJqxRoVZYqFeiKFIUAZ8//ABUXhDN8XhFaNZzH/wCWPCBvjIv/AOa0RTl4CBRpCkaj4AKVGgKACRRGlNNE0AKlQo2osBV5/wBNYbYwn24kb+UsD8LV39cd9oEVpYH+7Kh/oYf6q16J1lRVlX4nM4n02/E3zoLr5fShifTb8R+dJNfL6V2mYxw09/zFKI9ocx86apyP640EOYoA/9k=", //블로거 프로필사진
      userInfo: "리액트 원툴 9년차 개발자. 리액트에살고 리액트에뒤진다", //블로거 소개
      userGit: "https://github.com/Bothpa", //블로거 깃허브url
      userX: null, //블로거 트위터url
      userInsta: "https://www.instagram.com/jung__taxi/", //블로거 인스타url
    },
  },
  category: [   
    { cateName: "리액트", postCount: 7 },
    { cateName: "넥스트", postCount: 10 },
    { cateName: "취업", postCount: 2 },
    { cateName: "운동", postCount: 7 },
    { cateName: "알바", postCount: 12 }, 
  ],//카테고리 이름
};

const postData: PostDataInterface = {
  boards: {
    boardTitle: "저 개발자 취준포기해야 할까요?", // 게시글 제목
    boardContent: 
`![image](https://velog.velcdn.com/images/whatever/post/449defa4-cf25-4f5c-813a-5082bb3cc471/image.png)

안녕하세요.

오늘은 얼어붙은 개발자 취업시장에서 왓에버가 자주 듣는 다음의 질문을 중심으로 이야기해보고자 합니다.
>저.. 개발자 취준 포기해야 할까요?
지금 N개월 째 이력서를 넣고 있는데 면접은 커녕 서류조차 붙지 못하고 있습니다.
금방 될 것 같지도 않고 지금이라도 빠르게 다른 길을 찾아야 하는게 아닌지 모르겠습니다.

물론, 이 질문은 커리어를 준비하고 시작하는 시점에서 매우 중요한 질문입니다.

따라서 이 글에서 명확한 해답을 제시하거나 속 시원한 답변을 기대하기는 어려울 수 있습니다.

하지만 위와 같은 고민을 하고 계시다면, 앞으로 시도해볼 만한 몇 가지를 나열해 보았습니다.

# 나는 지금 어떤 상태일까?

우선, 취업 시장을 떠나 나 자신에 대한 **메타인지**를 해야하는 순간입니다.

## 나는 개발을 좋아할까?

사실, 지금 우리가 존경하는 개발자 중 10년차에 가까운 경력을 가진 개발자들은 대부분 개발을 진심으로 좋아했던 사람들입니다.

그들이 개발자의 길을 시작한 이유는 높은 연봉과 좋은 복지를 위해서가 아니었습니다. 당시 개발자는 3D 직종으로 분류될 정도로 힘들고 야근이 많은 직업으로 여겨졌습니다.

하지만 오랜 시간 동안 개발을 해온 사람들을 보면, 그들은 정말로 개발 자체를 좋아해서 시작한 것이 아닐까요? 물론 시장이 호황기를 맞은 것도 운이 좋았겠지만, 운이 오기 전까지 개발의 재미를 느끼며 일할 수 있었던 것도 중요한 요소였을 것입니다.

현재 우리는 2-3년 전보다 더 어려워진 취업 시장에 있습니다. 그럼에도 불구하고, 나는 진심으로 내 직업을 개발자로 정하고 싶은지 고민해 보는 것이 좋습니다.

꼭 개발에 완전히 몰두하고 밤낮없이 일해야 한다는 의미는 아닙니다. 적어도 개발자로서의 커리어를 시작한다면, 내가 작성하는 코드가 세상과 만나는 것을 기대하고, 해결되지 않는 문제에 화를 내보며, 빌드 시간을 기다리는 동안 약속 시간에 늦더라도 "5분만 더!"라고 외칠 수 있는지 고민해 보시기 바랍니다.

## 내 실력은 어디에 위치하고 있을까?
우리는 부트캠프를 수료하거나 컴퓨터 공학을 전공했을 수 있습니다.

하지만 불행히도, 그것만으로 현업에서 요구하는 역량을 달성했다는 보장은 되지 않습니다.

따라서 개발자로서 채용의 자격이 있는지에 대해 고려해야 합니다.

조금 겁나고 어려운 일이지만, 현재 나의 위치를 명확히 파악하는 것이 매우 중요합니다.

### 첫 번째 방법

내가 가진 경험이 목표하는 채용 공고에 부합하는지 확인하는 방법이 있습니다.

많은 구직자들이 사이드 프로젝트를 2-3개 완료했고, 컴퓨터 과학 및 알고리즘 문제를 적절히 해결했다면, 취업 준비가 되었다고 생각할 수 있습니다. 그러나 실제로 현업에서 요구하는 역량을 충족시켰는지는 별개의 문제입니다.

희망하는 회사의 채용 공고의 필수 조건과 우대 사항을 확인하고, 그에 해당하는 경험을 충분히 쌓았는지 되돌아봐야 합니다.

예를 들어, "UI/UX에 대한 관심과 이해가 있으면 좋겠습니다." 라는 프론트엔드 채용 우대 사항이 있다고 합시다. 이 조건은 단순히 UI/UX의 다양한 컴포넌트를 아는 것만으로 충족되지 않습니다.

사업적으로 특정 버튼의 클릭률을 높이려는 목표가 있을 때, 프론트엔드 개발자는 기획자와 디자이너에게 실행 가능한 옵션을 제공할 수 있어야 합니다. 구체적으로는, 현재 회사의 디자인 및 개발 가이드라인을 준수하면서 클릭률을 높일 수 있는 애니메이션, 버튼의 노출 위치 변경, 햅틱 반응 등 다양한 옵션을 제안할 수 있어야 합니다.

이와 같이 채용공고에 쓰여진 조건이 요구하는 수준을 명확히 이해하는 것이 좋습니다.

\`\`\`
좋아요를 많이 눌러주신다면... 추후에 포지션별로 대표적인 조건을 상세히 푸는 컨텐츠도 준비해볼 수 있도록 하겠습니다.
\`\`\`

### 두 번째 방법

**최근에 취업에 성공했거나 채용을 담당하고 실무자**들로부터 현실적인 피드백을 받는 것이 필요합니다.
주변에 취업에 성공한 사람이나 현업 개발자가 있다면, 간단한 멘토링이나 피드백을 요청해 보세요. 단, 짧은 피드백으로 모든 지식과 능력을 확인할 수는 없습니다. 이것이 피드백의 목표가 되어서는 안 됩니다. **어떤 기술에 대해 어느 정도 깊이로** 알아야 하는지, 그리고 **내가 어느 정도 깊이로 알고 있는지**를 확인하는 것이 주요 목표입니다.

이는 이력서를 기반으로 한 기술 질문이나 컴퓨터 과학 기술 질문의 연이은 질문을 통해 깊이를 확인하는 것이 가능합니다. 몇 번의 꼬리 질문을 통해 어느 정도 깊이까지 지식을 학습해야 하는지 감을 잡을 수 있습니다.

## 지원조건과 우대사항

취업 준비생 중에는 지원 조건만 충족하면 된다고 생각하는 분들이 종종 있습니다. ~~(지원 조건을 모두 갖추지 못해도 지원은 가능합니다.)~~

우대 사항은 회사가 사용하는 솔루션과 기술일 확률이 높습니다. 이러한 경험을 쌓는 데는 단기간에 가능한 것이 아니기 때문에 회사에서는 가급적 이 경험이 있는 지원자를 선호합니다.

물론, 인터뷰에서 높은 학습 능력을 보일 경우 합격에는 문제가 없을 수 있습니다. 그러나 우리는 신입이고 저연차이기에 많은 회사가 채용 공고에서 우대 사항으로 제시하는 항목에 대한 준비를 추천드립니다. 다만, 특정 산업군(예: 게임, 보안)에서 사용하는 특정 프레임워크나 솔루션 경험은 중요도를 조금 낮춰도 됩니다.

# 마무리
이 글을 통해 개발자 취업을 준비하시는 모든 분들에게 유익한 정보가 되었기를 바랍니다.

현재 경제 불황과 맞물려 개발자 채용시장의 겨울이 계속되고 있습니다. 이 추운 겨울이 언제 끝날지는 알 수 없지만, 중요한 것은 이 시간을 어떻게 활용하느냐에 달려 있습니다. 이 겨울을 잘 보내고, 귀중한 시간으로 활용하여 좋은 기회가 왔을 때 더 나은 커리어를 만들어 가실 수 있기를 바랍니다.

그리고 많은 취업 준비생들이 이러한 상황에서 개발자 커리어를 계속 이어갈지, 혹은 다른 길을 선택할지 고민하고 계실 것입니다. 하지만 지금 이 순간, 개발자 취업 준비에 충분히 몰입하여 후회 없는 시간을 보내셨다면, 이후 어떤 길을 선택하시더라도 이 경험이 큰 도움이 될 것입니다.

조금 긴 글이었지만, 모든 내용을 통해 여러분이 조금 더 명확한 목표와 방향을 잡고, 자신에게 맞는 길을 찾아가실 수 있기를 바랍니다. 취업 준비 과정은 힘들고 지치는 과정이지만, 끝까지 노력하고 준비한다면 반드시 좋은 결과를 얻을 수 있을 것입니다.

읽어주셔서 감사합니다.

왓에버는 더 나은 커리어를 만들어 나가고 싶은 개발자 취업 준비생 및 이직 준비생을 위해 존재합니다. 여러분이 성공적인 커리어를 쌓을 수 있도록 다양한 서비스를 제공하고 있습니다.

1. #### 오늘 내용이 흥미로웠다면 무료로 왓캐스트 [[참가하기]](링크주소)

>6월 2일 오후 9시, 이 포스팅을 주제로 한 왓캐스트가 진행될 예정입니다. 훌륭한 왓에버의 멘토분을 게스트로 모셔서 커리어 준비에 대한 이야기를 나누는 시간을 가질 예정입니다.
이 기회를 통해 여러분은 발언권을 얻어 직접 질문을 하거나 의견을 나눌 수 있습니다.
질문을 남겨주시는 분들 중 추첨을 통해 기프트도 전달해 드릴 예정이니 많은 관심 부탁드립니다.
디스코드 이벤트에 참여하여 많은 관심과 참여 부탁드립니다. 함께 성장하고 더 나은 커리어를 만들어가는 기회가 되길 바랍니다.

2. 실무진이 보는 이력서 탈락 사유 받아보기 [[서류 검토 받아보기]](링크주소)
여러분의 이력서를 실무진의 시각에서 검토하여 탈락 사유를 받아볼 수 있습니다. 이를 통해 이력서의 문제점을 파악하고 개선할 수 있습니다.

3. 진짜 기술 꼬리 질문과 이력서 질문으로 나의 현주소를 알 수 있는 [[커리어 상담 받기]](링크주소)
탑티어 개발자와 모의인터뷰를 통해 실제 기술 인터뷰에서 나올 수 있는 꼬리 질문과 이력서 관련 질문을 받아보세요. 이를 통해 나의 현재 기술 수준과 준비 상태를 정확히 파악할 수 있습니다.

4. 빅테크/유니콘 출신 최고의 개발자에게 [[과외 받기]](링크주소)
빅테크 기업이나 유니콘 기업 출신의 최고의 개발자로부터 직접 과외를 받을 수 있습니다.
`, // 게시글 내용
    boardDate:new Date(), // 게시글 작성일
    cateName: "리액트 성장일기", // 게시글 카테고리
    comments: [
      {
        comment: "??", // 댓글 내용
      },
      {
        comment: "??", // 댓글 내용
      },
      {
        comment: "??", // 댓글 내용
      },
    ],

    likes: {
      likeCount: 213, // 좋아요 수
    },

    tags: {
      tag: "백엔드, 취준, 커리어, 프론트", // 태그
    },

    images: {
      imgPath: "", // 이미지 경로
    },
  },

  users: {
    name: "정송훈", // 유저 이름
  },
};

const data3= [
  {
    users : {
      name: "수겸", //블로거 이름
    },
  
    subscribe : {
      subDate: new Date('2019-03-04'), //블로거 구독시작 시간
    },
  
    p_blog : {
      pDName: "www.???.com", // 블로그 도메인 url
      pName: "형윤이와 연애 290일차 연애일기!", // 블로그 이름
      pBanner: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20230131%2Fourlarge%2Fpngtree-valentine-gift-box-bow-ribbon-love-heart-border-frame-png-image_6574976.png&type=a340", // 블로그 도메인 url
    },
  
    config: {
      subscriberCount: 10230121, // 구독자 수
    },
  },
  {
    users : {
      name: "jungmin", //블로거 이름
    },
  
    subscribe : {
      subDate: new Date(), //블로거 구독시작 시간
    },
  
    p_blog : {
      pDName: "www.???.com", // 블로그 도메인 url
      pName: "정민이의 언리얼엔진 여행기", // 블로그 이름
      pBanner: "https://velog.velcdn.com/images/habins226/post/d0e929b7-b38f-47f5-a83b-7df039ba8bb3/image.png", // 블로그 도메인 url
    },
  
    config: {
      subscriberCount: 11, // 구독자 수
    },
  },{
    users : {
      name: "sunghyuk", //블로거 이름
    },
  
    subscribe : {
      subDate: new Date(), //블로거 구독시작 시간
    },
  
    p_blog : {
      pDName: "www.???.com", // 블로그 도메인 url
      pName: "개발자 부업으로 한달 용돈벌이", // 블로그 이름
      pBanner: "https://velog.velcdn.com/images/habins226/post/c07d1ad6-1da6-47cf-a3c5-2375b7aab129/image.png", // 블로그 도메인 url
    },
  
    config: {
      subscriberCount: 2301, // 구독자 수
    },
  },{
    users : {
      name: "수혁수혁", //블로거 이름
    },
  
    subscribe : {
      subDate: new Date(), //블로거 구독시작 시간
    },
  
    p_blog : {
      pDName: "www.???.com", // 블로그 도메인 url
      pName: "러스트 720일 무방종 여행기", // 블로그 이름
      pBanner: "https://velog.velcdn.com/images/junho5336/post/c30bb17d-bd51-412e-9ebd-f9e5cd9e2e7f/image.jpg", // 블로그 도메인 url
    },
  
    config: {
      subscriberCount: 2022301, // 구독자 수
    },
  }
]

const testHistoryData = [{ text: "css" }, { text: "java" }, { text: "react" }];
export { data, dataShort, data2, hottopic, testHistoryData, TD, postData , data3, dataMidle};
