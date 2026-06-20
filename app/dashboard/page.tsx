"use client";

import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/mock-data";
import { usePersona } from "@/lib/persona-context";

export default function Dashboard() {
  const { persona } = usePersona();

  const visibleCourses = courses.filter(
    (c) =>
      !c.archived &&
      (c.targetCompanies.includes("All") || c.targetCompanies.includes(persona.company)) &&
      (c.targetJobRoles.includes("All") || c.targetJobRoles.includes(persona.jobRole))
  );

  const mandatory = visibleCourses.filter((c) => c.mandatory && c.status !== "completed");
  const completedCount = visibleCourses.filter((c) => c.status === "completed").length;

  return (
    <div className="flex min-h-screen">
      <Sidebar active="/dashboard" />

      <div className="flex-1">
        <TopBar
          title={`Welcome back, ${persona.name.split(" ")[0]}`}
          subtitle={`${persona.jobRole} · ${persona.company}`}
        />

        <main className="p-6 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl">
            <div className="card p-5">
              <div className="font-display text-3xl font-bold text-ink">{visibleCourses.length}</div>
              <div className="text-xs text-slate mt-1">Assigned</div>
            </div>
            <div className="card p-5">
              <div className="font-display text-3xl font-bold text-brand">{mandatory.length}</div>
              <div className="text-xs text-slate mt-1">Required, open</div>
            </div>
            <div className="card p-5">
              <div className="font-display text-3xl font-bold text-ledger">{completedCount}</div>
              <div className="text-xs text-slate mt-1">Completed</div>
            </div>
            <div className="card p-5">
              <div className="font-display text-3xl font-bold text-ink flex items-center gap-1.5">
                🔥 {persona.streakDays}
              </div>
              <div className="text-xs text-slate mt-1">Day streak</div>
            </div>
          </div>

          {mandatory.length > 0 && (
            <section className="mb-10">
              <h2 className="text-sm font-semibold text-ink mb-4">Required — not yet completed</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {mandatory.map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-sm font-semibold text-ink mb-4">All assigned training</h2>
            {visibleCourses.length === 0 ? (
              <div className="card p-8 text-center text-slate text-sm">
                No courses are currently assigned to your company or job role.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {visibleCourses.map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
