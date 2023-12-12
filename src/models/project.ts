import { StaticImageData } from "next/image";
import qfeed from "../../public/images/qfeed_main.png";
import recipeasy from "../../public/images/recipeasy_main.png";
import waldreg from "../../public/images/waldreg_main.png";
import grouping from "../../public/images/grouping_main.png";
import dmz from "../../public/images/dmz_main.png";

export interface Project {
  id: number;
  name: string;
  date: string;
  stack: string[];
  thumnail: string | StaticImageData;
  role?: string[];
  explanation: string[];
}

export const PROJECT = [
  {
    id: 1,
    name: "QFEED",
    date: "2023. 06. 23 ~",
    stack: [
      "NEXT.JS",
      "REACT-NATIVE",
      "TYPESCRIPT",
      "REACT-QUERY",
      "FRAMER-MOTION",
      "GITHUB ACTIONS",
    ],
    explanation: ["질문을 기반으로 소통하는 익명 SNS"],
    thumnail: qfeed,
    role: [
      "카카오 로그인, 회원가입, 질문 생성 타이머 로직, 검색, 마이페이지",
      "Presigned URL 활용 사진 업로드",
      "RN 영역 구현(스플래시, 뒤로가기, 로딩 등), 앱 배포",
      "CI/CD 구축 및 브랜치 관리",
    ],
  },
  {
    id: 2,
    name: "WALDREG",
    date: "2023. 01. 06 ~ ",
    stack: ["REACT", "TYPESCRIPT", "REACT-QUERY", "DOCKER"],
    explanation: ["동아리를 위한 그룹웨어"],
    thumnail: waldreg,
    role: [
      "역할 설정, 유저 관리, 상벌점 페이지",
      "네비게이션",
      "도커 이미지 제작",
      "API 문서 논의 및 FE 리딩",
    ],
  },
  {
    id: 3,
    name: "RECIPEASY",
    date: "2022. 10. 07 ~ 2023. 01. 28",
    stack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "GITHUB ACTIONS", "PWA"],
    explanation: ["1인가구를 위한 숏폼 레시피 서비스"],
    thumnail: recipeasy,
    role: [
      "카카오 로그인",
      "닉네임 설정, 마이페이지, 레시피 상세페이지, 검색",
      "PWA 배포",
    ],
  },
  {
    id: 4,
    name: "WELCOME TO THE DMZ",
    date: "2022. 11. 04 ~ 2022. 12. 18",
    stack: ["REACT", "THREE JS"],
    explanation: [],
    thumnail: dmz,
  },
  {
    id: 5,
    name: "GROUPING",
    date: "2022. 08. 02 ~ 2022. 08. 23",
    stack: ["DJANGO", "VANILA JS"],
    explanation: [
      "카카오톡 날짜 투표가 불편하다면?",
      "그룹을 만들고, 그룹 내에서 약속을 만들어 약속 시간을 쉽게 투표할 수 있는 서비스",
      "약속이 끝나고 기록 업로드 및 공유 가능",
    ],
    thumnail: grouping,
    role: [
      "그룹 페이지, 약속 페이지, 메인페이지",
      "시간표 로직",
      "tagify 적용",
    ],
  },
];
Object.freeze(PROJECT);
