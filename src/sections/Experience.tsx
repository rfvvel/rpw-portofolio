import { SectionHeading } from "../components/SectionHeading";
import { experience } from "../data/experience";
import "../styles/experience.css";

export function Experience() { return <section id="experience" className="section"><SectionHeading>Experience</SectionHeading><div className="experience-list">{experience.map((item) => <article className="experience-item" key={`${item.role}-${item.dates}`}><div className="experience-date">{item.dates}</div><div className="experience-content"><h3>{item.role}</h3><p className="experience-company">{item.organization}</p><ul>{item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul></div></article>)}</div></section>; }
