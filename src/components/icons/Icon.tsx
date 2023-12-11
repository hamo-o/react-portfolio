import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import * as icons from "@/components/icons/svgs";
import { KeyOfColor, TypeOfColor, colors } from "@/styles/theme";

interface Props {
  icon: keyof typeof icons;
  width?: number;
  height?: number;
  margin?: string;
  style?: any;

  rotate?: number;
  fill?: KeyOfColor;
  color?: KeyOfColor;

  onClick?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
  onTouchEnd?: any;
  selected?: boolean;
}

const Icon = ({
  icon,
  width,
  height,
  margin,
  style,

  rotate,
  fill,
  color,

  onClick,
  onMouseEnter,
  onMouseLeave,
  onTouchEnd,
  selected,
}: Props) => {
  const IconComponent = icons[icon];

  return (
    <IconWrapper
      onClick={onClick}
      onTouchEnd={onTouchEnd}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ width: width, height: height, margin: margin }}
      rotate={rotate}
      fill={fill}
      color={color}
      styles={style}
    >
      <IconComponent />
    </IconWrapper>
  );
};

const IconWrapper = styled.div<{
  width?: number;
  height?: number;
  rotate?: number;
  fill?: KeyOfColor;
  color?: KeyOfColor;
  styles?: any;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width && width}px;
  height: ${({ height }) => height && height}px;

  ${({ rotate }) =>
    rotate && {
      transform: `rotate(${rotate}deg)`,
    }}
  svg {
    width: ${({ width }) => width && width}px;
    height: ${({ height }) => height && height}px;

    path {
      stroke: ${({ color }) => (color ? colors[color] : "transparent")};
      fill: ${({ fill }) => (fill ? colors[fill] : "transparent")};
    }
  }

  ${({ styles }) => css`
    ${styles}
  `}
`;

export default Icon;
