export default function ProgressBar({ value }: { value: number }) {
  const color = value === 100 ? "bg-ledger" : value === 0 ? "bg-hairline" : "bg-brand";

  return (
    <div>
      <div className="h-2 w-full bg-hairline rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${value}%` }} />
      </div>
      <div className="flex justify-between mt-1.5">
        <span className="text-xs font-medium text-ink">{value}%</span>
        <span className="text-xs text-slate">
          {value === 100 ? "Completed" : value === 0 ? "Not started" : "In progress"}
        </span>
      </div>
    </div>
  );
}
