import React from "react";

const STATS = [
  { label: "Active Makers", value: 340, color: "bg-thGreen" },
  { label: "Events", value: 92, color: "bg-thCyan" },
  { label: "Members", value: 340, color: "bg-thOrange" },
  { label: "Projects", value: 66, color: "bg-thPurple" },
];

function StatPill({ label, value, color }) {
  return (
    <div
      className={`${color} text-thDark rounded-full px-4 py-2 shadow-md text-sm sm:text-base font-semibold flex items-center justify-center`}
    >
      <span className="mr-1">{value}</span>
      {label.toUpperCase()}
    </div>
  );
}

export default function StatsPills() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      {STATS.map((s) => (
        <StatPill key={s.label} {...s} />
      ))}
    </div>
  );
}
