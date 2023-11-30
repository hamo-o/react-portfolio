import styled from "@emotion/styled";
import { colors } from "@/styles/theme";
import { Project } from "@/models/project";
import Flex from "../common/Flex";
import Text from "../common/Text";

const CardMedium = ({ project }: { project: Project }) => {
  return (
    <CardWrapper direction="column">
      <Text typo="title1">{project.name}</Text>
      <Text>{project.date}</Text>
      {project.stack.map((stack: string, idx: number) => (
        <Text key={idx}>{stack}</Text>
      ))}
    </CardWrapper>
  );
};

const CardWrapper = styled(Flex)`
  width: 675px;
  height: 917px;

  border: 8px solid ${colors.primary_yellow};
  color: ${colors.primary_yellow};
  background: ${colors.primary_purple};
`;

export default CardMedium;
