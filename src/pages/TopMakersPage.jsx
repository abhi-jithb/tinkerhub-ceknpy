import React from "react";
import MakerGrid from "../components/makers/MakerGrid.jsx";
import { MAKERS } from "../data/makers.js";

export default function TopMakersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <section>
        <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-2">
          Top makers
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold mb-3">
          Stories behind the builds
        </h1>
        <p className="text-sm text-gray-700 mb-2">
          This space highlights makers who consistently build, share, and help
          others learn—through projects, mentoring, and leadership roles at
          CEKnpy. [web:24][web:13]
        </p>
        <p className="text-sm text-gray-700">
          Each profile links their projects and journey so new students can see
          what is possible when you stay curious and keep shipping.
        </p>
      </section>

      <section>
        <MakerGrid makers={MAKERS} />
      </section>
    </div>
  );
}
