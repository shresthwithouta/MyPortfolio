import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top: Name + Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Shresth Tiwari
            </h1>
            <p className="text-sm text-gray-400">
              Crafting code, chasing dreams ⚡
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
            <Link to="/" className="hover:text-orange-400 transition-all duration-300">
              Home
            </Link>
            <Link to="/projects" className="hover:text-pink-400 transition-all duration-300">
              Projects
            </Link>
            <Link to="/about" className="hover:text-purple-400 transition-all duration-300">
              About
            </Link>
            <Link to="/contact" className="hover:text-indigo-400 transition-all duration-300">
              Contact Me
            </Link>
          </div>
        </div>

        <hr className="my-6 border-gray-700/50" />

        {/* Socials (pure SVG + glow on hover) */}
        <div className="flex justify-center gap-8">
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
          >
            <svg
              className="w-7 h-7 text-gray-400 group-hover:text-indigo-400 group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition-all"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.07.07 0 0 0-.074.034 13.812 13.812 0 0 0-.616 1.27 18.683 18.683 0 0 0-5.602 0 12.64 12.64 0 0 0-.63-1.27.076.076 0 0 0-.074-.034A19.736 19.736 0 0 0 3.68 4.37a.064.064 0 0 0-.03.025C.533 9.046-.32 13.58.1 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .083-.028c.46-.63.868-1.295 1.217-1.994a.076.076 0 0 0-.041-.105 13.142 13.142 0 0 1-1.872-.9.076.076 0 0 1-.008-.127c.125-.094.25-.19.368-.29a.07.07 0 0 1 .073-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .074.009c.119.1.243.197.369.291a.076.076 0 0 1-.006.126 12.5 12.5 0 0 1-1.873.9.076.076 0 0 0-.04.106c.372.698.78 1.363 1.218 1.993a.076.076 0 0 0 .083.028 19.86 19.86 0 0 0 6.002-3.03.076.076 0 0 0 .03-.054c.5-5.177-.838-9.674-3.549-13.665a.061.061 0 0 0-.03-.026ZM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.332.954-2.418 2.157-2.418 1.21 0 2.175 1.095 2.157 2.418 0 1.333-.954 2.419-2.157 2.419Zm7.974 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.332.954-2.418 2.157-2.418 1.21 0 2.175 1.095 2.157 2.418 0 1.333-.954 2.419-2.157 2.419Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/shresthwithouta/"
            target="_blank"
            rel="noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
          >
            <svg
              className="w-7 h-7 text-gray-400 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)] transition-all"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5zm-11.46 20h-3.08v-10h3.08v10zm-1.54-11.43a1.8 1.8 0 1 1 1.8-1.8 1.8 1.8 0 0 1-1.8 1.8zm13 11.43h-3.08v-5.54c0-1.32-.47-2.22-1.64-2.22a1.77 1.77 0 0 0-1.65 1.18 2.21 2.21 0 0 0-.1.79v5.79h-3.08s.04-9.4 0-10.38h3.08v1.47a3.06 3.06 0 0 1 2.75-1.52c2 0 3.52 1.31 3.52 4.14v6.29z" />
            </svg>
          </a>

          <a
            href="https://github.com/shresthwithouta"
            target="_blank"
            rel="noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
          >
            <svg
              className="w-7 h-7 text-gray-400 group-hover:text-gray-100 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .3A12 12 0 0 0 8.2 23.7c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6a3.1 3.1 0 0 0-1.3-1.7c-1-.6.1-.6.1-.6a2.4 2.4 0 0 1 1.8 1.2 2.5 2.5 0 0 0 3.4 1 2.5 2.5 0 0 1 .7-1.5c-2.7-.3-5.5-1.3-5.5-5.9a4.6 4.6 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.1s1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2a4.3 4.3 0 0 1 .1 3.1 4.6 4.6 0 0 1 1.2 3.2c0 4.6-2.8 5.6-5.5 5.9a2.8 2.8 0 0 1 .8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
            </svg>
          </a>

          <a
            href="https://www.youtube.com/channel/UCsL7XiEHP5hh91sgf-T92jA?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
          >
            <svg
              className="w-7 h-7 text-gray-400 group-hover:text-red-500 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-all"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 8 .1 12 .1 12s0 4 .4 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.6 15.5v-7L15.8 12l-6.2 3.5z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/shresth_without_a/"
            target="_blank"
            rel="noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
          >
            <svg
              className="w-7 h-7 text-gray-400 group-hover:text-pink-500 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] transition-all"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.5 2A5.5 5.5 0 0 0 2 7.5v9A5.5 5.5 0 0 0 7.5 22h9a5.5 5.5 0 0 0 5.5-5.5v-9A5.5 5.5 0 0 0 16.5 2h-9Zm9 2A3.5 3.5 0 0 1 20 7.5v9A3.5 3.5 0 0 1 16.5 20h-9A3.5 3.5 0 0 1 4 16.5v-9A3.5 3.5 0 0 1 7.5 4h9Zm-4.5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.8-.8a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z" />
            </svg>
          </a>
        </div>

        <hr className="my-6 border-gray-700/50" />

        <p className="text-center text-orange-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-300">
            Shresth Tiwari
          </span>{" "}
          : Setting sail through code and creativity 🌊
        </p>
      </div>
    </footer>
  );
}
