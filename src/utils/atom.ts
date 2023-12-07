import { atom } from "recoil";

export type CursorType = "default" | "project" | "navigation";

export const cursorState = atom<CursorType>({
  key: "cursor",
  default: "default",
});

export const pageState = atom<boolean>({
  key: "page",
  default: false,
});
