import styled from "@emotion/styled";

const Spacing = styled.div<{
  width?: number | string;
  height?: number | string;
}>`
  width: ${({ width }) =>
    typeof width === "string" ? width : width ? `${width}px` : "100%"};
  height: ${({ height }) =>
    typeof height === "string" ? height : height ? `${height}px` : "auto"};
`;

export default Spacing;
