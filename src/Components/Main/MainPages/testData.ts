import Category from "./Category";
import PostDataInterface from "../../../Interface/PersonerBlog/PostDataInterface";

const data = [
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
];

const dataShort = [
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
  {
    users: {
      name: "Bothpa",
      user_info: {
        userIcon:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340", // 게시물 작성 유저 아이콘
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
      boardTitle: "이것은 게시물의 제목입니다", //게시물 제목
      boardContent:
        "안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다안녕하세요 정송훈입니다 안녕하세요 정송훈입니다", // 게시물 내용
      boardDate: new Date(), //게시물 작성 날짜
      images: {
        imgPath:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjlfMjA1%2FMDAxNDkzNDA5MzI2OTcx.FY0DTC0ij5XKuHwVSy5oJfrW4XZdADV8OSI8qgfb0Okg.mTRBLPl3Y5wnLiPdIO9zXudXjY2LOc7Hyd5xegwufksg.JPEG.wecho94%2F%25B9%25AB%25B9%25CE8.jpg&type=a340",
      },
    },

    config: {
      comment_count: 21, // 게시물 댓글 수
      isLike: true, // 좋아요 눌렀는지 여부
    },
  },
];

const data2 = [
  {
    users: {
      name: "정송훈1",
      user_info: {
        userIcon:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        userInfo: "프론트 엔지니어 리액트 꿈나무 정송훈 입니다.",
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
      name: "정송훈1",
      user_info: {
        userIcon:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        userInfo: "프론트 엔지니어 리액트 꿈나무 정송훈 입니다.",
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
      name: "정송훈1",
      user_info: {
        userIcon:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        userInfo: "프론트 엔지니어 리액트 꿈나무 정송훈 입니다.",
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
      name: "정송훈1",
      user_info: {
        userIcon:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        userInfo: "프론트 엔지니어 리액트 꿈나무 정송훈 입니다.",
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
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MDFfMjIz%2FMDAxNDkwOTg3NzM1MDM3.H2IzVNHISr390kXiDL1yFFBkDEacR0049aSiyacgIPAg.NnIlslo5QbjVtpQuN54pQ3Zg-i3FwxPUYqe-HQkX1k8g.JPEG.wecho94%2F%25BA%25A3%25B0%25C5%25B9%25E8%25B0%25E62.jpg&type=sc960_832", //블로그 배너 사진
    pName: "정송훈의 브이로그 블로그", //블로그 이름
    pDname: "jungsonghun.blogs",
  },
  users: {
    name: "정송훈", //블로거 이름
    user_info: {
      userIcon:
        "data:image/jpeg;base64,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", //블로거 프로필사진
      userInfo: "안녕하세요 저는 리액트를 공부하는 24살 정송훈 입니다.", //블로거 소개
      userGit: "https://github.com/Bothpa", //블로거 깃허브url
      userX: null, //블로거 트위터url
      userInsta: "https://www.instagram.com/jung__taxi/", //블로거 인스타url
    },
  },
  category: {
    cateName: ["리액트", "익스프레스", "스프링부트"], //카테고리 이름
  },
};

const postData: PostDataInterface = {
  boards: {
    boardTitle: "리액트 빌드하는법", // 게시글 제목
    boardContent: `# 안녕하세요 오늘은 리액트 독학 1일차에용
![](https://search.pstatic.net/sunny/?src=https%3A%2F%2Fus.123rf.com%2F450wm%2Ffokaspokas%2Ffokaspokas1806%2Ffokaspokas180603404%2F103211352-scientific-atom-symbol-logo-simple-icon-neon-style-light-decoration-icon-bright-electric-symbol.jpg%3Fver%3D6&type=sc960_832) 
>리액트란 js로 작성된 프론트엔드 라이브러리에요!
가장 대중화된 리액트이며
어쩌구저쩌꾸 호호하하 히히히힣
- 동해물과 백두산이 마르고 닳도록
## 하느님이 보우하사 우리 나라만세 
### 무궁화 삼천리 화려강산 
#### 대한사람 대한으로 길이 보전하세 호호하하하히히히힣 
1.아아아아아잉끼 
2.이이이이이이잉끼 
3.이이아아아아이이이끼
4.게임이나하고싶다야`, // 게시글 내용
    boardDate: new Date(), // 게시글 작성일
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
      tag: "#hashTag", // 태그
    },

    images: {
      imgPath: "", // 이미지 경로
    },
  },

  users: {
    name: "정송훈", // 유저 이름
  },
};

const testHistoryData = [{ text: "css" }, { text: "java" }, { text: "react" }];
export { data, dataShort, data2, hottopic, testHistoryData, TD, postData };
