import styled from '@emotion/styled';

import Flex from '../common/Flex';
import Text from '../common/Text';
import Line from '../common/Line';
import { colors, media } from '@/styles/theme';

const AboutMe = () => {
  return (
    <InfoWrapper as={'section'} align="start">
      <Text
        as={'h2'}
        typo="body1"
        color="primary_black"
        style={{ width: '55vw', textDecorationLine: 'underline' }}
      >
        About Me
      </Text>
      <Flex direction="column" align="start" gap={20}>
        <Text typo="body2" color="primary_black">
          2001년 11월 21일 출생
        </Text>

        <Line height={2} color="primary_black" />

        <Flex justify="space-between">
          <Text typo="body2" color="primary_black">
            충북여자고등학교 졸업
          </Text>
          <Text
            typo="body2"
            color="primary_black_60"
            style={{ whiteSpace: 'nowrap' }}
          >
            2017. 03 ~ 2020. 02
          </Text>
        </Flex>

        <Line height={2} color="primary_black" />

        <Flex justify="space-between">
          <Text typo="body2" color="primary_black">
            홍익대학교 시각디자인과 • 컴퓨터공학과 복수전공
          </Text>
          <Text
            typo="body2"
            color="primary_black_60"
            style={{ whiteSpace: 'nowrap' }}
          >
            2020. 03 ~
          </Text>
        </Flex>
      </Flex>
    </InfoWrapper>
  );
};

const InfoWrapper = styled(Flex)`
  padding: 4rem 6rem;

  position: relative;
  left: 2rem;

  border-radius: 4rem 4rem 0 0;

  z-index: 2;

  background: linear-gradient(
    to bottom,
    ${colors.primary_purple} 50%,
    ${colors.primary_purple_60}
  );

  ${media.mobile} {
    padding: 2rem 3rem;
    flex-direction: column;
    gap: 2rem;

    left: 1rem;
    border-radius: 3rem 3rem 0 0;
  }
`;

export default AboutMe;
