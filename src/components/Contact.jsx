import Section from "./Section";
import { motion } from "motion/react";
import { contacts } from "../data/contacts";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-3">Connect</h2>
        <p className="text-gray-400">
          Let's collaborate on something amazing together
        </p>
        <div className="w-16 h-1 bg-cyan-500 mt-4"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {contacts?.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={i}
              href={item.link}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="border border-gray-800 rounded-xl p-6 flex gap-4 items-start hover:bg-gray-900/40 transition"
            >
              <div className="text-cyan-500 mt-1">
                <Icon size={22} />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}
