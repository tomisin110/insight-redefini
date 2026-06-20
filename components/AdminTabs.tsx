"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/admin", label: "Compliance" },
  { href: "/admin/users", label: "Users & Access" },
  { href: "/admin/analytics", label: "Analytics" },
  { href: "/admin/leaderboard", label: "Leaderboard" },
];

export default function AdminTabs() {
  const pathname = usePathname();

  return (
    <div className="flex gap-1 border-b border-hairline px-6 md:px-10 -mt-px overflow-x-auto">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
              isActive
                ? "border-brand text-brand"
                : "border-transparent text-slate hover:text-ink"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
