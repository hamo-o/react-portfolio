import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useRef, useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { cursorState } from "@/utils/atom";

import { KeyOfColor, colors, media } from "@/styles/theme";
import Flex from "../common/Flex";
import Icon from "../icons/Icon";
import Text from "../common/Text";
import { floating } from "@/constants/animate";
import Contact from "../contact/Contact";
import { useWindowSize } from "@/hooks/useWindowSize";
import { MOBILE } from "@/constants/size";

const LandingPage = ({ scrollRight }: { scrollRight: () => void }) => {
  const mouseRef = useRef<HTMLDivElement>(null);
  const window = useWindowSize();

  const mouse = useMouse(mouseRef, {
    enterDelay: 100,
    leaveDelay: 100,
  });
  let mouseXPosition: number = window.width >= MOBILE ? 0 : 600;
  let mouseYPosition: number = window.width >= MOBILE ? 0 : 500;

  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }

  const setCursorVariant = useSetRecoilState(cursorState);

  const projectEnter = () => {
    setCursorVariant("project");
  };

  const projectLeave = () => {
    setCursorVariant("default");
  };

  return (
    <LandingWrapper
      id="intro"
      direction="column"
      gap={window.width >= MOBILE ? 64 : 16}
      ref={mouseRef}
    >
      <Flex gap={window.width >= MOBILE ? 64 : 0}>
        <Eyes gap={window.width >= MOBILE ? 16 : 0}>
          <Eye>
            <Icon
              icon="Eye"
              width={window.width >= MOBILE ? 250 : 160}
              fill="primary_white"
              style={css`
                position: absolute;
              `}
            />
            <Icon
              icon="Eyeball"
              width={window.width >= MOBILE ? 169 : 110}
              fill="primary_black"
              style={css`
                position: absolute;
                transition: 10ms;

                top: ${Math.floor(mouseYPosition * 0.08) - 2}px;
                left: ${Math.floor(mouseXPosition * 0.04) + 1}px;
              `}
            />
            <Gradient />
          </Eye>
          <Eye>
            <Icon
              icon="Eye"
              width={window.width >= MOBILE ? 250 : 160}
              fill="primary_white"
              style={css`
                position: absolute;
              `}
            />
            <Icon
              icon="Eyeball"
              width={window.width >= MOBILE ? 169 : 110}
              fill="primary_black"
              style={css`
                position: absolute;
                transition: 10ms;

                top: ${Math.floor(mouseYPosition * 0.08) - 2}px;
                left: ${Math.floor(mouseXPosition * 0.04) + 1}px;
              `}
            />
            <Gradient />
          </Eye>
        </Eyes>
        {window.width >= MOBILE && (
          <IconWrapper
            initial={floating.initial}
            animate={floating.animate}
            transition={floating.transition}
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
            onClick={scrollRight}
          >
            <Gradient />
            <Icon
              icon="ArrowRight"
              width={window.width >= MOBILE ? 100 : 50}
              fill="primary_yellow"
            />
          </IconWrapper>
        )}
      </Flex>
      <Flex direction="column" height="20vh" justify="space-between">
        <Flex direction="column">
          <Text typo="body1" color="primary_white">
            Hello world!
          </Text>
          <Text typo="body1" color="primary_white">
            I&apos;m HAM
          </Text>
        </Flex>
        {/* <Text
          typo="body2"
          color="primary_white"
          style={{ textAlign: "center" }}
        >
          대충한줄소개 뭐라하지
        </Text> */}
        <Contact />
      </Flex>
    </LandingWrapper>
  );
};

const LandingWrapper = styled(Flex)`
  width: 100vw;
  height: 100vh;

  padding: 0 10rem 0;

  flex-basis: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;
  overflow-y: hidden;

  background: ${colors.primary_black};
`;

const Eyes = styled(Flex)`
  width: max-content;

  padding-left: 140px;
  ${media.mobile} {
    padding-left: 0;
    padding-bottom: 5rem;
  }
`;

const Eye = styled.div`
  width: 250px;
  height: 250px;

  ${media.mobile} {
    width: 160px;
    height: 160px;
  }

  position: relative;
`;

const Gradient = styled.div`
  width: 100%;
  height: 100%;

  background: linear-gradient(
    to top,
    ${colors.primary_black_60},
    rgba(0, 0, 0, 0)
  );

  position: absolute;
  bottom: 0;

  ${media.mobile} {
    bottom: -5rem;
  }
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;

  cursor: pointer;
`;

export default LandingPage;
