import { colors } from "./colors";
import { typo } from "./typo";

export const media = {
  mobile: "@media (max-width: 991px)",
};

export interface TypeOfTheme {
  typo: TypeOfTypo;
  colors: TypeOfColor;
}

export const theme: TypeOfTheme = {
  typo,
  colors,
};

export type TypeOfColor = typeof colors;
export type KeyOfColor = keyof typeof colors;

export type KeyofTheme = keyof typeof theme;

export type TypeOfTypo = typeof typo;
export type KeyOfTypo = keyof typeof typo;
