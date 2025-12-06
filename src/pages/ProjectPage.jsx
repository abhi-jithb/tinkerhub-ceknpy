import React, { useState, useMemo } from "react";
import ProjectCard from "../components/projects/ProjectCard.jsx";
import ProjectFilterBar from "../components/projects/ProjectFilterBar.jsx";
import { FEATURED_PROJECTS, ALL_PROJECTS } from "../data/projects.js";

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => p.tags?.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <section>
        <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-2">
          Projects
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold mb-3">
          Things we&apos;ve built
        </h1>
        <p className="text-sm text-gray-700 mb-2">
          From safety devices and AI companions to wonderfully useless apps,
          projects are how CEKnpy members learn new stacks and ship ideas into
          the real world. [web:12][web:61]
        </p>
        <p className="text-sm text-gray-700">
          Many of these came out of hackathons like Useless Projects and
          Tink-Her-Hack, where the only rule is to build and document something
          you&apos;re excited about. [web:61][web:82]
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h2 className="text-lg font-semibold">Featured projects</h2>
          <ProjectFilterBar activeTag={activeTag} onChange={setActiveTag} />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {FEATURED_PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} featured />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">All projects</h2>
          <a
            href="https://tinkerhub.org/campus/2607/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-thPurple hover:underline"
          >
            View full project gallery
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
