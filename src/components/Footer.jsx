import { FaArrowUp } from "react-icons/fa6";
export default function Footer() { const year = new Date().getFullYear(); return <footer className="footer container"><p>© {year} Bhaskar Biswas. Crafted with React.</p><a href="#top" aria-label="Back to top">Back to top <FaArrowUp /></a></footer>; }
