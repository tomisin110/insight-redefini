"use client";

import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import Link from "next/link";
import { courses } from "@/lib/mock-data";
import ProgressBar from "@/components/ProgressBar";
import { usePersona } from "@/lib/persona-context";

export default function InstructorDesk() {
  const { persona } = usePersona();
  const myCourses =
    persona.role === "admin" ? courses : courses.filter((c) => c.instructor === persona.name);

  return (
    <div className="flex min-h-screen">
      <Sidebar active="/instructor" />

      <div className="flex-1">
        <TopBar
          title="Instructor Desk"
          subtitle={persona.role === "admin" ? "All courses across the company" : "Courses you present"}
        />

        <main className="p-6 md:p-10">
          <div className="flex items-center justify-between mb-8">
            <p className="text-slate text-sm max-w-md">
              Upload a video, write a short description, and publish — a course becomes visible to
              staff as soon as you publish it.
            </p>
            <Link
              href="/instructor/new"
              className="bg-brand text-white rounded-lg px-5 py-2.5 text-sm font-medium whitespace-nowrap hover:bg-brand/90 transition-colors"
            >
              + New course
            </Link>
          </div>

          {myCourses.length === 0 ? (
            <div className="card p-10 text-center">
              <p className="text-slate text-sm">You don't have any published courses yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {myCourses.map((course) => (
                <div key={course.slug} className="card p-5 flex items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-brand mb-1">
                      {course.department}
                    </div>
                    <h3 className="font-display font-bold text-lg text-ink">{course.title}</h3>
                    <p className="text-slate text-sm mt-1 max-w-lg">{course.summary}</p>
                    {persona.role === "admin" && (
                      <p className="text-xs text-slate mt-2">Instructor: {course.instructor}</p>
                    )}
                  </div>
                  <div className="w-40 shrink-0">
                    <ProgressBar value={course.progress} />
                    <div className="text-[11px] text-slate mt-2">Avg. across staff</div>
                  </div>
                  <Link
                    href={`/instructor/edit/${course.slug}`}
                    className="text-xs font-medium text-slate hover:text-brand border border-hairline rounded-lg px-3 py-2 whitespace-nowrap"
                  >
                    Edit
                  </Link>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
