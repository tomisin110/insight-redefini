"use client";

import { useTheme } from "@/lib/theme-context";

export default function ThemeToggle() {
  const { dark, toggleDark } = useTheme();

  return (
    <button
      onClick={toggleDark}
      aria-label="Toggle dark mode"
      className="flex items-center gap-2 border border-hairline rounded-full px-3 py-1.5 text-xs text-slate hover:text-ink hover:border-ink/40 transition-colors"
    >
      <span className="text-base leading-none">{dark ? "🌙" : "☀️"}</span>
      {dark ? "Dark" : "Light"}
    </button>
  );
}
