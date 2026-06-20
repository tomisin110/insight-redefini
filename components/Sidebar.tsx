import Link from "next/link";

const links = [
  { href: "/dashboard", label: "My Training", index: "01" },
  { href: "/instructor", label: "Instructor Desk", index: "02" },
  { href: "/admin", label: "Compliance Records", index: "03" },
];

export default function Sidebar({ active }: { active: string }) {
  return (
    <aside className="w-64 shrink-0 border-r border-hairline bg-paper px-6 py-8 hidden md:flex md:flex-col md:justify-between">
      <div>
        <Link href="/dashboard" className="block mb-12">
          <img src="/logo.png" alt="Insight Redefini" className="h-12 w-auto" />
        </Link>

        <nav className="space-y-1">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-ink text-paper"
                    : "text-slate hover:text-ink hover:bg-hairline/40"
                }`}
              >
                <span className="font-mono text-[10px] opacity-60">{link.index}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-hairline pt-4">
        <div className="text-sm text-ink">Adaeze Okonkwo</div>
        <div className="font-mono text-[10px] uppercase tracking-wide text-slate mt-0.5">
          Customer Operations
        </div>
      </div>
    </aside>
  );
}
