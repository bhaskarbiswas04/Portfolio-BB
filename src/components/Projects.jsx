import Section from "./Section";
import { projects } from "../data/projects";
import { motion as Motion } from "motion/react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

export default function Projects() {
  return <Section id="projects">
    <div className="section-heading"><div><p className="eyebrow">Selected work <span>01</span></p><h2>Built for people.<br /><em>Engineered to scale.</em></h2></div><p>Projects that balance an intuitive user experience with the technical foundations that make products reliable.</p></div>
    <div className="project-list">{projects.map((project, index) => <Motion.article className="project-card" key={project.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
      <div className={`project-visual visual-${index + 1}`}><span className="project-index">0{index + 1}</span><div className="visual-art">{index === 0 && <><b>WYNK</b><div className="product-row" /><div className="product-row short" /></>}{index === 1 && <><b>ANVAYA</b><div className="chart-bars"><i /><i /><i /><i /></div></>}{index === 2 && <><b>quick.chat</b><div className="chat-bubble">Hey, ready to build?</div><div className="chat-bubble alt">Absolutely. ✨</div></>}</div></div>
      <div className="project-details"><div><p className="project-kind">{project.type}</p><h3>{project.name}</h3></div><p className="project-description">{project.description}</p><div className="tags">{project.tech.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.live} target="_blank" rel="noreferrer" className={project.live === "#" ? "disabled" : ""}>Live preview <FaArrowUpRightFromSquare /></a><a href={project.frontend} target="_blank" rel="noreferrer"><FaGithub /> Code</a></div></div>
    </Motion.article>)}</div>
  </Section>;
}
