import styled from "@emotion/styled";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

import { colors, media } from "@/styles/theme";

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
    if (
      !(
        (+scroll.toFixed(1) === 1 && e.nativeEvent.deltaY > 100) ||
        (!+scroll.toFixed(1) && e.nativeEvent.deltaY < -100)
      )
    ) {
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
      {/* <AnimatePresence>
        {+scroll.toFixed(2) < 0.9 && (
          <GradientBottom
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence> */}
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled(motion.div)`
  width: 100vw;

  padding: 6rem 8rem 0;

  flex-basis: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;

  overflow-y: scroll;
  scroll-behavior: smooth;

  background: ${colors.primary_black};

  ${media.mobile} {
    padding: 3rem 2rem 0;
  }
`;

const ItemWrapper = styled(motion.div)``;

export default ProfilePage;
