"use client";

import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { complianceRecords } from "@/lib/mock-data";
import { usePersona } from "@/lib/persona-context";

function statusColor(status: string) {
  if (status === "Completed") return "text-ledger";
  if (status === "In progress") return "text-brand";
  return "text-slate";
}

export default function AdminRecords() {
  const { persona } = usePersona();

  return (
    <div className="flex min-h-screen">
      <Sidebar active="/admin" />

      <div className="flex-1">
        <TopBar
          title={`Admin Console — ${persona.name}`}
          subtitle="Completion status across all staff"
        />

        <main className="p-6 md:p-10">
          <div className="flex items-center justify-between mb-6">
            <p className="text-slate text-sm">{complianceRecords.length} records shown</p>
            <button className="text-xs font-medium border border-hairline rounded-lg px-4 py-2 hover:border-brand hover:text-brand transition-colors">
              Export CSV
            </button>
          </div>

          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs font-semibold text-slate text-left bg-paper/60">
                  <th className="py-3 px-5">Staff member</th>
                  <th className="py-3 px-5">Department</th>
                  <th className="py-3 px-5">Course</th>
                  <th className="py-3 px-5">Status</th>
                  <th className="py-3 px-5">Last active</th>
                </tr>
              </thead>
              <tbody>
                {complianceRecords.map((r, i) => (
                  <tr key={i} className="border-t border-hairline">
                    <td className="py-3.5 px-5 text-ink">{r.user}</td>
                    <td className="py-3.5 px-5 text-slate">{r.department}</td>
                    <td className="py-3.5 px-5 text-ink">{r.course}</td>
                    <td className={`py-3.5 px-5 font-medium ${statusColor(r.status)}`}>{r.status}</td>
                    <td className="py-3.5 px-5 text-xs text-slate">{r.lastActive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
