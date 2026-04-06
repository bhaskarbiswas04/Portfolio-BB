import { motion } from "motion/react";

export default function Section({ children, id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      {children}
    </motion.section>
  );
}
