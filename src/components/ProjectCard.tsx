import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "../types";

interface ProjectCardProps { project: Project; onOpen: (project: Project) => void; isDuplicate?: boolean }

export function ProjectCard({ project, onOpen, isDuplicate = false }: ProjectCardProps) {
  return <article className="project-card">
    <button className="project-card-button" onClick={() => onOpen(project)} aria-label={`View ${project.title} project details`} tabIndex={isDuplicate ? -1 : 0}>
      <span className="project-number">{project.number}</span>
      <span className="project-image">
        <span className="project-image-fallback">Preview unavailable</span>
        {project.images[0] && <img src={project.images[0]} alt={`${project.title} preview`} draggable="false" />}
      </span>
      <span className="project-info">
        <span className="project-title-row"><span><span className="project-category">{project.category}</span><span className="project-title">{project.title}</span></span><FiArrowUpRight className="project-arrow" /></span>
        <span className="project-description">{project.description}</span>
        <span className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</span>
      </span>
    </button>
  </article>;
}
