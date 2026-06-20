"use client";

import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/mock-data";
import { usePersona } from "@/lib/persona-context";

export default function Dashboard() {
  const { persona } = usePersona();
  const mandatory = courses.filter((c) => c.mandatory && c.status !== "completed");
  const completedCount = courses.filter((c) => c.status === "completed").length;

  return (
    <div className="flex min-h-screen">
      <Sidebar active="/dashboard" />

      <div className="flex-1">
        <TopBar
          title={`Welcome back, ${persona.name.split(" ")[0]}`}
          subtitle={`${persona.jobRole} · ${persona.company}`}
        />

        <main className="p-6 md:p-10">
          <div className="grid grid-cols-3 gap-4 mb-10 max-w-xl">
            <div className="card p-5">
              <div className="font-display text-3xl font-bold text-ink">{courses.length}</div>
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {courses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
