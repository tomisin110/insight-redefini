"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { courses } from "@/lib/mock-data";

export default function EditCourse({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);
  const router = useRouter();
  const [toast, setToast] = useState<string | null>(null);

  if (!course) {
    return (
      <div className="flex min-h-screen">
        <Sidebar active="/instructor" />
        <div className="flex-1 p-10">
          <p className="text-slate text-sm">Course not found.</p>
        </div>
      </div>
    );
  }

  function flash(message: string) {
    setToast(message);
    setTimeout(() => setToast(null), 2200);
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar active="/instructor" />

      <div className="flex-1">
        <TopBar title="Edit course" subtitle={course.title} />

        <main className="p-6 md:p-10 max-w-3xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              flash("Changes saved.");
            }}
            className="space-y-6"
          >
            <div className="card p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">Course title</label>
                <input
                  defaultValue={course.title}
                  className="w-full border border-hairline bg-surface rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5">Department</label>
                  <input
                    defaultValue={course.department}
                    className="w-full border border-hairline bg-surface rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5">Instructor title</label>
                  <input
                    defaultValue={course.instructorTitle}
                    className="w-full border border-hairline bg-surface rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">Description</label>
                <textarea
                  defaultValue={course.summary}
                  rows={3}
                  className="w-full border border-hairline bg-surface rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand resize-none"
                />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked={course.mandatory} id="mandatory" className="accent-brand" />
                <label htmlFor="mandatory" className="text-sm text-ink">
                  Mark as required for all staff
                </label>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-ink">Course outline</h2>
                <button
                  type="button"
                  onClick={() => flash("New module added.")}
                  className="text-xs font-medium text-brand border border-hairline rounded-lg px-3 py-1.5 hover:border-brand"
                >
                  + Add module
                </button>
              </div>

              <div className="space-y-5">
                {course.modules.map((module, mi) => (
                  <div key={module.id} className="border border-hairline rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <input
                        defaultValue={module.title}
                        className="font-medium text-sm text-ink bg-transparent focus:outline-none border-b border-transparent focus:border-brand"
                      />
                      <span className="text-xs text-slate">
                        {String(mi + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {module.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between text-sm bg-paper/60 rounded-lg px-3 py-2"
                        >
                          <input
                            defaultValue={lesson.title}
                            className="bg-transparent text-ink focus:outline-none flex-1"
                          />
                          <span className="text-xs text-slate mr-3">{lesson.durationMin}m</span>
                          <button
                            type="button"
                            onClick={() => flash("Lesson removed.")}
                            className="text-xs text-slate hover:text-brand"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => flash("Lesson uploader opened.")}
                      className="mt-3 text-xs font-medium text-brand"
                    >
                      + Add lesson video
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => router.push("/instructor")}
                className="border border-hairline rounded-lg px-5 py-2.5 text-sm text-ink hover:border-brand hover:text-brand transition-colors"
              >
                Back to Instructor Desk
              </button>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => flash("Course unpublished.")}
                  className="border border-hairline rounded-lg px-5 py-2.5 text-sm text-ink hover:border-brand hover:text-brand transition-colors"
                >
                  Unpublish
                </button>
                <button
                  type="submit"
                  className="bg-brand text-white rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-brand/90 transition-colors"
                >
                  Save changes
                </button>
              </div>
            </div>
          </form>
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
