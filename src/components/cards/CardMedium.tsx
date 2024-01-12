import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useSetRecoilState } from 'recoil';

import { cursorState } from '@/utils/atom';

import Flex from '../common/Flex';
import Text from '../common/Text';
import NextImage from '../common/NextImage';
import Icon from '../icons/Icon';
import TagSmall from '../tags/TagSmall';

import { calcRem, colors, media } from '@/styles/theme';
import { Project } from '@/models/project';
import { useWindowSize } from '@/hooks/useWindowSize';
import { MOBILE } from '@/constants/size';

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
    setCursorVariant('project');
  };

  const projectLeave = () => {
    setCursorVariant('default');
  };

  const window = useWindowSize();

  return (
    <CardWrapper
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={projectEnter}
      onMouseLeave={projectLeave}
      layout
      style={{
        width: isOpen ? '100%' : 'auto',
        height: isOpen ? '100vh' : window.width >= MOBILE ? '64vh' : '32vh',
        padding: window.width < MOBILE ? '2rem' : '4rem',
        borderRadius: isOpen ? 0 : '2rem',

        position: isOpen ? 'fixed' : 'static',
        zIndex: isOpen ? '1000' : '0',

        flexDirection: window.width >= MOBILE ? 'row' : 'column',

        gap: isOpen ? (window.width >= MOBILE ? '2.5rem' : '1.5rem') : '0',
      }}
    >
      <Flex
        direction="column"
        width={isOpen && window.width >= MOBILE ? 'max-content' : '100%'}
        height="100%"
        justify={isOpen ? 'start' : 'space-between'}
        gap={isOpen || window.width < MOBILE ? 40 : 0}
      >
        <Flex
          direction="column"
          align="start"
          gap={window.width >= MOBILE ? 20 : 10}
          style={{ padding: isOpen ? '0 1rem' : '0' }}
        >
          <Flex justify="space-between">
            <Icon
              icon="Star"
              fill="primary_yellow"
              width={window.width >= MOBILE ? 60 : 35}
              height={window.width >= MOBILE ? 60 : 35}
            />
            {isOpen && window.width < MOBILE && (
              <Icon
                icon="Cancel"
                width={20}
                height={20}
                fill="primary_white_60"
                onClick={() => setIsOpen(false)}
              />
            )}
          </Flex>
          <Text
            typo="title1"
            style={{
              textAlign: 'left',
              fontSize: window.width < MOBILE ? '4rem' : '',
            }}
          >
            {project.name}
          </Text>
          <Text
            typo="number"
            style={{
              whiteSpace: window.width >= MOBILE ? 'nowrap' : 'normal',
            }}
          >
            {project.date}
          </Text>
        </Flex>
        <CardContent
          direction="column"
          align="start"
          justify={isOpen ? 'start' : 'end'}
          height="100%"
          gap={window.width >= MOBILE ? 40 : 20}
          style={{
            background: isOpen ? colors.primary_white_60 : 'none',
            padding: isOpen ? '2rem' : '0',
          }}
        >
          <Flex direction="column" align="start" gap={10}>
            {isOpen && (
              <Text typo="body2" color="primary_black">
                사용 기술
              </Text>
            )}
            <Tags
              direction={isOpen || window.width < MOBILE ? 'row' : 'column'}
              align="start"
              justify="start"
              gap={isOpen || window.width < MOBILE ? 8 : 20}
              style={{ flexWrap: 'wrap' }}
            >
              {project.stack.map((stack: string, idx: number) =>
                isOpen || window.width < MOBILE ? (
                  <TagSmall
                    key={idx}
                    content={stack}
                    color="primary_black_60"
                    background={
                      isOpen ? 'primary_purple_30' : 'primary_white_30'
                    }
                  />
                ) : (
                  <Text
                    key={idx}
                    typo={isOpen ? 'body3' : 'number'}
                    color="primary_black_60"
                  >
                    {stack}
                  </Text>
                )
              )}
            </Tags>
          </Flex>
          {isOpen && project.explanation.length ? (
            <Flex
              width={window.width < MOBILE ? '100%' : 'max-content'}
              direction="column"
              align="start"
              gap={10}
            >
              <Text typo="body2" color="primary_black">
                프로젝트 소개
              </Text>
              <Flex direction="column" align="start" gap={4}>
                {project.explanation.map((explanation: string, idx: number) => (
                  <Text key={idx} typo="body2" color="primary_black_60">
                    • {explanation}
                  </Text>
                ))}
              </Flex>
            </Flex>
          ) : (
            <></>
          )}
          {isOpen && project.role && (
            <Flex
              width={window.width >= MOBILE ? 'max-content' : '100%'}
              direction="column"
              align="start"
              gap={10}
            >
              <Text typo="body2" color="primary_black">
                수행 역할
              </Text>
              <Flex direction="column" align="start" gap={4}>
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
        <ImageWrapper>
          <NextImage
            src={project.thumnail}
            alt={project.name}
            borderRadius="2rem"
          />
        </ImageWrapper>
      )}
    </CardWrapper>
  );
};

const CardWrapper = styled(motion.button)`
  aspect-ratio: 8/9;

  padding: ${calcRem(56)};

  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: start;

  color: ${colors.primary_yellow};

  background: linear-gradient(
    to bottom,
    ${colors.primary_purple} 50%,
    ${colors.primary_white_30}
  );

  cursor: pointer;
  scroll-snap-align: center;

  backdrop-filter: blur(4px);

  ${media.mobile} {
    width: 100%;
    height: fit-content;
    min-height: 300px;
    aspect-ratio: auto;

    flex-shrink: 0;

    padding: 0.5rem;
    overflow-y: scroll;
  }
`;

const CardContent = styled(Flex)`
  max-height: max-content;
  border-radius: 2rem;

  ${media.mobile} {
    width: 100%;
  }
`;

const Tags = styled(Flex)``;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  ${media.mobile} {
    min-height: 50%;
  }
`;

export default CardMedium;
