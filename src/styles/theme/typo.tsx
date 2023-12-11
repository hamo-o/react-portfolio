import { css } from "@emotion/react";

export const calcRem = (px: number) => `${px / 16}rem`;

export const typo = {
  title1: css`
    font-family: "NATS";
    font-style: normal;
    font-weight: 400;
    font-size: ${calcRem(80)};
    letter-spacing: "-1.6%";
    line-height: 0.75;
  `,
  subtitle1: css`
    font-family: "pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: ${calcRem(28)};
    letter-spacing: -0.4px;
    line-height: 140%;
  `,
  body1: css`
    font-family: "NATS";
    font-style: normal;
    font-weight: 400;
    font-size: ${calcRem(36)};
    line-height: "120%";
    letter-spacing: "-1.6%";
  `,
  body2: css`
    font-family: "pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: ${calcRem(20)};
    letter-spacing: -0.4px;
    line-height: 180%;
  `,
  body3: css`
    font-family: "NATS";
    font-style: normal;
    font-weight: 500;
    font-size: ${calcRem(24)};
    letter-spacing: -0.4px;
    line-height: 180%;
  `,
  number: css`
    font-family: "Zen Dots";
    font-style: normal;
    font-weight: 400;
    font-size: ${calcRem(20)};
  `,
  number2: css`
    font-family: "Zen Dots";
    font-style: normal;
    font-weight: 400;
    font-size: ${calcRem(12)};
  `,
  detail: css`
    font-family: "pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: ${calcRem(14)};
    letter-spacing: -0.4px;
  `,
} as const;
