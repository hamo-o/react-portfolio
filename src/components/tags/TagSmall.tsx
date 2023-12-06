import styled from "@emotion/styled";
import Flex from "../common/Flex";
import Text from "../common/Text";
import { KeyOfColor, colors } from "@/styles/theme";

interface TagProp {
  color: KeyOfColor;
  background: KeyOfColor;
  content: string;
}

const TagSmall = (tag: TagProp) => {
  return (
    <Tag width="max-content" background={tag.background} color={tag.color}>
      <Text typo="number2">{tag.content}</Text>
    </Tag>
  );
};

const Tag = styled(Flex)<{ background: KeyOfColor; color: KeyOfColor }>`
  padding: 0.5rem;

  color: ${({ color }) => colors[color]};
  background: ${({ background }) => colors[background]};

  border-radius: 0.2rem;
`;

export default TagSmall;
