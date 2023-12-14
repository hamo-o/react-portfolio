import styled from "@emotion/styled";

import Flex from "../common/Flex";
import Text from "../common/Text";
import Icon from "../icons/Icon";
import TagSmall from "../tags/TagSmall";

import { colors, media } from "@/styles/theme";

const Skills = () => {
  return (
    <InfoWrapper align="start" justify="space-between">
      <InfoContent align="start">
        <Text
          typo="body1"
          color="primary_black"
          style={{ width: "55vw", textDecorationLine: "underline" }}
        >
          Skills
        </Text>
        <Flex
          min-width="max-content"
          justify="start"
          gap={8}
          style={{ flexWrap: "wrap" }}
        >
          <TagSmall
            content="C"
            background="primary_black"
            color="primary_white_60"
          />
          <TagSmall
            content="C++"
            background="primary_black"
            color="primary_white_60"
          />
          <TagSmall
            content="Python"
            background="primary_black"
            color="primary_white_60"
          />
          <TagSmall
            content="JS"
            background="primary_black"
            color="primary_white_60"
          />
          <TagSmall
            content="TS"
            background="primary_black"
            color="primary_white_60"
          />

          <Icon icon="Star" width={20} height={20} fill="primary_black_60" />

          <TagSmall
            content="React"
            background="primary_black"
            color="primary_white_60"
          />
          <TagSmall
            content="Next.js"
            background="primary_black"
            color="primary_white_60"
          />
          <TagSmall
            content="Three.js"
            background="primary_black"
            color="primary_white_60"
          />
          <TagSmall
            content="Django"
            background="primary_black"
            color="primary_white_60"
          />

          <Icon icon="Star" width={20} height={20} fill="primary_black_60" />

          <TagSmall
            content="Git"
            background="primary_black"
            color="primary_white_60"
          />
          <TagSmall
            content="Figma"
            background="primary_black"
            color="primary_white_60"
          />
          <TagSmall
            content="Adobe"
            background="primary_black"
            color="primary_white_60"
          />
        </Flex>
      </InfoContent>
      <Background />
    </InfoWrapper>
  );
};

const InfoWrapper = styled(Flex)`
  position: relative;
  left: -1rem;
`;

const InfoContent = styled(Flex)`
  padding: 4rem 6rem;

  border-radius: 4rem 4rem 0 0;

  z-index: 3;
  background: linear-gradient(
    to bottom,
    ${colors.primary_white_60} 50%,
    ${colors.primary_white_30}
  );

  ${media.mobile} {
    padding: 2rem 3rem;
    flex-direction: column;
    gap: 2rem;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;

  background: ${colors.primary_purple_60};

  position: absolute;
  left: 3rem;
  top: 0;

  ${media.mobile} {
    left: 2rem;
  }
`;

export default Skills;
