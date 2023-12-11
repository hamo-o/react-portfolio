"use client";

import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useResetRecoilState } from "recoil";
import useDebounce from "@/hooks/useDebounce";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { cursorState } from "@/utils/atom";

import Flex from "@/components/common/Flex";
import Text from "@/components/common/Text";
import { colors } from "@/styles/theme";
import TopNavigation from "@/components/navigations/TopNavigation";

const WorkDetailPage = ({ params }: { params: { id: number } }) => {
  const resetCursor = useResetRecoilState(cursorState);
  useEffect(() => {
    resetCursor();
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const [scroll, setScroll] = useState<number>(0);
  const debounceScroll = useDebounce(scroll, 200);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(latest);
  });

  return (
    <WorkDetailWrapper height="100vh" direction="column">
      <TopNavigation title="여기어때 QA팀 인턴" />
      <WorkDetailContent height="max-content" ref={scrollRef}>
        <Text typo="subtitle1" color="primary_white"></Text>
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

export default WorkDetailPage;
