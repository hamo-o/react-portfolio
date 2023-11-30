"use client";

import Flex from "@/components/common/Flex";
import LandingPage from "@/components/home/LandingPage";
import CardPage from "@/components/home/CardPage";

export default function Home() {
  return (
    <Flex direction="column">
      <LandingPage />
      <CardPage />
    </Flex>
  );
}
