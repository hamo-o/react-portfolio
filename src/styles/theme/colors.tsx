import { KeyOfColor, TypeOfColor } from "./theme";

const hexToRGBA = (color: string, opacity: number) => {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity * 0.01})`;
};

export const colors = {
  primary_yellow: "#FFB547",
  primary_purple: "#9847FF",
  primary_white: "#FFFCF8",
  primary_black: "#444444",
} as const;
