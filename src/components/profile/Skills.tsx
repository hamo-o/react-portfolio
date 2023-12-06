import Flex from "../common/Flex";
import Text from "../common/Text";
import Icon from "../icons/Icon";
import TagSmall from "../tags/TagSmall";

const Skills = () => {
  return (
    <Flex align="start">
      <Text
        typo="body1"
        color="primary_black"
        style={{ width: "80vw", textDecorationLine: "underline" }}
      >
        Skills
      </Text>
      <Flex gap={8} justify="start">
        <TagSmall
          content="C"
          background="primary_black"
          color="primary_white"
        />
        <TagSmall
          content="C++"
          background="primary_black"
          color="primary_white"
        />
        <TagSmall
          content="Python"
          background="primary_black"
          color="primary_white"
        />
        <TagSmall
          content="JS"
          background="primary_black"
          color="primary_white"
        />
        <TagSmall
          content="TS"
          background="primary_black"
          color="primary_white"
        />

        <Icon icon="Star" width={20} fill="primary_black_60" />

        <TagSmall
          content="React"
          background="primary_black"
          color="primary_white"
        />
        <TagSmall
          content="Next.js"
          background="primary_black"
          color="primary_white"
        />
        <TagSmall
          content="Three.js"
          background="primary_black"
          color="primary_white"
        />
        <TagSmall
          content="Django"
          background="primary_black"
          color="primary_white"
        />

        <Icon icon="Star" width={20} fill="primary_black_60" />

        <TagSmall
          content="Git"
          background="primary_black"
          color="primary_white"
        />
        <TagSmall
          content="Figma"
          background="primary_black"
          color="primary_white"
        />
        <TagSmall
          content="Adobe"
          background="primary_black"
          color="primary_white"
        />
        <TagSmall
          content="Slack"
          background="primary_black"
          color="primary_white"
        />
      </Flex>
    </Flex>
  );
};

export default Skills;
