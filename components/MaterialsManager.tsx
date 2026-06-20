"use client";

import { useState } from "react";
import { Material } from "@/lib/mock-data";

const icon: Record<Material["type"], string> = {
  slides: "📊",
  pdf: "📄",
  link: "🔗",
};

export default function MaterialsManager({
  initial = [],
}: {
  initial?: Material[];
}) {
  const [materials, setMaterials] = useState<Material[]>(initial);
  const [linkLabel, setLinkLabel] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  function removeMaterial(id: string) {
    setMaterials((prev) => prev.filter((m) => m.id !== id));
  }

  function addFile(type: "slides" | "pdf", fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return;
    const file = fileList[0];
    setMaterials((prev) => [
      ...prev,
      { id: `mat-${Date.now()}`, name: file.name, type, url: "#" },
    ]);
  }

  function addLink() {
    if (!linkLabel || !linkUrl) return;
    setMaterials((prev) => [
      ...prev,
      { id: `mat-${Date.now()}`, name: linkLabel, type: "link", url: linkUrl },
    ]);
    setLinkLabel("");
    setLinkUrl("");
  }

  return (
    <div className="card p-6">
      <h2 className="text-sm font-semibold text-ink mb-1">Course materials</h2>
      <p className="text-xs text-slate mb-4">
        Slides, PDFs, and reference links staff can access alongside the video lessons.
      </p>

      {materials.length > 0 && (
        <ul className="space-y-2 mb-5">
          {materials.map((m) => (
            <li
              key={m.id}
              className="flex items-center justify-between bg-paper/60 rounded-lg px-3 py-2 text-sm"
            >
              <span className="flex items-center gap-2 text-ink">
                <span>{icon[m.type]}</span>
                {m.name}
              </span>
              <button
                type="button"
                onClick={() => removeMaterial(m.id)}
                className="text-xs text-slate hover:text-brand"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="grid md:grid-cols-2 gap-3 mb-4">
        <label className="border border-dashed border-hairline rounded-lg px-4 py-4 text-center text-xs text-slate hover:border-brand hover:text-brand cursor-pointer transition-colors">
          📊 Upload slides (PPTX, KEY)
          <input
            type="file"
            accept=".ppt,.pptx,.key"
            className="hidden"
            onChange={(e) => addFile("slides", e.target.files)}
          />
        </label>
        <label className="border border-dashed border-hairline rounded-lg px-4 py-4 text-center text-xs text-slate hover:border-brand hover:text-brand cursor-pointer transition-colors">
          📄 Upload PDF
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={(e) => addFile("pdf", e.target.files)}
          />
        </label>
      </div>

      <div className="flex flex-col md:flex-row gap-2">
        <input
          value={linkLabel}
          onChange={(e) => setLinkLabel(e.target.value)}
          placeholder="Link label, e.g. Brand guidelines"
          className="flex-1 border border-hairline bg-surface rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
        />
        <input
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
          placeholder="https://"
          className="flex-1 border border-hairline bg-surface rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
        />
        <button
          type="button"
          onClick={addLink}
          className="border border-hairline rounded-lg px-4 py-2.5 text-sm text-ink hover:border-brand hover:text-brand transition-colors whitespace-nowrap"
        >
          + Add link
        </button>
      </div>
    </div>
  );
}
