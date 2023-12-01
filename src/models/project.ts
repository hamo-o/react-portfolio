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
    date: "2022. 08. 02 ~ 2022. 08. 23",
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
    name: "RECIPEASY",
    date: "2022. 08. 02 ~ 2022. 08. 23",
    stack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "GITHUB ACTIONS", "PWA"],
  },
  {
    id: 3,
    name: "WALDREG",
    date: "2022. 08. 02 ~ 2022. 08. 23",
    stack: ["REACT", "TYPESCRIPT", "REACT-QUERY"],
  },
  {
    id: 4,
    name: "GROUPING",
    date: "2022. 08. 02 ~ 2022. 08. 23",
    stack: ["DJANGO", "VANILA JS"],
  },
];
Object.freeze(PROJECT);
