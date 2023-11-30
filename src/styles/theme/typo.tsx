import { css } from "@emotion/react";

export const calcRem = (px: number) => `${px / 16}rem`;

export const typo = {
  title1: css`
    font-family: "NATS";
    font-style: normal;
    font-weight: 400;
    font-size: ${calcRem(108)};
    letter-spacing: "-1.6%";
  `,
} as const;
