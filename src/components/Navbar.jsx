import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/events", label: "Events" },
  { to: "/projects", label: "Projects" },
  { to: "/top-makers", label: "Top Makers" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "block px-3 py-2 text-sm rounded-full transition hover:text-thPurple";

  return (
    <header className="w-full border-b border-gray-100 bg-white/70 backdrop-blur z-20 sticky top-0">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-thGreen via-thCyan to-thPurple" />
          <span className="font-semibold text-sm sm:text-base">
            TinkerHub CEKnpy
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-5 text-sm text-gray-600">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? "text-thPurple font-medium bg-thLight" : ""
                }`
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 bg-white/60 text-thDark hover:border-thPurple transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          <span className="relative block w-4 h-3">
            <span
              className={`absolute left-0 top-0 h-[2px] w-full rounded bg-thDark transition-transform duration-200 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-[2px] w-full rounded bg-thDark transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full rounded bg-thDark transition-transform duration-200 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`sm:hidden border-t border-gray-100 bg-white/95 backdrop-blur transform transition-transform duration-200 origin-top ${
          open ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-1 text-sm text-gray-700">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? "text-thPurple font-medium bg-thLight" : ""
                }`
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
