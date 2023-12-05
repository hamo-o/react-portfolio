import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

import Flex from "../common/Flex";

import CardMedium from "@/components/cards/CardMedium";
import { PROJECT, Project } from "@/models/project";
import { colors } from "@/styles/theme";

type DirectionType = "left" | "right";

const CardPage = () => {
  const router = useRouter();

  const handleClickNavigate = (id: number) => {
    router.push(`/project/${id}`);
  };

  return (
    <CardWrapper>
      <Cards justify="left" gap={32}>
        <Gradient direction="right" />
        {PROJECT.map((project: Project) => (
          <CardMedium
            key={project.id}
            project={project}
            onClick={() => handleClickNavigate(project.id)}
          />
        ))}
        <Gradient direction="left" />
      </Cards>
    </CardWrapper>
  );
};

const CardWrapper = styled(Flex)`
  padding: 0 6rem;

  flex-basis: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;

  background: ${colors.primary_yellow};
`;

const Gradient = styled.div<{ direction: DirectionType }>`
  position: fixed;
  ${({ direction }) => (direction === "left" ? `right: 0;` : `left:0;`)}

  width: 6rem;
  height: 70vh;

  z-index: 1;
  background: linear-gradient(
    to ${({ direction }) => direction},
    ${colors.primary_yellow},
    rgba(0, 0, 0, 0)
  );

  backdrop-filter: blur(2px);
`;

const Cards = styled(Flex)`
  overflow: scroll;
`;

export default CardPage;
