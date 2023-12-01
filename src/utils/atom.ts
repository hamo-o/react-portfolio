import { atom } from "recoil";

export type CursorType = "default" | "project";

export const cursorState = atom<CursorType>({
  key: "cursor",
  default: "default",
});
