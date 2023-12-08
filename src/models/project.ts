export interface Project {
  id: number;
  name: string;
  date: string;
  stack: string[];
  thumnail: string;
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
    thumnail: "qfeed_main.png",
  },
  {
    id: 2,
    name: "WALDREG",
    date: "2023. 01. 06 ~ ",
    stack: ["REACT", "TYPESCRIPT", "REACT-QUERY", "DOCKER"],
    thumnail: "waldreg_main.png",
  },
  {
    id: 3,
    name: "RECIPEASY",
    date: "2022. 10. 07 ~ 2023. 01. 28",
    stack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "GITHUB ACTIONS", "PWA"],
    thumnail: "recipeasy_main.png",
  },
  {
    id: 4,
    name: "WELCOME TO THE DMZ",
    date: "2022. 11. 04 ~ 2022. 12. 18",
    stack: ["REACT", "THREE JS"],
    thumnail: "dmz_main.png",
  },
  {
    id: 5,
    name: "GROUPING",
    date: "2022. 08. 02 ~ 2022. 08. 23",
    stack: ["DJANGO", "VANILA JS"],
    thumnail: "grouping_main.png",
  },
];
Object.freeze(PROJECT);
