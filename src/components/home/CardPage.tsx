import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

import Flex from "../common/Flex";

import CardMedium from "@/components/cards/CardMedium";
import { PROJECT, Project } from "@/models/project";
import { colors } from "@/styles/theme";

const CardPage = () => {
  const router = useRouter();

  const handleClickNavigate = (id: number) => {
    router.push(`/project/${id}`);
  };

  return (
    <Cards justify="left" gap={32}>
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
  padding: 0 6rem;

  flex-basis: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;

  overflow: scroll;
  background: ${colors.primary_yellow};
`;

export default CardPage;
