import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useRef } from "react";
import useMouse from "@react-hook/mouse-position";

import { colors } from "@/styles/theme";
import Flex from "../common/Flex";

import Icon from "../icons/Icon";

const LandingPage = () => {
  const mouseRef = useRef<HTMLDivElement>(null);

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

  return (
    <LandingWrapper direction="column" justify="top" gap={68} ref={mouseRef}>
      <LandingBackground>
        <Eyes gap={16}>
          <Eye>
            <Icon
              icon="Eyebrow"
              fill="primary_black"
              rotate={30}
              style={css`
                position: absolute;
                top: -60px;
              `}
            />
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
              icon="Eyebrow"
              fill="primary_black"
              style={css`
                position: absolute;
                top: -60px;
              `}
            />
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
      </LandingBackground>
      <Icon icon="Star" fill="primary_purple" />
    </LandingWrapper>
  );
};

const LandingWrapper = styled(Flex)`
  width: 100%;
  height: 100vh;
`;

const LandingBackground = styled(Flex)`
  width: 100%;
  height: 80vh;
  background: ${colors.primary_yellow};
`;

const Eyes = styled(Flex)`
  padding-top: 12rem;
`;

const Eye = styled.div`
  width: 250px;
  height: 250px;

  position: relative;
`;

export default LandingPage;
