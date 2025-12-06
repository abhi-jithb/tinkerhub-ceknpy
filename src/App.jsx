import React from "react";

const STATS = [
  { label: "Active Makers", value: 340, color: "bg-thGreen" },
  { label: "Events", value: 92, color: "bg-thCyan" },
  { label: "Members", value: 340, color: "bg-thOrange" },
  { label: "Projects", value: 66, color: "bg-thPurple" },
];

// TODO: update this array when you add more past events
const PAST_EVENTS = [
  {
    title: "Vanakkam Chellom",
    date: "05 Oct 2025",
    mode: "Online",
    link: "https://tinkerhub.org/events/EAE9U84TP5/Vanakkam%20Chellom",
    tagline: "Open conversations and meaningful connections.",
  },
  {
    title: "FutureForge – Awareness for Students and Parents",
    date: "19 Sep 2025",
    mode: "Online",
    link: "https://tinkerhub.org/events/EAE9U84TP5/Vanakkam%20Chellom".replace(
      "Vanakkam%20Chellom",
      ""
    ), // replace with actual FutureForge link when confirmed
    tagline: "Importance of skills, hackathons, and community building.",
  },
  {
    title: "C – Part 2",
    date: "Past",
    mode: "Offline",
    link: "https://tinkerhub.org/events/2N982BRPG0/c-part-2",
    tagline: "Continuation of C programming basics with more coding practice.",
  },
  {
    title: "കഥ തുടരും....",
    date: "Past",
    mode: "Community event",
    link: "https://tinkerhub.org/events/1WCMC6LUJN",
    tagline: "Storytelling and community-building session.",
  },
];

function StatPill({ label, value, color }) {
  return (
    <div
      className={`${color} text-thDark rounded-full px-4 py-2 shadow-md text-sm sm:text-base font-semibold flex items-center justify-center`}
    >
      <span className="mr-1">{value}</span> {label.toUpperCase()}
    </div>
  );
}

function PastEventCard({ event }) {
  return (
    <a
      href={event.link}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-xl border border-gray-200 bg-white/70 p-4 hover:border-thPurple hover:shadow-lg transition"
    >
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-thDark group-hover:text-thPurple">
            {event.title}
          </h3>
          <span className="text-xs text-gray-500">{event.date}</span>
        </div>
        <p className="text-xs text-gray-500">{event.mode}</p>
        <p className="mt-1 text-sm text-gray-700">{event.tagline}</p>
      </div>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full border-b border-gray-100 bg-white/70 backdrop-blur z-10">
        <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-thGreen via-thCyan to-thPurple" />
            <span className="font-semibold text-sm sm:text-base">
              TinkerHub CEKnpy
            </span>
          </div>
          <div className="hidden sm:flex gap-6 text-sm text-gray-600">
            <a href="#about" className="hover:text-thPurple">
              About
            </a>
            <a href="#events" className="hover:text-thPurple">
              Past Events
            </a>
            <a href="#join" className="hover:text-thPurple">
              Join
            </a>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero */}
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

          {/* Stats pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {STATS.map((s) => (
              <StatPill key={s.label} {...s} />
            ))}
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="max-w-4xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-[3fr,2fr]"
        >
          <div>
            <h2 className="text-xl font-semibold mb-2">What we do</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              TinkerHub CEKnpy is the campus chapter of TinkerHub Foundation at
              College of Engineering Karunagappally, building a hands-on learning
              culture around software, hardware, AI, and creative tech.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mt-3">
              We run peer-led sessions, hackathons, and project sprints to help
              students move from tutorials to real-world projects, while staying
              connected to the larger TinkerHub network across Kerala.
            </p>
          </div>
          <div className="rounded-2xl bg-white/80 border border-gray-100 p-4 flex flex-col justify-between">
            <p className="text-xs font-medium text-gray-500 mb-2">
              Snapshot
            </p>
            <p className="text-sm text-gray-800">
              340+ makers, 90+ events, and 60+ projects built as part of the
              TinkerHub journey so far.
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

        {/* Past Events */}
        <section id="events" className="bg-white/60 border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Past Events</h2>
              <a
                href="https://tinkerhub.org/campus/2607/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-thPurple hover:underline"
              >
                See all on tinkerhub.org
              </a>
            </div>
            <p className="text-sm text-gray-600 mb-5">
              A glimpse of the learning spaces, hackathons, and community
              gatherings hosted by TinkerHub CEKnpy.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {PAST_EVENTS.map((e) => (
                <PastEventCard key={e.title} event={e} />
              ))}
            </div>
          </div>
        </section>

        {/* Join section */}
        <section id="join" className="max-w-4xl mx-auto px-4 py-10 text-center">
          <h2 className="text-xl font-semibold mb-3">Join the community</h2>
          <p className="text-sm text-gray-700 max-w-xl mx-auto mb-4">
            Want to learn by building things, not just by reading slides? Join
            the TinkerHub CEKnpy community and get updates on upcoming events,
            projects, and opportunities.
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
              href="https://t.me" // replace with your Telegram/WhatsApp/Discord
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 text-sm font-medium px-6 py-2 hover:border-thPurple hover:text-thPurple transition"
            >
              Join our community space
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white/70">
        <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} TinkerHub CEKnpy</span>
          <span>Built with React & Tailwind</span>
        </div>
      </footer>
    </div>
  );
}
