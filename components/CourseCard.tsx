import Link from "next/link";
import { Course } from "@/lib/mock-data";
import ProgressBar from "./ProgressBar";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.slug}`} className="card group block overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-brand to-rose-400" />
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-brand">
            {course.department}
          </span>
          {course.mandatory && (
            <span className="text-[11px] font-medium bg-brand/10 text-brand px-2 py-0.5 rounded-full">
              Required
            </span>
          )}
        </div>

        <h3 className="font-display font-bold text-lg text-ink leading-snug group-hover:text-brand transition-colors">
          {course.title}
        </h3>

        <p className="text-slate text-sm mt-2 leading-relaxed line-clamp-2">{course.summary}</p>

        <div className="mt-4 text-sm text-ink/80">
          <span className="text-slate">By</span> {course.instructor}
        </div>

        <div className="mt-4">
          <ProgressBar value={course.progress} />
        </div>
      </div>
    </Link>
  );
}
