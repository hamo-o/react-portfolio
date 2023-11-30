import { css } from "@emotion/css";

export const calcRem = (px: number) => `${px / 16}rem`;

export const typo = {
  title1: css`
    font-family: "NATS", sans-serif;
    font-style: normal;
    font-size: ${calcRem(108)};
    letter-spacing: "-1.6%";
  `,
} as const;
