import { colors } from "@/styles/theme";

interface Position {
  x: number;
  y: number;
}

export const mouseVariants = ({ x, y }: Position) => {
  return {
    default: {
      opacity: 1,
      height: 32,
      width: 32,
      border: `2.5px solid ${colors.primary_white}`,
      x: x,
      y: y,
      transition: {
        type: "tween",
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
    navigation: {
      opacity: 0.5,
      backgroundColor: colors.primary_white,
      height: 80,
      width: 80,
      x: x,
      y: y,
    },
  };
};

export const spring = {
  transition: {
    type: "spring",
    stiffness: 500,
    damping: 28,
  },
};

export const floating = {
  initial: { y: 0 },
  animate: { y: [10, 0, -10, 0, 10] },
  transition: {
    repeat: Infinity,
    duration: 1.4,
    ease: [0, 0.05, 1.2, 1.4],
  },
};
