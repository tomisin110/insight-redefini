import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

export default function NewCourse() {
  return (
    <div className="flex min-h-screen">
      <Sidebar active="/instructor" />

      <div className="flex-1">
        <TopBar title="New course" subtitle="This stays in draft until you publish it" />

        <main className="p-6 md:p-10 max-w-2xl">
          <form className="space-y-6">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wide text-slate mb-1.5">
                Course title
              </label>
              <input
                type="text"
                placeholder="e.g. Managing Vendor Contracts"
                className="w-full border border-hairline bg-surface rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wide text-slate mb-1.5">
                Department
              </label>
              <select className="w-full border border-hairline bg-surface rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand">
                <option>Compliance</option>
                <option>Leadership</option>
                <option>Operations</option>
                <option>Finance</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wide text-slate mb-1.5">
                Description
              </label>
              <textarea
                rows={4}
                placeholder="What will staff be able to do after completing this course?"
                className="w-full border border-hairline bg-surface rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand resize-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="mandatory" className="accent-brand" />
              <label htmlFor="mandatory" className="text-sm text-ink">
                Mark as required for all staff
              </label>
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wide text-slate mb-1.5">
                First lesson video
              </label>
              <div className="border border-dashed border-hairline rounded-lg px-6 py-10 text-center">
                <p className="text-sm text-ink">Drag a video file here, or click to browse</p>
                <p className="font-mono text-[10px] text-slate uppercase tracking-wide mt-2">
                  MP4 or MOV · uploads directly and privately · no size limit
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                className="border border-hairline rounded-lg px-5 py-2.5 text-sm text-ink hover:border-brand hover:text-brand transition-colors"
              >
                Save as draft
              </button>
              <button
                type="button"
                className="bg-brand text-white rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-brand/90 transition-colors"
              >
                Publish to staff
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
