import { motion as Motion } from "motion/react";
import { FaArrowDown, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Intro() {
  return <section className="hero" id="top">
    <div className="hero-grid" /><div className="orb orb-one" /><div className="orb orb-two" />
    <div className="container hero-inner">
      <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
        <p className="eyebrow"><span className="status-dot" /> Available for opportunities</p>
        <h1>Building the web<br /><em>people remember.</em></h1>
        <p className="hero-copy">I’m Bhaskar, a MERN Stack Developer who turns product ideas into thoughtful, performant web experiences—from crisp interfaces to dependable APIs.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <span>↘</span></a><a className="button button-ghost" href="/BhaskarBiswas_Resume.pdf" download>Download résumé <FaArrowDown /></a></div>
      </Motion.div>
      <Motion.aside className="hero-aside" initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.16 }}>
        <div className="code-window"><div className="code-head"><span /><span /><span /><b>developer.js</b></div><pre><code><i>const</i> developer = {'{'}{`\n`}  name: <strong>"Bhaskar"</strong>,{`\n`}  stack: [<strong>"MongoDB"</strong>, <strong>"Express"</strong>,{`\n`}          <strong>"React"</strong>, <strong>"Node.js"</strong>],{`\n`}  ships: <i>true</i>{`\n`}{'}'};</code></pre></div>
        <div className="hero-note"><span>01</span><p>Clean systems.<br />Intentional details.</p></div>
      </Motion.aside>
    </div>
    <div className="container scroll-cue"><span>SCROLL TO EXPLORE</span><div /></div>
    <div className="hero-social"><a href="https://github.com/bhaskarbiswas04" target="_blank" rel="noreferrer"><FaGithub /></a><a href="https://www.linkedin.com/in/bhaskarb04/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></div>
  </section>;
}
