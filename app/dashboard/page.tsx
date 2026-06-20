import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import CourseCard from "@/components/CourseCard";
import { courses, currentUser } from "@/lib/mock-data";

export default function Dashboard() {
  const mandatory = courses.filter((c) => c.mandatory && c.status !== "completed");
  const inProgress = courses.filter((c) => c.status === "in-progress");
  const completedCount = courses.filter((c) => c.status === "completed").length;

  return (
    <div className="flex min-h-screen">
      <Sidebar active="/dashboard" />

      <div className="flex-1">
        <TopBar
          title={`Welcome back, ${currentUser.name.split(" ")[0]}`}
          subtitle={currentUser.department}
        />

        <main className="p-6 md:p-10">
          <div className="grid grid-cols-3 gap-px bg-hairline border border-hairline mb-10 max-w-xl">
            <div className="bg-paper p-5">
              <div className="font-display text-3xl text-ink">{courses.length}</div>
              <div className="font-mono text-[10px] uppercase tracking-wide text-slate mt-1">
                Assigned
              </div>
            </div>
            <div className="bg-paper p-5">
              <div className="font-display text-3xl text-brand">{mandatory.length}</div>
              <div className="font-mono text-[10px] uppercase tracking-wide text-slate mt-1">
                Required, open
              </div>
            </div>
            <div className="bg-paper p-5">
              <div className="font-display text-3xl text-ledger">{completedCount}</div>
              <div className="font-mono text-[10px] uppercase tracking-wide text-slate mt-1">
                Completed
              </div>
            </div>
          </div>

          {mandatory.length > 0 && (
            <section className="mb-10">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-rust mb-4">
                Required — not yet completed
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {mandatory.map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate mb-4">
              All assigned training
            </h2>
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
