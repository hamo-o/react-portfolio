import { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";

import { cursorState } from "@/utils/atom";

import Flex from "../common/Flex";
import Text from "../common/Text";
import NextImage from "../common/NextImage";
import Icon from "../icons/Icon";

import { calcRem, colors } from "@/styles/theme";
import { Project } from "@/models/project";

const CardMedium = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: any;
}) => {
  const setCursorVariant = useSetRecoilState(cursorState);
  const [isOpen, setIsOpen] = useState(false);

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
      onMouseDown={() => setIsOpen(true)}
      onMouseUp={() => setIsOpen(false)}
    >
      <CardDetail
        layout
        onClick={onClick}
        style={{
          width: isOpen ? "94vw" : "auto",
          height: isOpen ? "90vh" : "64vh",
          padding: isOpen ? "6rem" : "0",
          position: isOpen ? "fixed" : "static",
          zIndex: isOpen ? "1000" : "0",
          gap: isOpen ? "6rem" : "0",
          background: isOpen ? colors.primary_purple : "none",
        }}
      >
        <Flex
          direction="column"
          width={isOpen ? "fit-content" : "100%"}
          justify={isOpen ? "start" : "space-between"}
          gap={isOpen ? 60 : 0}
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
          {isOpen && (
            <Flex direction="column" align="left" gap={8}>
              <Text typo="body1" color="primary_white"></Text>
            </Flex>
          )}
        </Flex>
        {isOpen && (
          <NextImage
            src={`/images/${project.thumnail}`}
            alt={project.name}
            borderRadius="2rem"
          />
        )}
      </CardDetail>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  height: 64vh;
  aspect-ratio: 8/9;

  padding: ${calcRem(56)};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${colors.primary_yellow};
  border-radius: 2rem;
  background: linear-gradient(
    to bottom,
    ${colors.primary_purple} 50%,
    ${colors.primary_white_30}
  );

  cursor: pointer;

  scroll-snap-align: center;
`;

const CardDetail = styled(motion.div)`
  display: flex;

  color: ${colors.primary_yellow};
  border-radius: 2rem;

  cursor: pointer;

  top: 5vh;
  left: 3vw;
`;

const CardContent = styled(Flex)``;

export default CardMedium;
