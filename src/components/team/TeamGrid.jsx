import React from "react";
import TeamCard from "./TeamCard.jsx";

export default function TeamGrid({ team }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {team.map((member) => (
        <TeamCard key={member.name} member={member} />
      ))}
    </div>
  );
}
