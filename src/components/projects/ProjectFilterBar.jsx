import React from "react";

const TAG_FILTERS = ["All", "AI", "Web", "Hardware", "Useless Projects", "Safety"];

export default function ProjectFilterBar({ activeTag, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 text-xs">
      {TAG_FILTERS.map((tag) => (
        <button
          key={tag}
          onClick={() => onChange(tag)}
          className={`px-3 py-1 rounded-full border transition ${
            activeTag === tag
              ? "bg-thPurple text-white border-thPurple"
              : "bg-white text-gray-600 border-gray-200 hover:border-thPurple"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
