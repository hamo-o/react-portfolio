"use client";

import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useResetRecoilState } from "recoil";
import useDebounce from "@/hooks/useDebounce";
import { useWindowSize } from "@/hooks/useWindowSize";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useAnimationControls,
  AnimatePresence,
} from "framer-motion";

import { cursorState } from "@/utils/atom";

import Flex from "@/components/common/Flex";
import TopNavigation from "@/components/navigations/TopNavigation";
import NextImage from "@/components/common/NextImage";
import CardSmall from "@/components/cards/CardSmall";
import { WORK, Work } from "@/models/work";
import { container, item } from "@/constants/animate";

const WorkDetailPage = ({ params }: { params: { id: number } }) => {
  const resetCursor = useResetRecoilState(cursorState);

  useEffect(() => {
    resetCursor();
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const [scroll, setScroll] = useState<number>(0);
  const debounceScroll = useDebounce(scroll, 200);

  const [workId, setWorkId] = useState<number>(1);
  const selectedWork = WORK.find((work: Work) => {
    return work.id === workId;
  });

  const controls = useAnimationControls();
  useEffect(() => {
    scrollUp();
    controls.start("show");
  }, [workId, controls]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(latest);
  });

  const windowSize = useWindowSize();
  const scrollUp = () => {
    scrollRef.current?.scrollTo({
      top: -windowSize.height,
      behavior: "smooth",
    });
  };

  return (
    <WorkDetailWrapper height="100vh" direction="column">
      <TopNavigation title="여기어때 QA팀 인턴" />
      <WorkDetailContent align="start" justify="end" gap={32}>
        <CardsContainer
          width="max-content"
          height="100vh"
          justify="start"
          direction="column"
          gap={32}
        >
          {WORK.map((work: Work) => (
            <CardSmall
              key={work.id}
              work={work}
              selected={workId === work.id}
              onClick={() => setWorkId(work.id)}
            />
          ))}
        </CardsContainer>

        <Detail
          variants={container}
          initial="hidden"
          animate={controls}
          exit="hidden"
          ref={scrollRef}
        >
          <AnimatePresence>
            {selectedWork?.detail?.map((detail, idx) => (
              <ImageCover key={idx} variants={item}>
                <NextImage
                  width="100%"
                  src={detail}
                  alt={`${selectedWork.name}_${idx}`}
                  objectPosition="top left"
                />
              </ImageCover>
            ))}
          </AnimatePresence>
        </Detail>
      </WorkDetailContent>
    </WorkDetailWrapper>
  );
};

const WorkDetailWrapper = styled(Flex)`
  padding: 0 6rem;
  overflow: hidden;
`;

const WorkDetailContent = styled(Flex)`
  padding: 6rem 0;
`;

const CardsContainer = styled(Flex)`
  padding: 6.5rem 0 6rem;
  position: sticky;
  left: 0;
  top: 6rem;

  overflow-y: scroll;
`;

const Detail = styled(motion.div)`
  width: calc(100% - 24vw - 3rem);
  height: 100vh;
  padding: 6.5rem 0 6rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 32px;

  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

const ImageCover = styled(motion.div)`
  width: 100%;
  aspect-ratio: 16/9;

  flex-shrink: 0;

  border-radius: 2rem;

  overflow: hidden;
  scroll-snap-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
`;

export default WorkDetailPage;
