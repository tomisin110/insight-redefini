"use client";

import Link from "next/link";
import { usePersona } from "@/lib/persona-context";

const allLinks = [
  { href: "/dashboard", label: "My Training", roles: ["staff", "instructor", "admin"] },
  { href: "/instructor", label: "Instructor Desk", roles: ["instructor", "admin"] },
  { href: "/admin", label: "Admin Console", roles: ["admin"] },
];

export default function Sidebar({ active }: { active: string }) {
  const { persona } = usePersona();
  const links = allLinks.filter((l) => l.roles.includes(persona.role));

  return (
    <aside className="w-64 shrink-0 border-r border-hairline bg-surface px-6 py-8 hidden md:flex md:flex-col md:justify-between">
      <div>
        <Link href="/dashboard" className="block mb-10">
          <img src="/logo.png" alt="Insight Redefini" className="h-11 w-auto" />
        </Link>

        <nav className="space-y-1">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors ${
                  isActive
                    ? "bg-brand text-white font-medium"
                    : "text-slate hover:text-ink hover:bg-hairline/40"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <Link
        href="/"
        className="flex items-center gap-3 border-t border-hairline pt-4 hover:opacity-80 transition-opacity"
      >
        <span
          className={`w-8 h-8 rounded-full ${persona.avatarColor} text-white text-xs font-semibold flex items-center justify-center shrink-0`}
        >
          {persona.initials}
        </span>
        <div>
          <div className="text-sm text-ink leading-tight">{persona.name}</div>
          <div className="text-[11px] uppercase tracking-wide text-slate mt-0.5 capitalize">
            {persona.role}
          </div>
        </div>
      </Link>
    </aside>
  );
}
