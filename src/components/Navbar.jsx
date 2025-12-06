    import React from "react";
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
  return (
    <header className="w-full border-b border-gray-100 bg-white/70 backdrop-blur z-10">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-thGreen via-thCyan to-thPurple" />
          <span className="font-semibold text-sm sm:text-base">
            TinkerHub CEKnpy
          </span>
        </div>

        <div className="hidden sm:flex gap-5 text-sm text-gray-600">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `hover:text-thPurple ${
                  isActive ? "text-thPurple font-medium" : ""
                }`
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
