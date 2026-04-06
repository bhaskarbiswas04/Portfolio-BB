import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className="dark:bg-[#0f172a] text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Navbar dark={dark} setDark={setDark} />
      <Intro />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}