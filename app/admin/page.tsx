"use client";

import { useMemo, useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import AdminTabs from "@/components/AdminTabs";
import { complianceRecords, companies } from "@/lib/mock-data";
import { usePersona } from "@/lib/persona-context";

function statusColor(status: string) {
  if (status === "Completed") return "text-ledger";
  if (status === "In progress") return "text-brand";
  return "text-slate";
}

export default function AdminRecords() {
  const { persona } = usePersona();
  const [companyFilter, setCompanyFilter] = useState("All companies");

  const filtered = useMemo(
    () =>
      complianceRecords.filter(
        (r) => companyFilter === "All companies" || r.company === companyFilter
      ),
    [companyFilter]
  );

  return (
    <div className="flex min-h-screen">
      <Sidebar active="/admin" />

      <div className="flex-1">
        <TopBar
          title={`Admin Console — ${persona.name}`}
          subtitle="Completion status across all staff"
        />
        <AdminTabs />

        <main className="p-6 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <select
              value={companyFilter}
              onChange={(e) => setCompanyFilter(e.target.value)}
              className="border border-hairline bg-surface rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand"
            >
              <option>All companies</option>
              {companies.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <button className="text-xs font-medium border border-hairline rounded-lg px-4 py-2 hover:border-brand hover:text-brand transition-colors">
              Export CSV
            </button>
          </div>

          <p className="text-slate text-sm mb-3">{filtered.length} records shown</p>

          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs font-semibold text-slate text-left bg-paper/60">
                  <th className="py-3 px-5">Staff member</th>
                  <th className="py-3 px-5">Company</th>
                  <th className="py-3 px-5">Course</th>
                  <th className="py-3 px-5">Status</th>
                  <th className="py-3 px-5">Last active</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r, i) => (
                  <tr key={i} className="border-t border-hairline">
                    <td className="py-3.5 px-5 text-ink">{r.user}</td>
                    <td className="py-3.5 px-5 text-slate">{r.company}</td>
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
