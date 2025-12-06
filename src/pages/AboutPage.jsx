import React from "react";
import YearAccordion from "../components/about/YearAccordian.jsx";
import { CEKNPY_JOURNEY } from "../data/history.js";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      {/* Intro */}
      <section>
        <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-2">
          About
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold mb-3">
          TinkerHub CEKnpy journey
        </h1>
        <p className="text-sm text-gray-700 mb-2">
          TinkerHub is a nonprofit initiative that builds peer learning
          communities where students learn technology by building real projects
          instead of only attending lectures. [web:1][web:6]
        </p>
        <p className="text-sm text-gray-700">
          As a campus chapter at College of Engineering Karunagappally, CEKnpy
          has been active since 2021, running cohorts, hackathons, and learning
          circles that connect students with the wider maker network in Kerala. [web:12]
        </p>
      </section>

      {/* Year-wise timeline */}
      <section>
        <h2 className="text-xl font-semibold mb-2">
          Journey from 2021 onwards
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Click on a year to see the core team, top projects, and milestones
          that made that season special.
        </p>
        <YearAccordion journey={CEKNPY_JOURNEY} />
      </section>

      {/* Campus + foundation context */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white/80 border border-gray-100 p-4">
          <h3 className="text-sm font-semibold mb-2">
            Campus structure & roles
          </h3>
          <p className="text-sm text-gray-700 mb-2">
            Each campus chapter follows TinkerHub&apos;s structure with roles
            like Campus Lead, Learning Coordinator, Outreach Lead, WIT Lead, and
            First Year Coordinator to keep learning spaces consistent and
            student-led. [web:60][web:64]
          </p>
          <a
            href="https://wiki.tinkerhub.org/campus-community/campus-communities/campus-structure"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-thPurple hover:underline"
          >
            Learn more about campus structure
          </a>
        </div>

        <div className="rounded-2xl bg-white/80 border border-gray-100 p-4">
          <h3 className="text-sm font-semibold mb-2">
            Part of a larger network
          </h3>
          <p className="text-sm text-gray-700 mb-2">
            CEKnpy is one node in a network of dozens of TinkerHub campuses
            across Kerala, all sharing resources, programs, and events through
            the main foundation. [web:8][web:2]
          </p>
          <a
            href="https://tinkerhub.org/campus/all"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-thPurple hover:underline"
          >
            View other TinkerHub campuses
          </a>
        </div>
      </section>
    </div>
  );
}
