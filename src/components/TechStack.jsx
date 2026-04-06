import Section from "./Section";
import { motion } from "motion/react";

export default function TechStack() {
  const techs = ["React", "Node.js", "Express", "MongoDB", "Tailwind"];

  return (
    <Section>
      <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>

      <div className="flex flex-wrap gap-3">
        {techs.map((tech, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="border px-3 py-1 rounded-lg text-sm"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </Section>
  );
}