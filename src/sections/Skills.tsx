import { SectionHeading } from "../components/SectionHeading";
import { skillCategories } from "../data/skills";
import "../styles/skills.css";

export function Skills() { return <section id="skills" className="section"><SectionHeading>Skills</SectionHeading><div className="skills-list">{skillCategories.map((category) => <article className="skill-card" key={category.title}><h3>{category.title}</h3><div className="skill-items">{category.skills.map(({ name, icon: Icon }) => <div className="skill-item" key={name}><Icon aria-hidden="true" /><span>{name}</span></div>)}</div></article>)}</div></section>; }
