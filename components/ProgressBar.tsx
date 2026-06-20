export default function ProgressBar({ value }: { value: number }) {
  const color =
    value === 100 ? "bg-ledger" : value === 0 ? "bg-hairline" : "bg-brand";

  return (
    <div>
      <div className="h-[3px] w-full bg-hairline">
        <div
          className={`h-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <div className="flex justify-between mt-1.5">
        <span className="font-mono text-[10px] text-slate">{value}%</span>
        <span className="font-mono text-[10px] text-slate uppercase tracking-wide">
          {value === 100 ? "Completed" : value === 0 ? "Not started" : "In progress"}
        </span>
      </div>
    </div>
  );
}
