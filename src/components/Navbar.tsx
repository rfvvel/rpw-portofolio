import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import type { SectionId } from "../types";
import "../styles/navbar.css";

interface NavbarProps { darkMode: boolean; onToggleTheme: () => void; onNavigate: (id: SectionId) => void }

export function Navbar({ darkMode, onToggleTheme, onNavigate }: NavbarProps) {
  return <nav className="navbar" aria-label="Primary navigation">
    <button className="brand" onClick={() => onNavigate("home")}>Rafael.</button>
    <div className="nav-links">
      {(["about", "skills", "experience", "projects", "contact"] as SectionId[]).map((id) => <button key={id} onClick={() => onNavigate(id)}>{id[0].toUpperCase() + id.slice(1)}</button>)}
    </div>
    <div className="nav-actions">
      <a href="https://github.com/rfvvel" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/rafael-putra-wijaya-997a25323" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href="https://www.instagram.com/rafael__wijaya" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
      <button className="theme-toggle" onClick={onToggleTheme} aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}>{darkMode ? <FiSun /> : <FiMoon />}</button>
    </div>
  </nav>;
}
