import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden p-6">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500/30 rounded-full mix-blend-screen blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-purple-600/30 rounded-full mix-blend-screen blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-purple-500/10 animate-[bgMove_10s_infinite_alternate]"></div>

      <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20 transform transition-all duration-700 hover:-translate-y-1 hover:shadow-orange-400/30 hover:shadow-lg flex flex-col justify-center">
          <div className="border-b border-orange-400/40 pb-4 mb-4">
            <h1 className="text-4xl font-extrabold text-white leading-tight mb-2">
              Shresth Tiwari
            </h1>
            <p className="text-gray-300 text-base">
              Pursuing Bachelors degree at <span className="font-semibold text-orange-400"> CSJM University</span>
            </p>
          </div>

          {[
            {
              icon: (
                <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0L6.343 16.657a8 8 0 1111.314 0z" />
              ),
              label: "CSJM University, Kanpur",
            },
            {
              icon: (
                <path d="M3 5a2 2 0 012-2h3.28l1.498 4.493-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257 4.493 1.498V19a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
              ),
              label: "Soon to be shared...",
            },
            {
              icon: (
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              ),
              label: "shresthwithouta@gmail.com",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center text-gray-300 mb-3 group hover:text-orange-400 transition"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform"
              >
                {item.icon}
              </svg>
              <span className="ml-3 text-md font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        <form className="p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20 transform transition-all duration-700 hover:-translate-y-1 hover:shadow-purple-400/30 hover:shadow-lg flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
            Fill This Form to Contact Me
          </h2>

          {[
            { id: "name", label: "Full Name", type: "text", placeholder: "Enter Your Name" },
            { id: "email", label: "Email", type: "email", placeholder: "you@gmail.com" },
            { id: "tel", label: "Phone", type: "tel", placeholder: "+91" },
          ].map((input) => (
            <div key={input.id} className="flex flex-col mb-5">
              <label
                htmlFor={input.id}
                className="text-sm text-gray-400 mb-1 tracking-wide"
              >
                {input.label}
              </label>
              <input
                type={input.type}
                id={input.id}
                name={input.id}
                placeholder={input.placeholder}
                className="py-3 px-4 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 hover:border-orange-500"
              />
            </div>
          ))}

          <button
            type="submit"
            className="relative bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-orange-400/60 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
          >
            <span className="relative z-10">Send Message</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-500 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
          </button>
        </form>
      </div>

      <style>{`
        @keyframes bgMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
