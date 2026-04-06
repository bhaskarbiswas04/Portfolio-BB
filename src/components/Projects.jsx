import Section from "./Section";
import { projects } from "../data/projects";
import { motion } from "motion/react";
import { FaCode } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

export default function Projects() {
  return (
    <Section id="projects">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-3">Projects</h2>
        <p className="text-gray-400">
          Building solutions that solve real-world problems
        </p>
        <div className="w-16 h-1 bg-cyan-500 mt-4"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="border rounded-xl p-5 space-y-4 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-indigo-100 dark:bg-cyan-900 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-6 text-sm">
              <a
                href={p.live}
                className="flex items-center gap-1 text-cyan-500"
              >
                <FaLink size={20} /> Live
              </a>

              <a href={p.github} className="flex items-center gap-1">
                <FaCode size={20} /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}