import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import type { Project } from "../types";
import "../styles/modal.css";

interface ProjectModalProps { project: Project; onClose: () => void }

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", closeOnEscape); document.body.style.overflow = ""; };
  }, [onClose]);

  return <div className="modal-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-top"><div><p className="project-category">{project.category}</p><h2 id="modal-title">{project.title}</h2></div><button className="modal-close" onClick={onClose} aria-label="Close project details"><FiX /></button></div>
      <div className="modal-image">{project.images[selectedImage] ? <img src={project.images[selectedImage]} alt={`${project.title} screenshot ${selectedImage + 1}`} /> : <span className="project-image-fallback">Preview unavailable</span>}</div>
      {project.images.length > 0 && <div className="modal-thumbnails">{project.images.map((image, index) => <button key={image} className={`modal-thumbnail ${selectedImage === index ? "active" : ""}`} onClick={() => setSelectedImage(index)} aria-label={`Show screenshot ${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span><img src={image} alt="" /></button>)}</div>}
      <div className="modal-bottom"><div><p>{project.description}</p><div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div><a href={project.github} target="_blank" rel="noreferrer" className="primary-button"><FaGithub />View GitHub</a></div>
    </div>
  </div>;
}
