import { motion as Motion } from "motion/react";

export default function Section({ children, id, className = "" }) {
  return <Motion.section id={id} className={`section container ${className}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65 }}>{children}</Motion.section>;
}
