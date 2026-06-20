import Link from "next/link";
import { Course } from "@/lib/mock-data";
import ProgressBar from "./ProgressBar";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group block bg-paper border border-hairline tab-notch hover:border-ink/40 transition-colors"
    >
      <div className="p-6 pt-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand mb-2">
              {course.department}
              {course.mandatory && (
                <span className="text-rust ml-2">· Required</span>
              )}
            </div>
            <h3 className="font-display text-lg text-ink leading-snug group-hover:text-brand transition-colors">
              {course.title}
            </h3>
          </div>
        </div>

        <p className="text-slate text-sm mt-3 leading-relaxed">
          {course.summary}
        </p>

        <div className="mt-5 text-sm text-ink/80">
          <span className="text-slate">Presented by</span> {course.instructor}
          <span className="text-slate"> — {course.instructorTitle}</span>
        </div>

        <div className="mt-5">
          <ProgressBar value={course.progress} />
        </div>
      </div>
    </Link>
  );
}
