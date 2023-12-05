import styled from "@emotion/styled";
import { motion } from "framer-motion";
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
    setCursorVariant("project");
  };

  const projectLeave = () => {
    setCursorVariant("default");
  };

  return (
    <CardWrapper
      onClick={onClick}
      onMouseEnter={projectEnter}
      onMouseLeave={projectLeave}
    >
      <Flex direction="column" align="left" gap={20}>
        <Icon icon="Star" fill="primary_yellow" width={65} />
        <Text typo="title1">{project.name}</Text>
        <Text typo="number" style={{ whiteSpace: "nowrap" }}>
          {project.date}
        </Text>
      </Flex>

      <CardContent direction="column" align="left" gap={18}>
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

const CardWrapper = styled(motion.div)`
  height: 64vh;
  aspect-ratio: 800 / 900;

  padding: ${calcRem(56)};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${colors.primary_yellow};
  border-radius: 2rem;
  background: ${colors.primary_purple};

  cursor: pointer;

  scroll-snap-align: center;
`;

const CardContent = styled(Flex)``;

export default CardMedium;
