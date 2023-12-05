import { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { motion, useScroll } from "framer-motion";

import useDebounce from "@/hooks/useDebounce";

import Flex from "../common/Flex";
import Spacing from "../common/Spacing";
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
  const [deltaY, setDeltaY] = useState<number>(0);
  const debounceDeltaY = useDebounce(deltaY, 200);

  const handleClickNavigate = (id: number) => {
    router.push(`/project/${id}`);
  };

  const handleWheelScroll = (e: any) => {
    e.stopPropagation();
    setDeltaY(e.nativeEvent.deltaY);
  };

  const handleClickScrollRight = () => {
    cardScrollRef.current?.scrollTo({
      top: 0,
      left: scrollX.get() + 500,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (debounceDeltaY > 100) {
      handleClickScrollRight();
    } else if (debounceDeltaY < -100) {
      cardScrollRef.current?.scrollTo({
        top: 0,
        left: scrollX.get() - 500,
        behavior: "smooth",
      });
    }
  }, [debounceDeltaY]);

  return (
    <CardWrapper id="card">
      <Cards
        justify="left"
        gap={32}
        ref={cardScrollRef}
        onWheel={handleWheelScroll}
      >
        {/* <Gradient direction="right" /> */}
        {PROJECT.map((project: Project) => (
          <CardMedium
            key={project.id}
            project={project}
            onClick={() => handleClickNavigate(project.id)}
          />
        ))}
        <Spacing height="70vh" style={{ aspectRatio: 430 / 900 }} />
        <Gradient direction="left" />
      </Cards>
      <IconWrapper
        initial={floating.initial}
        animate={floating.animate}
        transition={floating.transition}
        onClick={handleClickScrollRight}
      >
        <Icon icon="ArrowRight" width={100} fill="primary_purple" />
      </IconWrapper>
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

const Gradient = styled.div<{ direction: DirectionType }>`
  position: absolute;
  ${({ direction }) => (direction === "left" ? `right: 0;` : `left:0;`)}

  width: 30vw;
  height: 70vh;

  z-index: 1;
  background: linear-gradient(
    to ${({ direction }) => direction},
    ${colors.primary_yellow} 20%,
    rgba(0, 0, 0, 0)
  );

  backdrop-filter: blur(4px);
  pointer-events: none;
`;

const Cards = styled(Flex)`
  overflow: scroll;
  scroll-snap-type: x mandatory;
`;

const IconWrapper = styled(motion.div)`
  position: absolute;
  right: 5rem;

  z-index: 2;
  cursor: pointer;
`;

export default CardPage;
