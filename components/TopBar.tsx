import ThemeToggle from "./ThemeToggle";

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
        <h1 className="font-display text-2xl font-bold text-ink">{title}</h1>
        {subtitle && <p className="text-slate text-sm mt-1">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
