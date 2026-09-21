import type { IconType } from "react-icons";

export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  images: string[];
  github: string;
}

export interface Experience {
  organization: string;
  role: string;
  dates: string;
  responsibilities: string[];
}

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export type SectionId = "home" | "about" | "skills" | "experience" | "projects" | "contact";
