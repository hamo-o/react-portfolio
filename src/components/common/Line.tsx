import styled from "@emotion/styled";

import { KeyOfColor, colors } from "@/styles/theme";

const Line = styled.div<{
  width?: number | string;
  height?: number | string;
  color: KeyOfColor;
}>`
  width: ${({ width }) =>
    typeof width === "string" ? width : width ? `${width}px` : "100%"};
  height: ${({ height }) =>
    typeof height === "string" ? height : height ? `${height}px` : "auto"};
  background: ${({ color }) => colors[color]};

  flex-shrink: 0;
`;

export default Line;
