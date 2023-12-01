import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import useRafState from "@/hooks/useRafState";

import { colors } from "@/styles/theme";
import Flex from "../common/Flex";

import Icon from "../icons/Icon";

const LandingPage = () => {
  const eyeRef = useRef<HTMLDivElement>(null);
  const [isfocused, setIsfocused] = useState<boolean>(true);
  const [position, setPosition] = useRafState({
    top: "auto",
    left: "auto",
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries, osv) => {
      if (entries[0].isIntersecting) {
        setIsfocused(true);
      } else {
        setIsfocused(false);
      }
    }, {});

    if (eyeRef.current) {
      observer.observe(eyeRef.current);
    }
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent): void => {
      if (!eyeRef.current || !isfocused) return;

      const { x: x1, y: y1 } = e;
      setPosition({ top: y1, left: x1 });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isfocused]);

  return (
    <LandingWrapper direction="column" justify="top" gap={68}>
      <LandingBackground>
        <Eyes gap={16} ref={eyeRef}>
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

                top: ${Math.floor(position.top * 0.08) - 2}px;
                left: ${Math.floor(position.left * 0.04) + 1}px;
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

                top: ${Math.floor(position.top * 0.08) - 2}px;
                left: ${Math.floor(position.left * 0.04) + 1}px;
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
