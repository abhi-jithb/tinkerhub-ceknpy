import React from "react";

export default function TeamCard({ member }) {
  const initials = member.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white/80 p-4 flex flex-col items-center text-center hover:shadow-md hover:border-thPurple transition">
      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-thGreen via-thCyan to-thPurple flex items-center justify-center text-sm font-semibold text-thDark mb-3">
        {initials}
      </div>
      <h3 className="text-sm font-semibold text-thDark">{member.name}</h3>
      <p className="text-xs text-gray-500 mt-1">{member.role}</p>

      {member.socials && (
        <div className="flex gap-3 mt-3 text-xs text-thPurple">
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          )}
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}
