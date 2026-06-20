import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { complianceRecords } from "@/lib/mock-data";

function statusColor(status: string) {
  if (status === "Completed") return "text-ledger";
  if (status === "In progress") return "text-brand";
  return "text-slate";
}

export default function AdminRecords() {
  return (
    <div className="flex min-h-screen">
      <Sidebar active="/admin" />

      <div className="flex-1">
        <TopBar title="Compliance Records" subtitle="Completion status across all staff" />

        <main className="p-6 md:p-10">
          <div className="flex items-center justify-between mb-6">
            <p className="text-slate text-sm">
              {complianceRecords.length} records shown
            </p>
            <button className="font-mono text-[10px] uppercase tracking-wide border border-hairline px-4 py-2 hover:border-ink transition-colors">
              Export CSV
            </button>
          </div>

          <table className="w-full text-sm border-t border-hairline">
            <thead>
              <tr className="font-mono text-[10px] uppercase tracking-wide text-slate text-left">
                <th className="py-3 font-normal">Staff member</th>
                <th className="py-3 font-normal">Department</th>
                <th className="py-3 font-normal">Course</th>
                <th className="py-3 font-normal">Status</th>
                <th className="py-3 font-normal">Last active</th>
              </tr>
            </thead>
            <tbody>
              {complianceRecords.map((r, i) => (
                <tr key={i} className="border-t border-hairline">
                  <td className="py-3.5 text-ink">{r.user}</td>
                  <td className="py-3.5 text-slate">{r.department}</td>
                  <td className="py-3.5 text-ink">{r.course}</td>
                  <td className={`py-3.5 ${statusColor(r.status)}`}>{r.status}</td>
                  <td className="py-3.5 font-mono text-[11px] text-slate">{r.lastActive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
