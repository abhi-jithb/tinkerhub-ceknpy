import React from "react";

export default function ProjectCard({ project, featured = false }) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white/80 p-4 flex flex-col justify-between hover:border-thPurple hover:shadow-md transition ${
        featured ? "md:row-span-2" : ""
      }`}
    >
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500">
          {project.type} • {project.year}
        </p>
        <h3 className="text-sm font-semibold text-thDark mt-1">
          {project.title}
        </h3>
        <p className="text-sm text-gray-700 mt-2">{project.summary}</p>
        {project.tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-1 rounded-full bg-gray-100 text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-3 text-xs text-thPurple hover:underline self-start"
        >
          View project
        </a>
      )}
    </div>
  );
}
