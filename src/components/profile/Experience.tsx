import styled from "@emotion/styled";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";

import Flex from "../common/Flex";
import Text from "../common/Text";
import Line from "../common/Line";
import Icon from "../icons/Icon";
import TagSmall from "../tags/TagSmall";

import { colors } from "@/styles/theme";
import { floating } from "@/constants/animate";

const Experience = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const [scroll, setScroll] = useState<number>(0);

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(latest);
    console.log(+scroll.toFixed(2));
  });

  return (
    <ExperienceContainer align="start">
      <Text
        typo="body1"
        color="primary_black"
        style={{ width: "55vw", textDecorationLine: "underline" }}
      >
        Experience
      </Text>
      <ExperienceContent
        height="100%"
        direction="column"
        justify="start"
        gap={20}
        ref={scrollRef}
        onWheel={(e) => e.stopPropagation()}
      >
        <Flex justify="space-between">
          <Flex direction="column" align="start" gap={8}>
            <Text typo="subtitle1" color="primary_black">
              외주연계형 IT 동아리 CMC 13기 • Web
            </Text>
            <Text typo="body2" color="primary_black_60">
              • React Native 스터디
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
              전국 연합 IT 동아리 피로그래밍 17기
            </Text>
            <Text typo="body2" color="primary_black_60">
              • 웹 기초 스터디
              <br />• GROUPING 팀프로젝트 진행
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

        {/* <AnimatePresence>{scroll > 0 && <GradientTop />}</AnimatePresence>
        <AnimatePresence>
          {+scroll.toFixed(2) < 1 && (
            <>
              <GradientBottom />
              <IconWrapper
                initial={floating.initial}
                animate={floating.animate}
                transition={floating.transition}
              >
                <Icon
                  icon="ArrowRight"
                  width={40}
                  fill="primary_black_60"
                  rotate={90}
                />
              </IconWrapper>
            </>
          )}
        </AnimatePresence> */}
      </ExperienceContent>
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled(Flex)`
  height: 100%;

  padding: 4rem 6rem;
  overflow: hidden;

  position: relative;
  top: -8rem;

  border-radius: 4rem 4rem 0 0;
  background: ${colors.primary_yellow};
`;

const ExperienceContent = styled(Flex)`
  height: max-content;
  overflow-y: scroll;
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

const GradientBottom = styled.div`
  width: 100%;
  height: 50%;

  z-index: 1;
  background: linear-gradient(
    to top,
    ${colors.primary_yellow} 40%,
    rgba(0, 0, 0, 0)
  );

  pointer-events: none;

  position: absolute;
  bottom: 0;
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;

  position: absolute;
  bottom: 2rem;

  z-index: 2;
`;

export default Experience;
