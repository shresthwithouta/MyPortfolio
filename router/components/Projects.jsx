import React from "react"

export default function Projects() {
  const projects = [
    {
      title: "My Portfolio Website",
      description:
        "This website itself is React + Tailwind portfolio that constructs my creativity, coding skills, design sense, and YouTube API integration to create better working react-apps in future.",
      link: null,
      tech: ["React", "TailwindCSS", "JavaScript", "YouTube API Handling"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b14] via-[#131325] to-[#1b1b38] text-gray-200 py-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-bl from-purple-600/20 to-amber-500/20 rounded-full blur-3xl animate-pulse delay-300"></div>

      <div className="text-center mb-14 relative z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(251,146,60,0.8)]">
          ⚡ Projects
        </h1>
        <p className="text-gray-400 mt-6">
          A growing collection of my work showcasing my skills in React, TailwindCSS, and API integrations, while learning full stack development.
        </p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:shadow-[0_0_25px_rgba(251,146,60,0.5)] hover:scale-[1.03] transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 opacity-70"></div>
            <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {p.tech.map((t, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full group-hover:bg-orange-500/30 transition-all"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col justify-center items-center bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-500 relative overflow-hidden group">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 opacity-60"></div>
          <div className="w-20 h-20 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-md mb-4 animate-pulse"></div>
          <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-all">
            More Projects Coming Soon 🚀
          </h3>
          <p className="text-sm text-gray-400 mt-2 text-center max-w-[80%]">
            I’m constantly learning, building, and creating while full stack projects are on the way.
          </p>
        </div>
      </div>
    </div>
  )
}
