import { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";

import { cursorState } from "@/utils/atom";

import Flex from "../common/Flex";
import Text from "../common/Text";
import NextImage from "../common/NextImage";
import Icon from "../icons/Icon";
import TagSmall from "../tags/TagSmall";

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
    setIsOpen(false);
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
          padding: isOpen ? "4rem" : "0",
          position: isOpen ? "fixed" : "static",
          zIndex: isOpen ? "1000" : "0",
          gap: isOpen ? "2.5rem" : "0",
          background: isOpen ? colors.primary_purple : "none",
        }}
      >
        <Flex
          direction="column"
          width={isOpen ? "max-content" : "100%"}
          height="100%"
          justify={isOpen ? "start" : "space-between"}
          gap={isOpen ? 40 : 0}
        >
          <Flex
            direction="column"
            align="left"
            gap={20}
            style={{ padding: isOpen ? "0 1rem" : "0" }}
          >
            <Icon icon="Star" fill="primary_yellow" width={60} height={60} />
            <Text typo="title1">{project.name}</Text>
            <Text typo="number" style={{ whiteSpace: "nowrap" }}>
              {project.date}
            </Text>
          </Flex>
          <CardContent
            direction="column"
            align="start"
            justify={isOpen ? "start" : "end"}
            height="100%"
            gap={40}
            style={{
              background: isOpen ? colors.primary_white_60 : "none",
              padding: isOpen ? "2rem" : "0",
            }}
          >
            <Flex direction="column" align="left" gap={10}>
              {isOpen && (
                <Text typo="body2" color="primary_black">
                  사용 기술
                </Text>
              )}
              <Flex
                direction={isOpen ? "row" : "column"}
                align="start"
                justify="start"
                gap={isOpen ? 8 : 20}
                style={{ flexWrap: "wrap" }}
              >
                {project.stack.map((stack: string, idx: number) =>
                  isOpen ? (
                    <TagSmall
                      key={idx}
                      content={stack}
                      color="primary_black_60"
                      background="primary_purple_30"
                    />
                  ) : (
                    <Text
                      key={idx}
                      typo={isOpen ? "body3" : "number"}
                      color="primary_black_60"
                    >
                      {stack}
                    </Text>
                  )
                )}
              </Flex>
            </Flex>
            {isOpen && project.explanation.length ? (
              <Flex
                width="max-content"
                direction="column"
                align="left"
                gap={10}
              >
                <Text typo="body2" color="primary_black">
                  프로젝트 소개
                </Text>
                <Flex direction="column" align="left" gap={4}>
                  {project.explanation.map(
                    (explanation: string, idx: number) => (
                      <Text key={idx} typo="body2" color="primary_black_60">
                        • {explanation}
                      </Text>
                    )
                  )}
                </Flex>
              </Flex>
            ) : (
              <></>
            )}
            {isOpen && project.role && (
              <Flex
                width="max-content"
                direction="column"
                align="left"
                gap={10}
              >
                <Text typo="body2" color="primary_black">
                  수행 역할
                </Text>
                <Flex direction="column" align="left" gap={4}>
                  {project.role.map((role: string, idx: number) => (
                    <Text key={idx} typo="body2" color="primary_black_60">
                      • {role}
                    </Text>
                  ))}
                </Flex>
              </Flex>
            )}
          </CardContent>
        </Flex>
        {isOpen && (
          <NextImage
            src={project.thumnail}
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

const CardContent = styled(Flex)`
  max-height: max-content;
  border-radius: 2rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 2rem;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export default CardMedium;
