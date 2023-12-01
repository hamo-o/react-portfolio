import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

import Flex from "../common/Flex";

import CardMedium from "@/components/cards/CardMedium";
import { PROJECT, Project } from "@/models/project";

const CardPage = () => {
  const router = useRouter();

  const handleClickNavigate = (id: number) => {
    router.push(`/project/${id}`);
  };

  return (
    <Cards justify="left" gap={16}>
      {PROJECT.map((project: Project) => (
        <CardMedium
          key={project.id}
          project={project}
          onClick={() => handleClickNavigate(project.id)}
        />
      ))}
    </Cards>
  );
};

const Cards = styled(Flex)`
  width: 100vw;
  height: 100vh;
  padding: 0 2rem;

  overflow: scroll;
`;

export default CardPage;
