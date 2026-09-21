import { useCallback, useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { ProjectModal } from "./components/ProjectModal";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import type { Project, SectionId } from "./types";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  useEffect(() => { document.body.classList.toggle("dark", darkMode); }, [darkMode]);
  const scrollToSection = useCallback((id: SectionId) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), []);
  const closeProject = useCallback(() => setSelectedProject(null), []);
  return <div className="portfolio"><Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} onNavigate={scrollToSection} /><main><Hero onViewWork={() => scrollToSection("projects")} /><About /><Skills /><Experience /><Projects onOpenProject={setSelectedProject} /><Contact /></main>{selectedProject && <ProjectModal project={selectedProject} onClose={closeProject} />}</div>;
}
