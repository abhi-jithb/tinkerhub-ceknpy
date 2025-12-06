// src/pages/MakerProfilePage.jsx
import React, { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { MAKERS } from "../data/makers.js";
import { ALL_PROJECTS } from "../data/projects.js";
import ProjectCard from "../components/projects/ProjectCard.jsx";

export default function MakerProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const maker = useMemo(
    () => MAKERS.find((m) => m.slug === id),
    [id]
  );

  const makerProjects = useMemo(() => {
    if (!maker) return [];
    return ALL_PROJECTS.filter((p) => maker.projects?.includes(p.title));
  }, [maker]);

  if (!maker) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="text-sm text-gray-700 mb-4">
          Maker not found. Maybe this profile moved or the link is wrong.
        </p>
        <button
          onClick={() => navigate("/top-makers")}
          className="text-xs text-thPurple hover:underline"
        >
          Back to top makers
        </button>
      </div>
    );
  }

  const initials = maker.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      {/* Hero */}
      <section className="flex flex-col md:flex-row gap-6 md:items-center">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-thGreen via-thCyan to-thPurple flex items-center justify-center text-xl font-semibold text-thDark">
          {initials}
        </div>
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-1">
            Top maker
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold">
            {maker.name}
          </h1>
          <p className="text-sm text-gray-700 mt-1">
            {maker.title} • {maker.batch}
          </p>
          {maker.highlightProject && (
            <p className="text-sm text-gray-700 mt-2">
              Highlight project:{" "}
              <span className="font-medium">{maker.highlightProject}</span>
            </p>
          )}
          <div className="flex flex-wrap gap-2 mt-3 text-xs">
            {maker.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-full bg-gray-100 text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mt-3 text-xs text-thPurple">
            {maker.links?.github && (
              <a
                href={maker.links.github}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            )}
            {maker.links?.linkedin && (
              <a
                href={maker.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Story */}
      <section>
        <h2 className="text-lg font-semibold mb-2">Story</h2>
        <p className="text-sm text-gray-700">
          {maker.bio}
        </p>
      </section>

      {/* Projects */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Projects</h2>
          <Link
            to="/projects"
            className="text-xs text-thPurple hover:underline"
          >
            Browse all projects
          </Link>
        </div>
        {makerProjects.length === 0 ? (
          <p className="text-sm text-gray-700">
            Projects for this maker will be added soon. Check back later as we
            document more builds from the CEKnpy community. [web:12]
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {makerProjects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        )}
      </section>

      {/* Back link */}
      <section>
        <button
          onClick={() => navigate("/top-makers")}
          className="text-xs text-thPurple hover:underline"
        >
          ← Back to top makers
        </button>
      </section>
    </div>
  );
}
