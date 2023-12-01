"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";

import Flex from "@/components/common/Flex";
import LandingPage from "@/components/home/LandingPage";
import CardPage from "@/components/home/CardPage";
import ProfilePage from "@/components/home/ProfilePage";

const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });

  return (
    <Flex direction="column" ref={scrollRef} style={{ overflow: "scroll" }}>
      <LandingPage />
      <ProfilePage />
      <CardPage />
    </Flex>
  );
};

export default Home;
