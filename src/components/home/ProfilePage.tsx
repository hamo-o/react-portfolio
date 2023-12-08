import styled from "@emotion/styled";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";
import useDebounce from "@/hooks/useDebounce";

import { colors } from "@/styles/theme";

import Skills from "../profile/Skills";
import AboutMe from "../profile/AboutMe";
import Experience from "../profile/Experience";
import { container, item } from "@/constants/animate";

const ProfilePage = () => {
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
    console.log(+scroll.toFixed(1));
  });

  const handleWheelScroll = (e: any) => {
    if (+scroll.toFixed(1) !== 1 && +scroll.toFixed(1)) {
      e.stopPropagation();
    }
  };

  return (
    <ProfileWrapper
      id="profile"
      ref={scrollRef}
      variants={container}
      onWheel={handleWheelScroll}
    >
      <ItemWrapper variants={item}>
        <AboutMe />
      </ItemWrapper>
      <ItemWrapper variants={item}>
        <Skills />
      </ItemWrapper>
      <ItemWrapper variants={item}>
        <Experience />
      </ItemWrapper>
      <AnimatePresence>
        {+scroll.toFixed(2) < 1 && <GradientBottom />}
      </AnimatePresence>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled(motion.div)`
  width: 100vw;

  padding: 6rem 8rem 0;

  flex-basis: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;

  position: relative;
  overflow-y: scroll;
  behavior: smooth;

  background: ${colors.primary_black};
`;

const ItemWrapper = styled(motion.div)``;

const GradientBottom = styled.div`
  width: 100%;
  height: 50%;

  z-index: 1;
  background: linear-gradient(
    to top,
    ${colors.primary_yellow} 20%,
    rgba(0, 0, 0, 0)
  );

  pointer-events: none;

  position: sticky;
  bottom: 0;
`;

export default ProfilePage;
