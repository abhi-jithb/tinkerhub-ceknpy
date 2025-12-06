import React from "react";
import { Link } from "react-router-dom";

export default function MakerCard({ maker }) {
  const initials = maker.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  return (
    <Link
      to={`/top-makers/${maker.slug}`}
      className="rounded-2xl border border-gray-200 bg-white/80 p-4 hover:border-thPurple hover:shadow-md transition flex flex-col"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-thGreen via-thCyan to-thPurple flex items-center justify-center text-xs font-semibold text-thDark">
          {initials}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-thDark">{maker.name}</h3>
          <p className="text-xs text-gray-500">{maker.title}</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2">{maker.batch}</p>
      {maker.highlightProject && (
        <p className="text-xs text-gray-700 mt-2">
          Highlight project:{" "}
          <span className="font-medium">{maker.highlightProject}</span>
        </p>
      )}
      {maker.tags?.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {maker.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-1 rounded-full bg-gray-100 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <span className="mt-3 text-[11px] text-thPurple font-medium">
        View story →
      </span>
    </Link>
  );
}
