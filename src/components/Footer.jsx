import { FaArrowUp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative text-center py-10 border-t mt-16">
      <p>© 2026 Portfolio-Bhaskar. All rights reserved.</p>
      <p className="text-cyan-600 text-shadow-md">
        Built with TailwindCSS and React.js <br />
        Learning full stack development at neog.camp
      </p>

      {/* Floating Back to Top Button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg transition"
      >
        <FaArrowUp size={20} />
      </a>
    </footer>
  );
}
