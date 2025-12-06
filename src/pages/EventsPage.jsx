import React from "react";
import EventSection from "../components/events/EventSection.jsx";
import {
  UPCOMING_EVENTS,
  FLAGSHIP_EVENTS,
  PAST_EVENTS,
} from "../data/events.js";
import EventCard from "../components/events/EventCard.jsx";

export default function EventsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <section>
        <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-2">
          Events
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold mb-3">
          Learning spaces & hackathons
        </h1>
        <p className="text-sm text-gray-700 mb-2">
          Events at TinkerHub CEKnpy range from beginner-friendly study jams to
          intense hackathons and flagship programs run in collaboration with
          the main TinkerHub Foundation. [web:1][web:21]
        </p>
        <p className="text-sm text-gray-700">
          Past events listed here are mirrored from the official campus page,
          while upcoming and flagship events are maintained by the campus team
          so every batch can update the calendar easily. [web:12]
        </p>
      </section>

      <EventSection
        title="Upcoming events"
        subtitle="Things you can join next. Dates and details are updated by the core team."
        events={UPCOMING_EVENTS}
      />

      <EventSection
        title="Flagship events"
        subtitle="Big programs that define the CEKnpy culture every year."
        events={FLAGSHIP_EVENTS}
      />

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Recent past events</h2>
            <p className="text-sm text-gray-600 mt-1">
              A small snapshot of the last few activities. Visit the campus
              page for the full archive. [web:12]
            </p>
          </div>
          <a
            href="https://tinkerhub.org/campus/2607/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-thPurple hover:underline"
          >
            View on tinkerhub.org
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {PAST_EVENTS.map((e) => (
            <EventCard key={e.title} event={e} />
          ))}
        </div>
      </section>
    </div>
  );
}
