import { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

import useDebounce from "@/hooks/useDebounce";

import Flex from "../common/Flex";
import Icon from "../icons/Icon";

import CardMedium from "@/components/cards/CardMedium";
import { PROJECT, Project } from "@/models/project";
import { colors } from "@/styles/theme";
import { floating } from "@/constants/animate";

type DirectionType = "left" | "right";

const CardPage = () => {
  const router = useRouter();
  const cardScrollRef = useRef<HTMLDivElement>(null);
  const { scrollX, scrollXProgress } = useScroll({ container: cardScrollRef });
  const [scroll, setScroll] = useState<number>(0);
  const debounceScroll = useDebounce(scroll, 200);

  const [deltaY, setDeltaY] = useState<number>(0);
  const debounceDeltaY = useDebounce(deltaY, 200);

  const [showLeft, setShowLeft] = useState<boolean>(false);
  const [showRight, setShowRight] = useState<boolean>(true);

  const handleClickNavigate = (id: number) => {
    // router.push(`/project/${id}`);
  };

  const handleWheelScroll = (e: any) => {
    e.stopPropagation();
    setDeltaY(e.nativeEvent.deltaY);
  };

  const handleClickScrollRight = () => {
    cardScrollRef.current?.scrollTo({
      top: 0,
      left: scrollX.get() + 820,
      behavior: "smooth",
    });
  };

  const handleClickScrollLeft = () => {
    cardScrollRef.current?.scrollTo({
      top: 0,
      left: scrollX.get() - 820,
      behavior: "smooth",
    });
  };

  useMotionValueEvent(scrollXProgress, "change", (latest) => {
    setScroll(latest);
  });

  useEffect(() => {
    if (debounceDeltaY > 100) {
      handleClickScrollRight();
    } else if (debounceDeltaY < -100) {
      handleClickScrollLeft();
    }
  }, [debounceDeltaY]);

  useEffect(() => {
    if (+debounceScroll.toFixed(1) === 0) {
      setShowLeft(false);
      setShowRight(true);
    } else if (+debounceScroll.toFixed(1) === 1) {
      setShowLeft(true);
      setShowRight(false);
    } else {
      setShowLeft(true);
      setShowRight(true);
    }
  }, [debounceScroll]);

  return (
    <CardWrapper id="card">
      <Cards
        justify="left"
        gap={32}
        ref={cardScrollRef}
        onWheel={handleWheelScroll}
      >
        {PROJECT.map((project: Project) => (
          <CardMedium
            key={project.id}
            project={project}
            onClick={() => handleClickNavigate(project.id)}
          />
        ))}
      </Cards>
      <AnimatePresence>
        {showLeft && (
          <Slider
            direction="right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Gradient direction="right" />
            <IconWrapper
              initial={floating.initial}
              animate={floating.animate}
              transition={floating.transition}
              onClick={handleClickScrollLeft}
              style={{ left: "5rem" }}
            >
              <Icon
                icon="ArrowRight"
                width={80}
                fill="primary_purple"
                rotate={180}
              />
            </IconWrapper>
          </Slider>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showRight && (
          <Slider
            direction="left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Gradient direction="left" />
            <IconWrapper
              initial={floating.initial}
              animate={floating.animate}
              transition={floating.transition}
              onClick={handleClickScrollRight}
              style={{ right: "5rem" }}
            >
              <Icon icon="ArrowRight" width={80} fill="primary_purple" />
            </IconWrapper>
          </Slider>
        )}
      </AnimatePresence>
    </CardWrapper>
  );
};

const CardWrapper = styled(Flex)`
  padding: 0 6rem 1rem;

  flex-basis: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;

  background: ${colors.primary_yellow};

  position: relative;
`;

const Cards = styled(Flex)`
  overflow: scroll;
  scroll-snap-type: x mandatory;
`;

const Slider = styled(motion.div)<{ direction: DirectionType }>`
  position: absolute;
  ${({ direction }) => (direction === "left" ? `right: 0;` : `left:0;`)};

  display: flex;
  align-items: center;
`;

const Gradient = styled.div<{ direction: DirectionType }>`
  width: 20vw;
  height: 64vh;

  z-index: 1;
  background: linear-gradient(
    to ${({ direction }) => direction},
    ${colors.primary_yellow} 30%,
    rgba(0, 0, 0, 0)
  );

  backdrop-filter: blur(3px);
  pointer-events: none;
`;

const IconWrapper = styled(motion.div)`
  position: absolute;

  z-index: 2;
  cursor: pointer;
`;

export default CardPage;
