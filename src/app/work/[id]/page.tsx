"use client";

import { useEffect } from "react";
import { useResetRecoilState } from "recoil";
import { cursorState } from "@/utils/atom";

import Flex from "@/components/common/Flex";

const WorkDetailPage = ({ params }: { params: { id: number } }) => {
  const resetCursor = useResetRecoilState(cursorState);

  useEffect(() => {
    resetCursor();
  }, []);

  return (
    <>
      <Flex>디테일 {params.id}페이지입니다.</Flex>
    </>
  );
};

export default WorkDetailPage;
