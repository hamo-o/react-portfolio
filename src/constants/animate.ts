import { colors } from "@/styles/theme";

interface Position {
  x: number;
  y: number;
}

export const mouseVariants = ({ x, y }: Position) => {
  return {
    default: {
      opacity: 1,
      height: 20,
      width: 20,
      x: x,
      y: y,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 0.5,
      backgroundColor: colors.primary_yellow,
      height: 80,
      width: 80,
      x: x,
      y: y,
    },
  };
};

export const spring = {
  type: "spring",
  stiffness: 500,
  damping: 28,
};
