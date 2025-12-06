import React from "react";

const PAST_EVENTS_PREVIEW = [
  {
    title: "Vanakkam Chellom",
    date: "05 Oct 2025",
    mode: "Online",
    link: "https://tinkerhub.org/events/EAE9U84TP5/Vanakkam%20Chellom",
  },
  {
    title: "FutureForge – Awareness for Students & Parents",
    date: "19 Sep 2025",
    mode: "Online",
    link: "https://tinkerhub.org/events/8NTWABESNX/tinkerhub-campus-chapter-2025-26-selection-camp-thiruvananthapuram",
  },
];

function MiniEventCard({ event }) {
  return (
    <a
      href={event.link}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-xl border border-gray-200 bg-white/70 p-3 hover:border-thPurple hover:shadow-md transition text-left"
    >
      <h3 className="text-sm font-semibold text-thDark group-hover:text-thPurple">
        {event.title}
      </h3>
      <p className="text-xs text-gray-500 mt-1">
        {event.date} • {event.mode}
      </p>
    </a>
  );
}

export default function PastEventsPreview() {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Recent events</h2>
        <a
          href="/events"
          className="text-xs text-thPurple hover:underline"
        >
          View all events
        </a>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {PAST_EVENTS_PREVIEW.map((e) => (
          <MiniEventCard key={e.title} event={e} />
        ))}
      </div>
    </section>
  );
}
