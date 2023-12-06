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
  });

  return (
    <ExperienceContainer height="100%" gap={32} align="start">
      <Text
        typo="body1"
        color="primary_black"
        style={{ width: "80%", textDecorationLine: "underline" }}
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
              오픈소스 컨트리뷰션 아카데미 Backend.AI 멘티
            </Text>
            <Text typo="body2" color="primary_black_60">
              의무교육은 무상으로 한다. 혼인과 가족생활은 개인의 존엄과 양성의
              평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다.
            </Text>
          </Flex>
        </Flex>

        <Line height={1.5} color="primary_black" />

        <Flex justify="space-between">
          <Flex direction="column" align="start" gap={8}>
            <Text typo="subtitle1" color="primary_black">
              외주연계형 IT 동아리 CMC 13기 • Web
            </Text>
            <Text typo="body2" color="primary_black_60">
              의무교육은 무상으로 한다. 혼인과 가족생활은 개인의 존엄과 양성의
              평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다.
              의무교육은 무상으로 한다. 혼인과 가족생활은 개인의 존엄과 양성의
              평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다.
            </Text>
          </Flex>
        </Flex>

        <Line height={1.5} color="primary_black" />

        <Flex justify="space-between">
          <Flex direction="column" align="start" gap={8}>
            <Text typo="subtitle1" color="primary_black">
              신촌 연합 IT 동아리 CEOS 16기 • FE
            </Text>
            <Text typo="body2" color="primary_black_60">
              의무교육은 무상으로 한다. 혼인과 가족생활은 개인의 존엄과 양성의
              평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다.
            </Text>
          </Flex>
        </Flex>

        <Line height={1.5} color="primary_black" />

        <Flex justify="space-between">
          <Flex direction="column" align="start" gap={8}>
            <Text typo="subtitle1" color="primary_black">
              전국 연합 IT 동아리 피로그래밍 17기
            </Text>
            <Text typo="body2" color="primary_black_60">
              의무교육은 무상으로 한다. 혼인과 가족생활은 개인의 존엄과 양성의
              평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다.
              법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이
              정하는 바에 의하여 퇴직하게 할 수 있다.
            </Text>
          </Flex>
        </Flex>

        <AnimatePresence>{scroll > 0 && <GradientTop />}</AnimatePresence>
        <AnimatePresence>
          {scroll < 1 && (
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
        </AnimatePresence>
      </ExperienceContent>
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled(Flex)`
  padding-bottom: 6rem;
  overflow-y: hidden;

  position: relative;
`;

const ExperienceContent = styled(Flex)`
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
    ${colors.primary_yellow} 30%,
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
