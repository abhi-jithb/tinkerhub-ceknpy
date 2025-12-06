import React, { useState } from "react";

export default function YearAccordion({ journey }) {
  const [openYear, setOpenYear] = useState(journey[0]?.year);

  return (
    <div className="space-y-3">
      {journey.map((entry) => {
        const isOpen = openYear === entry.year;
        return (
          <div
            key={entry.year}
            className="border border-gray-200 rounded-xl bg-white/70 overflow-hidden"
          >
            <button
              onClick={() => setOpenYear(isOpen ? null : entry.year)}
              className="w-full flex items-center justify-between px-4 py-3 text-left"
            >
              <div>
                <p className="text-sm font-semibold text-thDark">
                  {entry.year}
                </p>
                {entry.lead && (
                  <p className="text-xs text-gray-500">
                    Campus Lead: {entry.lead}
                  </p>
                )}
              </div>
              <span className="text-gray-400 text-lg">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 pt-1 text-sm text-gray-700 space-y-3">
                {entry.highlights?.length > 0 && (
                  <div>
                    <p className="font-medium mb-1">Highlights</p>
                    <ul className="list-disc list-inside space-y-1">
                      {entry.highlights.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {entry.topProjects?.length > 0 && (
                  <div>
                    <p className="font-medium mb-1">Top projects</p>
                    <ul className="list-disc list-inside space-y-1">
                      {entry.topProjects.map((p, idx) => (
                        <li key={idx}>
                          <span className="font-semibold">{p.title}</span>
                          {p.summary ? ` – ${p.summary}` : ""}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {entry.team?.length > 0 && (
                  <div>
                    <p className="font-medium mb-1">Leadership team</p>
                    <ul className="list-disc list-inside space-y-1">
                      {entry.team.map((m, idx) => (
                        <li key={idx}>
                          {m.name}
                          {m.role ? ` – ${m.role}` : ""}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
