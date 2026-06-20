"use client";

import { useState } from "react";
import { companies, jobRoles } from "@/lib/mock-data";

export default function AudienceSelector({
  initialCompanies = ["All"],
  initialJobRoles = ["All"],
}: {
  initialCompanies?: string[];
  initialJobRoles?: string[];
}) {
  const [allCompanies, setAllCompanies] = useState(initialCompanies.includes("All"));
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>(
    initialCompanies.includes("All") ? [] : initialCompanies
  );
  const [allJobRoles, setAllJobRoles] = useState(initialJobRoles.includes("All"));
  const [selectedJobRoles, setSelectedJobRoles] = useState<string[]>(
    initialJobRoles.includes("All") ? [] : initialJobRoles
  );

  function toggleCompany(c: string) {
    setSelectedCompanies((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  }

  function toggleJobRole(r: string) {
    setSelectedJobRoles((prev) =>
      prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r]
    );
  }

  return (
    <div className="card p-6">
      <h2 className="text-sm font-semibold text-ink mb-1">Who can access this course</h2>
      <p className="text-xs text-slate mb-4">
        Restrict by company, job role, or leave open to everyone.
      </p>

      <div className="mb-5">
        <label className="flex items-center gap-2 mb-3">
          <input
            type="checkbox"
            checked={allCompanies}
            onChange={(e) => setAllCompanies(e.target.checked)}
            className="accent-brand"
          />
          <span className="text-sm font-medium text-ink">All companies</span>
        </label>
        {!allCompanies && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ml-6">
            {companies.map((c) => (
              <label key={c} className="flex items-center gap-2 text-sm text-ink">
                <input
                  type="checkbox"
                  checked={selectedCompanies.includes(c)}
                  onChange={() => toggleCompany(c)}
                  className="accent-brand"
                />
                {c}
              </label>
            ))}
          </div>
        )}
      </div>

      <div>
        <label className="flex items-center gap-2 mb-3">
          <input
            type="checkbox"
            checked={allJobRoles}
            onChange={(e) => setAllJobRoles(e.target.checked)}
            className="accent-brand"
          />
          <span className="text-sm font-medium text-ink">All job roles</span>
        </label>
        {!allJobRoles && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ml-6">
            {jobRoles.map((r) => (
              <label key={r} className="flex items-center gap-2 text-sm text-ink">
                <input
                  type="checkbox"
                  checked={selectedJobRoles.includes(r)}
                  onChange={() => toggleJobRole(r)}
                  className="accent-brand"
                />
                {r}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
