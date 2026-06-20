import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import Link from "next/link";
import { instructorCourses } from "@/lib/mock-data";
import ProgressBar from "@/components/ProgressBar";

export default function InstructorDesk() {
  return (
    <div className="flex min-h-screen">
      <Sidebar active="/instructor" />

      <div className="flex-1">
        <TopBar title="Instructor Desk" subtitle="Courses you present" />

        <main className="p-6 md:p-10">
          <div className="flex items-center justify-between mb-8">
            <p className="text-slate text-sm max-w-md">
              Upload a video, write a short description, and publish — a course
              becomes visible to staff as soon as you publish it.
            </p>
            <Link
              href="/instructor/new"
              className="bg-ink text-paper px-5 py-2.5 text-sm whitespace-nowrap hover:bg-brand transition-colors"
            >
              + New course
            </Link>
          </div>

          <div className="space-y-4">
            {instructorCourses.map((course) => (
              <div
                key={course.slug}
                className="border border-hairline p-5 flex items-center justify-between gap-6 tab-notch"
              >
                <div className="flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand mb-1">
                    {course.department}
                  </div>
                  <h3 className="font-display text-lg text-ink">{course.title}</h3>
                  <p className="text-slate text-sm mt-1 max-w-lg">{course.summary}</p>
                </div>
                <div className="w-40 shrink-0">
                  <ProgressBar value={course.progress} />
                  <div className="font-mono text-[10px] text-slate mt-2 uppercase tracking-wide">
                    Avg. across staff
                  </div>
                </div>
                <button className="font-mono text-[10px] uppercase tracking-wide text-slate hover:text-brand border border-hairline px-3 py-2 whitespace-nowrap">
                  Edit
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
