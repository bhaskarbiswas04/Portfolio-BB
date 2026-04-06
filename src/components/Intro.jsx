import Section from "./Section";

export default function Intro() {
  return (
    <Section>
      <div className="text-center space-y-6">
        <p className="max-w-xl mx-auto text-cyan-400 text-lg">
          I'm Bhaskar — a MERN Stack Developer focused on clean UI, performance,
          and real-world applications.
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Building Scalable Web Experiences
        </h2>

        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-cyan-600 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="border px-6 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </Section>
  );
}