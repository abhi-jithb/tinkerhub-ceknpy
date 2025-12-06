import React from "react";
import EventCard from "./EventCard.jsx";

export default function EventSection({ title, subtitle, events }) {
  if (!events?.length) return null;

  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        {subtitle && (
          <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
        )}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {events.map((e) => (
          <EventCard key={e.title} event={e} />
        ))}
      </div>
    </section>
  );
}
