import { FiArrowUpRight } from "react-icons/fi";
import "../styles/hero.css";

interface HeroProps { onViewWork: () => void }

export function Hero({ onViewWork }: HeroProps) {
  return <section id="home" className="hero section">
    <div className="hero-content">
      <div className="hero-copy"><p className="eyebrow">Hi, I'm Rafael.</p>
      <h1>Computer Science<br />Student & Software<br />Developer.</h1>
      <div className="hero-summary"><p>I build web applications, explore artificial intelligence, and enjoy turning ideas into functional digital products.</p><div className="hero-buttons"><button className="primary-button" onClick={onViewWork}>View My Work<FiArrowUpRight /></button><a href="/cv/Rafael-Putra-Wijaya-CV.pdf" download className="secondary-button">Download CV</a></div></div></div>
      <div className="hero-profile"><img src="/profile/rafael-profile.jpeg" alt="Rafael Putra Wijaya" /></div>
    </div>
  </section>;
}
