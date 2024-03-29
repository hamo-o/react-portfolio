import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useSetRecoilState } from 'recoil';

import Flex from '../common/Flex';
import Text from '../common/Text';
import Icon from '../icons/Icon';

import { colors, media } from '@/styles/theme';
import { cursorState } from '@/utils/atom';

const WorkPage = () => {
  const router = useRouter();
  const setCursorVariant = useSetRecoilState(cursorState);

  const projectEnter = () => {
    setCursorVariant('project');
  };

  const projectLeave = () => {
    setCursorVariant('default');
  };

  return (
    <WorkWrapper
      id="work"
      as={'article'}
      width="100vw"
      height="100vh"
      direction="column"
      align="start"
      justify="start"
    >
      <Text
        as={'h1'}
        typo="body1"
        color="primary_white"
        style={{ width: '80vw', textDecorationLine: 'underline' }}
      >
        Work
      </Text>
      <Works height="100%">
        <IconWrapper
          onMouseEnter={projectEnter}
          onMouseLeave={projectLeave}
          onClick={() => router.push('/work/1')}
        >
          <Gradient />
          <Icon icon="Start" fill="primary_purple" />
        </IconWrapper>
      </Works>
    </WorkWrapper>
  );
};

const WorkWrapper = styled(Flex)`
  padding: 6rem;

  flex-basis: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;

  background: ${colors.primary_black};

  position: relative;

  ${media.mobile} {
    padding: 3rem 2rem 6rem;
  }
`;

const Works = styled(Flex)`
  padding-bottom: 6rem;
`;

const Gradient = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  background: linear-gradient(
    to top,
    ${colors.primary_black_60} 20%,
    rgba(0, 0, 0, 0)
  );
`;

const IconWrapper = styled(motion.div)`
  width: 300px;
  height: 300px;

  position: relative;
  cursor: pointer;
`;

export default WorkPage;
