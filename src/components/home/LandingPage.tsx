import styled from "@emotion/styled";
import Link from "next/link";
import { css } from "@emotion/react";
import { useRef, useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { cursorState } from "@/utils/atom";

import { KeyOfColor, colors } from "@/styles/theme";
import Flex from "../common/Flex";
import Icon from "../icons/Icon";
import Text from "../common/Text";
import { floating } from "@/constants/animate";

const LandingPage = ({ scrollRight }: { scrollRight: () => void }) => {
  const mouseRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState<KeyOfColor>("primary_white_60");

  const mouse = useMouse(mouseRef, {
    enterDelay: 100,
    leaveDelay: 100,
  });
  let mouseXPosition: number = 0;
  let mouseYPosition: number = 0;

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
    <LandingWrapper id="intro" direction="column" gap={64} ref={mouseRef}>
      <Flex gap={64}>
        <Eyes gap={16}>
          <Eye>
            <Icon
              icon="Eye"
              fill="primary_white"
              style={css`
                position: absolute;
              `}
            />
            <Icon
              icon="Eyeball"
              fill="primary_black"
              style={css`
                position: absolute;
                transition: 10ms;

                top: ${Math.floor(mouseYPosition * 0.08) - 2}px;
                left: ${Math.floor(mouseXPosition * 0.04) + 1}px;
              `}
            />
          </Eye>
          <Eye>
            <Icon
              icon="Eye"
              fill="primary_white"
              style={css`
                position: absolute;
              `}
            />
            <Icon
              icon="Eyeball"
              fill="primary_black"
              style={css`
                position: absolute;
                transition: 10ms;

                top: ${Math.floor(mouseYPosition * 0.08) - 2}px;
                left: ${Math.floor(mouseXPosition * 0.04) + 1}px;
              `}
            />
          </Eye>
        </Eyes>
        <IconWrapper
          initial={floating.initial}
          animate={floating.animate}
          transition={floating.transition}
          onMouseEnter={projectEnter}
          onMouseLeave={projectLeave}
          onClick={scrollRight}
        >
          <Icon icon="ArrowRight" width={100} fill="primary_yellow" />
        </IconWrapper>
      </Flex>
      <Flex width="max-content" direction="column" gap={20}>
        <Flex direction="column">
          <Text typo="body1" color="primary_white">
            Hello world!
          </Text>
          <Text typo="body1" color="primary_white">
            I&apos;m HAM
          </Text>
        </Flex>
        <Text
          typo="body2"
          color="primary_white"
          style={{ textAlign: "center" }}
        >
          대충한줄소개 뭐라하지
        </Text>
        <Flex justify="space-around">
          <IconWrapper>
            <Link href="https://github.com/hamo-o">
              <Icon icon="Github" width={40} height={40} fill={color} />
            </Link>
          </IconWrapper>
          <IconWrapper>
            <Link href="https://github.com/hamo-o">
              <Icon icon="Mail" width={44} height={44} color={color} />
            </Link>
          </IconWrapper>
        </Flex>
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
`;

const Eye = styled.div`
  width: 250px;
  height: 250px;

  position: relative;
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`;

export default LandingPage;
