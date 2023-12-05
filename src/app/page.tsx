"use client";

import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { useWindowSize } from "@/hooks/useWindowSize";
import useDebounce from "@/hooks/useDebounce";

import LandingPage from "@/components/home/LandingPage";
import CardPage from "@/components/home/CardPage";
import ProfilePage from "@/components/home/ProfilePage";
import BottomNavigation from "@/components/navigations/BottomNavigation";
import WorkPage from "@/components/home/WorkPage";
import FinalPage from "@/components/home/FinalPage";

const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollX, scrollXProgress } = useScroll({ container: scrollRef });
  const [scroll, setScroll] = useState<number>(0);
  const debounceScroll = useDebounce(scroll, 200);

  const [deltaY, setDeltaY] = useState<number>(0);
  const windowSize = useWindowSize();
  const debounceDeltaY = useDebounce(deltaY, 200);

  useMotionValueEvent(scrollXProgress, "change", (latest) => {
    setScroll(latest);
  });

  const handleWheelScroll = (e: any) => {
    setDeltaY(e.nativeEvent.deltaY);
  };

  const scrollRight = () => {
    scrollRef.current?.scrollTo({
      top: 0,
      left: scrollX.get() + windowSize.width,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (debounceDeltaY > 100) {
      scrollRight();
    } else if (debounceDeltaY < -100) {
      scrollRef.current?.scrollTo({
        top: 0,
        left: scrollX.get() - windowSize.width,
        behavior: "smooth",
      });
    }
  }, [debounceDeltaY]);

  return (
    <ScrollWrapper ref={scrollRef} onWheel={handleWheelScroll}>
      <LandingPage scrollRight={scrollRight} />
      <ProfilePage />
      <CardPage />
      <WorkPage />
      <FinalPage />
      <BottomNavigation progress={debounceScroll} motion={scrollXProgress} />
    </ScrollWrapper>
  );
};

const ScrollWrapper = styled(motion.div)`
  display: flex;
  justify-content: start;

  width: 100vw;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  behavior: smooth;
`;

export default Home;
