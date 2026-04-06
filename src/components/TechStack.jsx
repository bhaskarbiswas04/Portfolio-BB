import Section from "./Section";
import { motion } from "motion/react";

export default function TechStack() {
  const techs = ["React", "Node.js", "Express", "MongoDB", "Tailwind"];

  return (
    <Section>
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-3">Tech Stack</h2>
        <p className="text-gray-400">Technologies and tools I work with</p>
        <div className="w-18 h-1 bg-cyan-500 mt-4"></div>
      </div>

      <div className="flex flex-wrap gap-3">
        {techs.map((tech, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="border px-3 py-1 rounded-lg text-sm"
          >
            <div className="m-3">{tech}</div>
          </motion.span>
        ))}
      </div>
    </Section>
  );
}