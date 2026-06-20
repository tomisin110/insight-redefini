import Sidebar from "@/components/Sidebar";
import { courses } from "@/lib/mock-data";
import ProgressBar from "@/components/ProgressBar";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return notFound();

  const firstIncomplete =
    course.modules.flatMap((m) => m.lessons).find((l) => !l.completed) ??
    course.modules[0].lessons[0];

  return (
    <div className="flex min-h-screen">
      <Sidebar active="/dashboard" />

      <div className="flex-1">
        <header className="border-b border-hairline px-6 md:px-10 py-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand mb-2">
            {course.department}
            {course.mandatory && <span className="text-rust ml-2">· Required</span>}
          </div>
          <h1 className="font-display text-2xl text-ink">{course.title}</h1>
          <p className="text-slate text-sm mt-2 max-w-2xl">{course.summary}</p>
          <div className="text-sm text-ink/80 mt-3">
            Presented by <span className="text-ink">{course.instructor}</span>
            <span className="text-slate"> — {course.instructorTitle}</span>
          </div>
        </header>

        <main className="p-6 md:p-10 grid lg:grid-cols-[1fr_320px] gap-10">
          <div>
            {/* Video player placeholder — wired to Cloudflare Stream signed URL in production */}
            <div className="bg-ink aspect-video w-full flex items-center justify-center relative">
              <div className="text-paper/60 font-mono text-[11px] uppercase tracking-[0.18em]">
                Now playing — {firstIncomplete.title}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-paper/10">
                <div className="h-full w-1/3 bg-brand" />
              </div>
            </div>

            <div className="mt-6">
              <h2 className="font-display font-bold text-xl text-ink mb-1">{firstIncomplete.title}</h2>
              <p className="font-mono text-[11px] text-slate uppercase tracking-wide">
                {firstIncomplete.durationMin} min · Lesson resumes from where you left off
              </p>
            </div>

            <div className="mt-8 card p-5">
              <ProgressBar value={course.progress} />
            </div>
          </div>

          <aside>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate mb-4">
              Course outline
            </h3>
            <div className="space-y-6">
              {course.modules.map((module, mi) => (
                <div key={module.id}>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-mono text-[11px] text-brand">
                      {String(mi + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-ink font-medium">{module.title}</span>
                  </div>
                  <ul className="space-y-2 ml-6 border-l border-hairline pl-4">
                    {module.lessons.map((lesson) => (
                      <li
                        key={lesson.id}
                        className="flex items-center justify-between text-sm py-1"
                      >
                        <span
                          className={lesson.completed ? "text-slate line-through" : "text-ink"}
                        >
                          {lesson.title}
                        </span>
                        <span className="font-mono text-[10px] text-slate">
                          {lesson.durationMin}m
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
