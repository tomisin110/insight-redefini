export default function TopBar({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="border-b border-hairline px-6 md:px-10 py-6 flex items-center justify-between">
      <div>
        <h1 className="font-display text-2xl text-ink">{title}</h1>
        {subtitle && <p className="text-slate text-sm mt-1">{subtitle}</p>}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate text-right">
        Confidential — Internal Use Only
        <div className="text-ink/70 mt-0.5">
          {new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </div>
      </div>
    </header>
  );
}
