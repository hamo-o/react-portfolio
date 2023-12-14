import styled from "@emotion/styled";

import Flex from "../common/Flex";
import Text from "../common/Text";
import Line from "../common/Line";

import { colors, media } from "@/styles/theme";

const Experience = () => {
  return (
    <ExperienceContainer align="start" justify="space-between">
      <ExperienceContent min-width="max-content" height="100%" align="start">
        <Text
          typo="body1"
          color="primary_black"
          style={{ width: "55vw", textDecorationLine: "underline" }}
        >
          Experience
        </Text>
        <Flex direction="column" gap={28}>
          <Flex justify="space-between">
            <Flex direction="column" align="start" gap={8}>
              <Text typo="subtitle1" color="primary_black">
                외주연계형 IT 동아리 CMC 13기 • Web
              </Text>
              <Text typo="body2" color="primary_black_60">
                • React Native 스터디
                <br />
                • Framer-motion 세미나 발표
                <br />• QFEED 팀프로젝트 진행
              </Text>
            </Flex>
          </Flex>

          <Line height={2} color="primary_black" />

          <Flex justify="space-between">
            <Flex direction="column" align="start" gap={8}>
              <Text typo="subtitle1" color="primary_black">
                오픈소스 컨트리뷰션 아카데미 Backend.AI 멘티
              </Text>

              <Text typo="body2" color="primary_black_60">
                • 웹 컴포넌트, GraphQL에 대한 이해
                <br />
                • Backend.AI 아키텍처 이해
                <br /> • 이슈를 해결해 보며 컨트리뷰션
              </Text>
            </Flex>
          </Flex>

          <Line height={2} color="primary_black" />

          <Flex justify="space-between">
            <Flex direction="column" align="start" gap={8}>
              <Text typo="subtitle1" color="primary_black">
                신촌 연합 IT 동아리 CEOS 16기 • FE
              </Text>
              <Text typo="body2" color="primary_black_60">
                • Vanila JS, React, Next.js 스터디
                <br />• RECIPEASY 팀프로젝트 진행
              </Text>
            </Flex>
          </Flex>

          <Line height={2} color="primary_black" />

          <Flex justify="space-between">
            <Flex direction="column" align="start" gap={8}>
              <Text typo="subtitle1" color="primary_black">
                42 SEOUL
              </Text>
              <Text typo="body2" color="primary_black_60">
                • 개인 및 팀 알고리즘 과제
              </Text>
            </Flex>
          </Flex>

          <Line height={2} color="primary_black" />

          <Flex justify="space-between">
            <Flex direction="column" align="start" gap={8}>
              <Text typo="subtitle1" color="primary_black">
                전국 연합 IT 동아리 피로그래밍 17기
              </Text>
              <Text typo="body2" color="primary_black_60">
                • 웹 기초 스터디
                <br />• GROUPING 팀프로젝트 진행
                <br />• 18기 운영진
              </Text>
            </Flex>
          </Flex>

          <Line height={2} color="primary_black" />

          <Flex justify="space-between">
            <Flex direction="column" align="start" gap={8}>
              <Text typo="subtitle1" color="primary_black">
                홍대방송국 51기 기술부
              </Text>
              <Text typo="body2" color="primary_black_60">
                • 오디오방송, 비디오방송 진행
                <br />• 2022, 2023 디자인부장
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </ExperienceContent>
      <Background1 />
      <Background2 />
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled(Flex)`
  position: relative;
`;

const ExperienceContent = styled(Flex)`
  padding: 4rem 6rem 10rem;
  overflow: hidden;

  left: -2rem;
  z-index: 4;

  border-radius: 4rem 4rem 0 0;
  background: linear-gradient(
    to bottom,
    ${colors.primary_yellow},
    ${colors.primary_yellow_60}
  );

  ${media.mobile} {
    padding: 2rem 3rem 8rem;
    flex-direction: column;
    gap: 2rem;
  }
`;

const Background1 = styled.div`
  width: 100%;
  height: 100%;

  background: linear-gradient(
    to bottom,
    ${colors.primary_purple_60},
    rgba(0, 0, 0, 0)
  );

  position: absolute;
  left: 2rem;
  top: 0;

  ${media.mobile} {
    left: 1rem;
  }
`;

const Background2 = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    ${colors.primary_white_30},
    rgba(0, 0, 0, 0)
  );

  position: absolute;
  left: -1rem;
  top: 0;
`;

const GradientTop = styled.div`
  width: 100%;
  height: 1rem;

  z-index: 1;
  background: linear-gradient(
    to bottom,
    ${colors.primary_yellow} 30%,
    rgba(0, 0, 0, 0)
  );

  pointer-events: none;

  position: absolute;
  top: 0;
`;

export default Experience;
