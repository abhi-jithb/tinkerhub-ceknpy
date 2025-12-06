import React from "react";
import AnnouncementBanner from "../components/home/AnnouncementBanner.jsx";
import StatsPills from "../components/home/StatsPills.jsx";
import PastEventsPreview from "../components/home/PastEventsPreview.jsx";

export default function HomePage() {
  return (
    <>
      <AnnouncementBanner />

      <section className="max-w-5xl mx-auto px-4 pt-10 pb-8 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-3">
          TinkerHub Campus Chapter
        </p>
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-thDark leading-tight">
          College of Engineering,
          <br />
          Karunagappally
        </h1>
        <p className="mt-3 inline-flex items-center gap-2 text-sm text-emerald-600 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Active
        </p>

        <StatsPills />
      </section>

      <section
        id="about-snippet"
        className="max-w-4xl mx-auto px-4 pb-8 grid gap-6 md:grid-cols-[3fr,2fr]"
      >
        <div>
          <h2 className="text-xl font-semibold mb-2">What we do</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            TinkerHub CEKnpy is the campus chapter of TinkerHub Foundation at
            College of Engineering Karunagappally, building a hands-on learning
            culture around software, hardware, AI, and creative tech. [web:12]
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            We run peer-led sessions, hackathons, and project sprints to help
            students move from tutorials to real-world projects, while staying
            connected to the larger TinkerHub network across Kerala. [web:1][web:6]
          </p>
          <a
            href="/about"
            className="inline-flex items-center text-xs text-thPurple mt-3 hover:underline"
          >
            Explore our journey →
          </a>
        </div>
        <div className="rounded-2xl bg-white/80 border border-gray-100 p-4 flex flex-col justify-between">
          <p className="text-xs font-medium text-gray-500 mb-2">
            Snapshot
          </p>
          <p className="text-sm text-gray-800">
            340+ makers, 90+ events, and 60+ projects built as part of the
            TinkerHub CEKnpy journey so far. [web:12]
          </p>
          <a
            href="https://tinkerhub.org/campus/2607/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-full bg-thPurple text-white text-xs px-4 py-2 hover:bg-purple-600 transition"
          >
            View official TinkerHub page
          </a>
        </div>
      </section>

      <section className="bg-white/60 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <PastEventsPreview />
        </div>
      </section>

      <section id="join-snippet" className="max-w-4xl mx-auto px-4 py-10 text-center">
        <h2 className="text-xl font-semibold mb-3">Join the community</h2>
        <p className="text-sm text-gray-700 max-w-xl mx-auto mb-4">
          Install the TinkerHub app, get a vouch from an existing member, and
          plug into a statewide network of makers, mentors, and opportunities. [web:1][web:2]
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://tinkerhub.org"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-thCyan text-thDark text-sm font-medium px-6 py-2 hover:bg-cyan-300 transition"
          >
            Join via TinkerHub portal
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 text-sm font-medium px-6 py-2 hover:border-thPurple hover:text-thPurple transition"
          >
            How to join CEKnpy →
          </a>
        </div>
      </section>
    </>
  );
}
