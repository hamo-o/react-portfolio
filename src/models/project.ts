export interface Project {
  id: number;
  name: string;
  date: string;
  stack: string[];
}

export const PROJECT = [
  {
    id: 1,
    name: "QFEED",
    date: "2023. 06. 23 ~ 2023. 09. 09",
    stack: [
      "NEXT.JS",
      "REACT-NATIVE",
      "TYPESCRIPT",
      "REACT-QUERY",
      "FRAMER-MOTION",
      "GITHUB ACTIONS",
    ],
  },
  {
    id: 2,
    name: "WALDREG",
    date: "2023. 01. 06 ~ ",
    stack: ["REACT", "TYPESCRIPT", "REACT-QUERY"],
  },
  {
    id: 3,
    name: "RECIPEASY",
    date: "2022. 10. 07 ~ 2023. 01. 28",
    stack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "GITHUB ACTIONS", "PWA"],
  },
  {
    id: 4,
    name: "WELCOME TO THE DMZ",
    date: "2022. 11. 04 ~ 2022. 12. 18",
    stack: ["REACT", "THREE JS"],
  },
  {
    id: 5,
    name: "GROUPING",
    date: "2022. 08. 02 ~ 2022. 08. 23",
    stack: ["DJANGO", "VANILA JS"],
  },
];
Object.freeze(PROJECT);
