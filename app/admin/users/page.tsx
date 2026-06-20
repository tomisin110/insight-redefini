"use client";

import { useMemo, useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import AdminTabs from "@/components/AdminTabs";
import { staffAccounts, StaffAccount, companies, jobRoles } from "@/lib/mock-data";

function statusBadge(status: StaffAccount["status"]) {
  if (status === "active") return "bg-ledger/10 text-ledger";
  if (status === "invited") return "bg-amber-500/10 text-amber-600";
  return "bg-slate/10 text-slate";
}

export default function UsersPage() {
  const [accounts, setAccounts] = useState(staffAccounts);
  const [showCreate, setShowCreate] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [companyFilter, setCompanyFilter] = useState<string>("All companies");
  const [roleFilter, setRoleFilter] = useState<string>("All job roles");

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newCompany, setNewCompany] = useState<string>(companies[0]);
  const [newJobRole, setNewJobRole] = useState<string>(jobRoles[0]);
  const [newRole, setNewRole] = useState<"staff" | "instructor" | "admin">("staff");

  function flash(message: string) {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  }

  function resetPassword(name: string) {
    flash(`Password reset link sent to ${name}.`);
  }

  function toggleSuspend(id: string) {
    setAccounts((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, status: a.status === "suspended" ? "active" : "suspended" } : a
      )
    );
  }

  function createUser(e: React.FormEvent) {
    e.preventDefault();
    if (!newName || !newEmail) return;
    setAccounts((prev) => [
      {
        id: `u${prev.length + 1}`,
        name: newName,
        email: newEmail,
        company: newCompany as any,
        jobRole: newJobRole,
        role: newRole,
        status: "invited",
        coursesCompleted: 0,
        coursesAssigned: 4,
        avgCompletionDays: 0,
        lastLogin: "—",
      },
      ...prev,
    ]);
    flash(`Invitation sent to ${newName} (${newEmail}).`);
    setNewName("");
    setNewEmail("");
    setShowCreate(false);
  }

  const filtered = useMemo(
    () =>
      accounts.filter(
        (a) =>
          (companyFilter === "All companies" || a.company === companyFilter) &&
          (roleFilter === "All job roles" || a.jobRole === roleFilter)
      ),
    [accounts, companyFilter, roleFilter]
  );

  return (
    <div className="flex min-h-screen">
      <Sidebar active="/admin" />

      <div className="flex-1">
        <TopBar title="Users & Access" subtitle="Create accounts, manage roles and passwords" />
        <AdminTabs />

        <main className="p-6 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex flex-wrap gap-2">
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
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="border border-hairline bg-surface rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand"
              >
                <option>All job roles</option>
                {jobRoles.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>
            <button
              onClick={() => setShowCreate((s) => !s)}
              className="bg-brand text-white rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-brand/90 transition-colors"
            >
              {showCreate ? "Cancel" : "+ Create user"}
            </button>
          </div>

          {showCreate && (
            <form onSubmit={createUser} className="card p-6 mb-6 grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">Full name</label>
                <input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Tari Doulou"
                  className="w-full border border-hairline bg-surface rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">Work email</label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full border border-hairline bg-surface rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">Company</label>
                <select
                  value={newCompany}
                  onChange={(e) => setNewCompany(e.target.value)}
                  className="w-full border border-hairline bg-surface rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                >
                  {companies.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">Job role</label>
                <select
                  value={newJobRole}
                  onChange={(e) => setNewJobRole(e.target.value)}
                  className="w-full border border-hairline bg-surface rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                >
                  {jobRoles.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">Platform access level</label>
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value as any)}
                  className="w-full border border-hairline bg-surface rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                >
                  <option value="staff">Staff</option>
                  <option value="instructor">Instructor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="flex items-end justify-end">
                <button
                  type="submit"
                  className="bg-brand text-white rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-brand/90 transition-colors"
                >
                  Send invitation
                </button>
              </div>
            </form>
          )}

          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs font-semibold text-slate text-left bg-paper/60">
                  <th className="py-3 px-5">Name</th>
                  <th className="py-3 px-5">Email</th>
                  <th className="py-3 px-5">Company</th>
                  <th className="py-3 px-5">Job role</th>
                  <th className="py-3 px-5">Access</th>
                  <th className="py-3 px-5">Status</th>
                  <th className="py-3 px-5">Last login</th>
                  <th className="py-3 px-5"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((a) => (
                  <tr key={a.id} className="border-t border-hairline">
                    <td className="py-3.5 px-5 text-ink">{a.name}</td>
                    <td className="py-3.5 px-5 text-slate text-xs">{a.email}</td>
                    <td className="py-3.5 px-5 text-slate">{a.company}</td>
                    <td className="py-3.5 px-5 text-slate">{a.jobRole}</td>
                    <td className="py-3.5 px-5 text-ink capitalize">{a.role}</td>
                    <td className="py-3.5 px-5">
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${statusBadge(a.status)}`}
                      >
                        {a.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-xs text-slate">{a.lastLogin}</td>
                    <td className="py-3.5 px-5">
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => resetPassword(a.name)}
                          className="text-xs font-medium text-slate hover:text-brand border border-hairline rounded-lg px-3 py-1.5 whitespace-nowrap"
                        >
                          Reset password
                        </button>
                        <button
                          onClick={() => toggleSuspend(a.id)}
                          className="text-xs font-medium text-slate hover:text-brand border border-hairline rounded-lg px-3 py-1.5 whitespace-nowrap"
                        >
                          {a.status === "suspended" ? "Reactivate" : "Suspend"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-slate text-sm">
                      No staff match these filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {toast && (
        <div className="fixed bottom-6 right-6 bg-ink text-paper rounded-lg px-4 py-3 text-sm shadow-cardHover">
          {toast}
        </div>
      )}
    </div>
  );
}
