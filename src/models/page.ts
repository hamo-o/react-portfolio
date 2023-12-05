import { KeyOfColor } from "@/styles/theme";

export interface Page {
  id: number;
  name: string;
  background: KeyOfColor;
}

export const PAGE: Page[] = [
  {
    id: 0,
    name: "intro",
    background: "primary_black",
  },
  {
    id: 1,
    name: "profile",
    background: "primary_yellow",
  },
  {
    id: 2,
    name: "project",
    background: "primary_yellow",
  },
  {
    id: 3,
    name: "work",
    background: "primary_black",
  },
];
Object.freeze(PAGE);
