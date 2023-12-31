import { KeyOfColor, TypeOfColor } from "./theme";

const hexToRGBA = (color: string, opacity: number) => {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity * 0.01})`;
};

export const colors = {
  primary_yellow: "#FFB547",
  primary_yellow_30: hexToRGBA("#FFA621", 30),
  primary_yellow_60: hexToRGBA("#FFA621", 60),

  primary_purple: "#9847FF",
  primary_purple_15: hexToRGBA("#9847FF", 15),
  primary_purple_30: hexToRGBA("#9847FF", 30),
  primary_purple_60: hexToRGBA("#9847FF", 60),

  primary_white: "#FFFCF8",
  primary_white_30: hexToRGBA("#FFFCF8", 30),
  primary_white_60: hexToRGBA("#FFFCF8", 60),

  primary_black: "#353535",
  primary_black_60: hexToRGBA("#353535", 60),
} as const;
