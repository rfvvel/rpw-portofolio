import { SiC, SiCss, SiFigma, SiGit, SiGithub, SiGooglegemini, SiHtml5, SiJavascript, SiKeras, SiMysql, SiNodedotjs, SiOpenjdk, SiPython, SiReact, SiTensorflow, SiTypescript } from "react-icons/si";
import { TbBrandReactNative, TbDatabase } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  { title: "Languages", skills: [{ name: "C", icon: SiC }, { name: "Python", icon: SiPython }, { name: "Java", icon: SiOpenjdk }, { name: "JavaScript", icon: SiJavascript }, { name: "TypeScript", icon: SiTypescript }] },
  { title: "Frontend", skills: [{ name: "React", icon: SiReact }, { name: "React Native", icon: TbBrandReactNative }, { name: "HTML", icon: SiHtml5 }, { name: "CSS", icon: SiCss }] },
  { title: "Backend & Data", skills: [{ name: "Node.js", icon: SiNodedotjs }, { name: "MySQL", icon: SiMysql }, { name: "SQL Server", icon: TbDatabase }] },
  { title: "AI & Tools", skills: [{ name: "TensorFlow", icon: SiTensorflow }, { name: "Keras", icon: SiKeras }, { name: "Gemini API", icon: SiGooglegemini }, { name: "Git", icon: SiGit }, { name: "GitHub", icon: SiGithub }, { name: "VS Code", icon: VscCode }, { name: "Figma", icon: SiFigma }] },
];
