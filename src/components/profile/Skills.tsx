import styled from "@emotion/styled";

import Flex from "../common/Flex";
import Text from "../common/Text";
import Icon from "../icons/Icon";
import TagSmall from "../tags/TagSmall";

import { colors } from "@/styles/theme";

const Skills = () => {
  return (
    <InfoWrapper align="start">
      <Text
        typo="body1"
        color="primary_black"
        style={{ width: "55vw", textDecorationLine: "underline" }}
      >
        Skills
      </Text>
      <Flex gap={8} justify="start">
        <TagSmall
          content="C"
          background="primary_black"
          color="primary_purple"
        />
        <TagSmall
          content="C++"
          background="primary_black"
          color="primary_purple"
        />
        <TagSmall
          content="Python"
          background="primary_black"
          color="primary_purple"
        />
        <TagSmall
          content="JS"
          background="primary_black"
          color="primary_purple"
        />
        <TagSmall
          content="TS"
          background="primary_black"
          color="primary_purple"
        />

        <Icon icon="Star" width={20} fill="primary_black_60" />

        <TagSmall
          content="React"
          background="primary_black"
          color="primary_purple"
        />
        <TagSmall
          content="Next.js"
          background="primary_black"
          color="primary_purple"
        />
        <TagSmall
          content="Three.js"
          background="primary_black"
          color="primary_purple"
        />
        <TagSmall
          content="Django"
          background="primary_black"
          color="primary_purple"
        />

        <Icon icon="Star" width={20} fill="primary_black_60" />

        <TagSmall
          content="Git"
          background="primary_black"
          color="primary_purple"
        />
        <TagSmall
          content="Figma"
          background="primary_black"
          color="primary_purple"
        />
        <TagSmall
          content="Adobe"
          background="primary_black"
          color="primary_purple"
        />
        <TagSmall
          content="Slack"
          background="primary_black"
          color="primary_purple"
        />
      </Flex>
    </InfoWrapper>
  );
};

const InfoWrapper = styled(Flex)`
  padding: 4rem 6rem 8rem;
  border-radius: 4rem 4rem 0 0;

  position: relative;
  top: -4rem;

  background: ${colors.primary_purple};
`;

export default Skills;
