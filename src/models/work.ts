export interface Work {
  id: number;
  name: string;
  date: string;
  link: string;
  detail?: string[];
}

export const WORK = [
  {
    id: 1,
    name: "Selenium IDE로 웹 UI 테스트 하기",
    date: "2023. 07. 23 ~",
    link: "https://www.figma.com/proto/BrKduaL6lHN2qNWgEoowm9/E2E-%ED%85%8C%EC%8A%A4%ED%8A%B8(UI-%ED%85%8C%EC%8A%A4%ED%8A%B8)-%EC%99%80-Selenium-IDE?page-id=0%3A1&type=design&node-id=1-54&viewport=558%2C7178%2C0.26&t=CkCpWTXzcQMQgmZg-1&scaling=contain&mode=design",
    detail: [
      "ppt/1-1.png",
      "ppt/1-2.png",
      "ppt/1-3.png",
      "ppt/1-4.png",
      "ppt/1-5.png",
    ],
  },
  {
    id: 2,
    name: "Proxy Debugging",
    date: "2023. 07. 06 ~ ",
    link: "https://midi-spade-4a7.notion.site/Charles-with-naver-90781a83819b4dffb535e9a9f193d1fd?pvs=4",
  },
  {
    id: 3,
    name: "웹개편",
    date: "2022. 10. 07 ~ 2023. 01. 28",
    link: "",
  },
];
Object.freeze(WORK);
