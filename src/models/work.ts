import { StaticImageData } from "next/image";
import one_1 from "../../public/images/ppt/1-1.png";
import one_2 from "../../public/images/ppt/1-2.png";
import one_3 from "../../public/images/ppt/1-3.png";
import one_4 from "../../public/images/ppt/1-4.png";
import one_5 from "../../public/images/ppt/1-5.png";

import two_1 from "../../public/images/ppt/2-1.png";
import two_2 from "../../public/images/ppt/2-2.png";
import two_3 from "../../public/images/ppt/2-3.png";

import three_1 from "../../public/images/ppt/3-1.png";
import three_2 from "../../public/images/ppt/3-2.png";

import four_1 from "../../public/images/ppt/4-1.png";

export interface Work {
  id: number;
  name: string;
  date: string;
  link: string | undefined;
  detail?: (string | StaticImageData)[];
}

export const WORK = [
  {
    id: 1,
    name: "Selenium IDE로 웹 UI 테스트 하기",
    date: "2023. 07. 19 ~ 2023. 08. 18",
    link: "https://www.figma.com/proto/BrKduaL6lHN2qNWgEoowm9/E2E-%ED%85%8C%EC%8A%A4%ED%8A%B8(UI-%ED%85%8C%EC%8A%A4%ED%8A%B8)-%EC%99%80-Selenium-IDE?page-id=0%3A1&type=design&node-id=1-54&viewport=558%2C7178%2C0.26&t=CkCpWTXzcQMQgmZg-1&scaling=contain&mode=design",
    detail: [one_1, one_2, one_3, one_4, one_5],
  },
  {
    id: 2,
    name: "Proxy Debugging",
    date: "2023. 07. 05 ~ 2023. 07. 12",
    link: "https://midi-spade-4a7.notion.site/Charles-with-naver-90781a83819b4dffb535e9a9f193d1fd?pvs=4",
    detail: [two_1, two_2, two_3],
  },
  {
    id: 3,
    name: "Postman으로 Test Script 작성하기",
    date: "2022. 07. 13 ~ 2023. 07. 19",
    link: "https://midi-spade-4a7.notion.site/Postman-09c01d3ae8514a5194e587c8fde47baa?pvs=4",
    detail: [three_1, three_2],
  },
  {
    id: 4,
    name: "웹개편",
    date: "2022. 09. 13 ~ 2023. 11. 22",
    link: undefined,
    detail: [four_1],
  },
];
Object.freeze(WORK);
