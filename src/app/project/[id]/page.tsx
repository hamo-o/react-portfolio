"use client";

import Flex from "@/components/common/Flex";

const ProjectPage = ({ params }: { params: { id: number } }) => {
  return <Flex>프로젝트 디테일 {params.id}페이지입니다.</Flex>;
};

export default ProjectPage;
