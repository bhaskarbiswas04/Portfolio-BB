import clsx from "clsx";

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-[#0f172a]/70 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-2xl tracking-wide">
            BHASKAR BISWAS
          </h1>
          <h3 className="font-medium">(MERN Developer)</h3>
        </div>

        <div className="flex items-center gap-6">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <button
            onClick={() => setDark(!dark)}
            className={clsx(
              "px-3 py-1 rounded border transition",
              dark ? "bg-white text-black" : "bg-black text-white",
            )}
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
