import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Contact Me", to: "/contact" },
    { name: "Discord", to: "https://discordapp.com/users/1393442761637625896" },
    { name: "LinkedIn", to: "https://www.linkedin.com/in/shresthwithouta/" },
    { name: "YouTube", to: "/youtube" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-[#08080f] via-[#121225] to-[#1a1a38] backdrop-blur-xl border-b border-orange-500/20 shadow-[0_0_20px_rgba(251,146,60,0.15)]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-16 h-40 w-40 bg-gradient-to-br from-orange-500/40 to-rose-500/30 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-10 right-0 h-48 w-48 bg-gradient-to-bl from-purple-500/30 to-pink-500/30 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <nav className="relative max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-4 relative">
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm.75 15h-1.5V10h1.5v7zm0-9h-1.5V7h1.5v1z" />
            </svg>
          </div>

          <Link to="/" className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 via-amber-200 to-yellow-400 bg-clip-text text-transparent hover:from-orange-500 hover:via-yellow-300 hover:to-white drop-shadow-[0_0_8px_rgba(251,146,60,0.7)] transition-all duration-300">
            Portfolio
          </Link>

          <div className="h-3 w-3 bg-gradient-to-br from-orange-400 to-amber-300 rounded-full shadow-[0_0_15px_rgba(251,146,60,0.8)] animate-pulse"></div>
        </div>

        <ul className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.to.startsWith("http") ? (
                <a
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative transition-all duration-300 hover:text-orange-400 text-gray-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-[-5px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ) : (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative transition-all duration-300 hover:text-orange-400 ${
                      isActive ? "text-orange-400" : "text-gray-300"
                    } after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-[-5px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full`
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 text-2xl hover:text-orange-400 transition-all focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden absolute right-4 top-[72px] w-48 bg-gradient-to-br from-[#13132b] to-[#1f1f3f] border border-orange-400/20 rounded-xl shadow-[0_0_25px_rgba(251,146,60,0.25)] backdrop-blur-md">
          <ul className="flex flex-col items-center py-4 text-gray-300 font-medium space-y-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.to.startsWith("http") ? (
                  <a
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-1 rounded-md text-sm transition-all duration-300 hover:text-orange-400 hover:scale-105 text-gray-300"
                  >
                    {link.name}
                  </a>
                ) : (
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-1 rounded-md text-sm transition-all duration-300 hover:text-orange-400 hover:scale-105 ${
                        isActive ? "text-orange-400" : "text-gray-300"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
