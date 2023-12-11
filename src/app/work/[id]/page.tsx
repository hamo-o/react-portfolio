"use client";

import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useResetRecoilState } from "recoil";
import useDebounce from "@/hooks/useDebounce";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";

import { cursorState } from "@/utils/atom";

import Flex from "@/components/common/Flex";
import Text from "@/components/common/Text";
import { colors } from "@/styles/theme";
import TopNavigation from "@/components/navigations/TopNavigation";
import NextImage from "@/components/common/NextImage";
import CardSmall from "@/components/cards/CardSmall";
import { WORK, Work } from "@/models/work";
import Spacing from "@/components/common/Spacing";

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

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(latest);
  });

  return (
    <WorkDetailWrapper height="100vh" direction="column">
      <TopNavigation title="여기어때 QA팀 인턴" />
      <WorkDetailContent align="start" gap={32} ref={scrollRef}>
        <CardsContainer
          width="max-content"
          height="100%"
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
        <Detail width="70vw" justify="start" direction="column" gap={32}>
          {selectedWork?.detail?.map((detail, idx) => (
            <Image
              width="100%"
              key={idx}
              src={`/images/${detail}`}
              alt={detail}
            />
          ))}
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
  overflow-y: scroll;
`;

const CardsContainer = styled(Flex)`
  padding-top: 0.5rem;
  position: sticky;
  top: 0;
`;

const ImageContainer = styled(Flex)``;

const Detail = styled(Flex)`
  padding-top: 0.5rem;
`;

const Image = styled.img`
  border-radius: 2rem;
`;

export default WorkDetailPage;
