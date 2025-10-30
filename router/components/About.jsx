import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/1e/9d/dc/1e9ddc76e0e4c2f157e11d58bd700e0c.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-orange-500/40 to-purple-600/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-purple-500/30 to-orange-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-orange-400/40 via-pink-500/40 to-purple-600/40 blur-3xl animate-spin opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center md:items-start max-w-4xl text-center md:text-left px-6 md:px-12 py-16 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl shadow-orange-500/20 hover:shadow-purple-500/30 transition-all duration-700">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 drop-shadow-lg mb-6 leading-tight">
          Shresth Tiwari
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4 hover:text-orange-300 transition duration-300">
          I’m a front-end developer passionate about creating immersive, fast, and accessible web experiences. I love bringing ideas to life through modern JavaScript frameworks and creative UI design.
        </p>

        <p className="text-gray-400 text-md leading-relaxed hover:text-purple-300 transition duration-300">
          Currently pursuing my Bachelor's at{" "}
          <span className="text-orange-400 font-semibold">CSJMU Kanpur</span>,
          focusing on mastering the fundamentals of web technologies while exploring animation, performance, and beautiful user experiences.
        </p>

        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold shadow-lg shadow-orange-400/30 hover:shadow-purple-500/40 transition-transform transform hover:-translate-y-1 duration-300"
          >
            View My Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-semibold transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
