import styled from "@emotion/styled";
import { colors } from "@/styles/theme";
import { Project } from "@/models/project";

import { useSetRecoilState } from "recoil";
import { cursorState } from "@/utils/atom";

import Flex from "../common/Flex";
import Text from "../common/Text";
import Icon from "../icons/Icon";

import { calcRem } from "@/styles/theme";

const CardMedium = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: any;
}) => {
  const setCursorVariant = useSetRecoilState(cursorState);

  const projectEnter = () => {
    console.log("enter!");
    setCursorVariant("project");
  };

  const projectLeave = () => {
    console.log("leave!");
    setCursorVariant("default");
  };

  return (
    <CardWrapper
      direction="column"
      align="left"
      justify="space-between"
      onClick={onClick}
      onMouseEnter={projectEnter}
      onMouseLeave={projectLeave}
    >
      <Flex direction="column" align="left">
        <Icon icon="Star" fill="primary_yellow" width={65} />
        <Text typo="title1">{project.name}</Text>
      </Flex>

      <CardContent direction="column" align="left" gap={18}>
        <Text typo="number" style={{ whiteSpace: "nowrap" }}>
          {project.date}
        </Text>
        <Flex direction="column" align="left" gap={8}>
          {project.stack.map((stack: string, idx: number) => (
            <Text key={idx} typo="body1">
              {stack}
            </Text>
          ))}
        </Flex>
      </CardContent>
    </CardWrapper>
  );
};

const CardWrapper = styled(Flex)`
  width: max-content;
  aspect-ratio: 675 / 900;
  padding: ${calcRem(56)};

  border: 8px solid ${colors.primary_yellow};
  color: ${colors.primary_yellow};
  background: ${colors.primary_purple};
`;

const CardContent = styled(Flex)``;

export default CardMedium;
