import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);

  // 1️⃣ Load saved theme (runs only once)
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved) {
      setDark(saved === "dark");
    } else {
      // fallback to system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setDark(prefersDark);
    }
  }, []);

  // 2️⃣ Apply theme whenever 'dark' changes
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="bg-white dark:bg-[#0f172a] text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Navbar dark={dark} setDark={setDark} />
      <Intro />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}