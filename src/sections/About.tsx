import { SectionHeading } from "../components/SectionHeading";
import "../styles/about.css";

export function About() { 
    return <section id="about" className="section">
        <SectionHeading>About Me</SectionHeading>
        <div className="about-grid">
            <div className="about-large">
                <p>I'm Rafael Putra Wijaya, a Computer Science student at BINUS University with an interest in software development, web technologies, and artificial intelligence.</p>
            </div>
            <div className="about-small">
                <p>I enjoy building applications, learning new technologies, and working with people to turn ideas into usable digital products.</p>
                <div className="about-meta">
                    <div>
                        <span>University</span>
                        <strong>BINUS University</strong>
                    </div>
                    <div>
                        <span>Field</span>
                        <strong>Computer Science</strong>
                    </div>
                    <div>
                        <span>Focus</span>
                        <strong>Software / Web / AI</strong>
                    </div>
                </div>
            </div>
        </div>
    </section>; 
}
