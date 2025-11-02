import { ProjectCard } from "./ProjectCard";
import projects from "../data/projects.json";

export function Gallery() {
  return (
    <>
      <div className="grid grid-cols-3 justify-items-center">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </>
  );
}
