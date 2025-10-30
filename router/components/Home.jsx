import { Link } from "react-router-dom"

export default function Home() {
  const highlights = [
    {
      title: "Frontend Development",
      desc: "Building responsive, dynamic UIs with React and TailwindCSS, learning to integrate APIs.",
      color: "from-orange-500/40 to-amber-400/30",
    },
    {
      title: "React Enthusiast",
      desc: "Transforming ideas into interactive realities with React, TailWindCSS, challanges while integrating APIs.",
      color: "from-purple-500/40 to-pink-400/30",
    },
    {
      title: "Design Vibes",
      desc: "Inspired by storytelling and colors, blending themes with code, Using vibrant gradients and contrasting color combinations.",
      color: "from-rose-500/40 to-yellow-300/30",
    },
    {
      title: "Always Learning",
      desc: "Experimenting with new designs, frameworks, and APIs to grow my skills, focus on BackEnd next along with mastering the art of FrontEnd.",
      color: "from-blue-500/40 to-cyan-400/30",
    },
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0a0a0f] via-[#101020] to-[#1b1b38] text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-gradient-to-br from-orange-500/20 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[28rem] h-[28rem] bg-gradient-to-tr from-purple-500/20 to-rose-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="text-center relative z-10 px-6 mt-12 sm:mt-0">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(251,146,60,0.6)] hover:scale-105 transition-transform duration-700">
          Shresth Tiwari
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Frontend • React • TailwindCss • API 
        </p>
        <p className="mt-2 text-gray-400 max-w-xl mx-auto">
          I design and build dynamic, aesthetic, and interactive FrontEnd websites with API Integrations, learning BackEnd along the way.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 text-black font-semibold shadow-[0_0_20px_rgba(251,146,60,0.4)] hover:shadow-[0_0_25px_rgba(251,146,60,0.8)] hover:scale-105 transition-transform duration-300"
          >
            Explore My Work
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-lg border border-orange-400 text-orange-400 font-semibold hover:bg-orange-500 hover:text-black transition-all duration-300 hover:scale-105"
          >
            About Me
          </Link>
        </div>
      </div>

      <div className="relative z-10 mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 sm:px-16 w-full max-w-7xl">
        {highlights.map((h, i) => (
          <div
            key={i}
            className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(251,146,60,0.3)] hover:scale-105 transition-all duration-500"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${h.color} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 rounded-2xl`}></div>
            <div className="relative z-10 text-left space-y-3">
              <h3 className="text-2xl font-bold text-orange-300 group-hover:text-orange-400 transition-colors">
                {h.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-60 blur-sm"></div>
    </section>
  )
}
