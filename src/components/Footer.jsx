import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white/70 mt-10">
      <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} TinkerHub CEKnpy</span>
        <div className="flex items-center gap-3">
          <a
            href="https://tinkerhub.org/campus/2607/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-thPurple"
          >
            Official campus page
          </a>
          <span className="text-gray-300">•</span>
          <span>Built with React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
