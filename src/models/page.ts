import { KeyOfColor } from "@/styles/theme";

export interface Page {
  id: number;
  name: string;
  background: KeyOfColor;
}

export const PAGE: Page[] = [
  {
    id: 0,
    name: "landing",
    background: "primary_black",
  },
  {
    id: 1,
    name: "profile",
    background: "primary_yellow",
  },
  {
    id: 2,
    name: "card",
    background: "primary_yellow",
  },
];
Object.freeze(PAGE);
