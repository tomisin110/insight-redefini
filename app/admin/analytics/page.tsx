"use client";

import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import AdminTabs from "@/components/AdminTabs";
import { courseAnalytics, staffAccounts } from "@/lib/mock-data";

export default function AnalyticsPage() {
  const totalStaff = staffAccounts.filter((u) => u.role === "staff").length;
  const activeStaff = staffAccounts.filter((u) => u.role === "staff" && u.status === "active").length;
  const avgCompletion =
    Math.round(
      (courseAnalytics.reduce((sum, c) => sum + c.completionRate, 0) / courseAnalytics.length) * 10
    ) / 10;
  const avgDays =
    Math.round(
      (courseAnalytics.reduce((sum, c) => sum + c.avgCompletionDays, 0) / courseAnalytics.length) * 10
    ) / 10;

  return (
    <div className="flex min-h-screen">
      <Sidebar active="/admin" />

      <div className="flex-1">
        <TopBar title="Analytics" subtitle="Engagement and completion across the company" />
        <AdminTabs />

        <main className="p-6 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="card p-5">
              <div className="font-display text-3xl font-bold text-ink">{totalStaff}</div>
              <div className="text-xs text-slate mt-1">Total staff</div>
            </div>
            <div className="card p-5">
              <div className="font-display text-3xl font-bold text-ledger">{activeStaff}</div>
              <div className="text-xs text-slate mt-1">Active this month</div>
            </div>
            <div className="card p-5">
              <div className="font-display text-3xl font-bold text-brand">{avgCompletion}%</div>
              <div className="text-xs text-slate mt-1">Avg. completion rate</div>
            </div>
            <div className="card p-5">
              <div className="font-display text-3xl font-bold text-ink">{avgDays}d</div>
              <div className="text-xs text-slate mt-1">Avg. time to complete</div>
            </div>
          </div>

          <section className="card p-6 mb-8">
            <h2 className="text-sm font-semibold text-ink mb-5">Completion rate by course</h2>
            <div className="space-y-4">
              {courseAnalytics.map((c) => (
                <div key={c.slug}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-ink">{c.title}</span>
                    <span className="text-slate">{c.completionRate}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-hairline rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand rounded-full"
                      style={{ width: `${c.completionRate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="card overflow-hidden">
            <div className="p-6 pb-0">
              <h2 className="text-sm font-semibold text-ink mb-1">Average time to complete</h2>
              <p className="text-xs text-slate mb-4">Days from enrollment to completion, by course</p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs font-semibold text-slate text-left bg-paper/60">
                  <th className="py-3 px-6">Course</th>
                  <th className="py-3 px-6">Enrolled</th>
                  <th className="py-3 px-6">Completion rate</th>
                  <th className="py-3 px-6">Avg. days to complete</th>
                </tr>
              </thead>
              <tbody>
                {courseAnalytics.map((c) => (
                  <tr key={c.slug} className="border-t border-hairline">
                    <td className="py-3.5 px-6 text-ink">{c.title}</td>
                    <td className="py-3.5 px-6 text-slate">{c.enrolled}</td>
                    <td className="py-3.5 px-6 text-slate">{c.completionRate}%</td>
                    <td className="py-3.5 px-6 text-slate">{c.avgCompletionDays} days</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}
