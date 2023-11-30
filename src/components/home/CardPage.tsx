import CardMedium from "@/components/cards/CardMedium";
import { PROJECT, Project } from "@/models/project";

const CardPage = () => {
  return PROJECT.map((project: Project) => (
    <CardMedium key={project.id} project={project} />
  ));
};

export default CardPage;
