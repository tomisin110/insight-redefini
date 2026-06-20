"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { personas } from "@/lib/mock-data";
import { usePersona } from "@/lib/persona-context";

const homeForRole: Record<string, string> = {
  staff: "/dashboard",
  instructor: "/instructor",
  admin: "/admin",
};

export default function Home() {
  const router = useRouter();
  const { setPersonaById } = usePersona();

  function loginAs(id: string, role: string) {
    setPersonaById(id);
    router.push(homeForRole[role] ?? "/dashboard");
  }

  return (
    <main className="min-h-screen flex bg-paper">
      <section className="hidden lg:flex lg:w-1/2 bg-ink text-white flex-col justify-between p-14">
        <img src="/logo.png" alt="Insight Redefini" className="h-14 w-auto bg-white p-2 rounded-lg inline-block" />

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand mb-4">
            Staff Training · Internal
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight max-w-md">
            The institutional knowledge of this company, taught by the people who built it.
          </h1>
          <p className="text-white/70 mt-6 max-w-sm text-sm leading-relaxed">
            Every course here is presented by a member of senior management.
            Access is restricted to verified staff accounts only.
          </p>
        </div>

        <div className="text-xs uppercase tracking-[0.18em] text-white/40">
          Confidential — Not for external distribution
        </div>
      </section>

      <section className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="lg:hidden mb-10">
            <img src="/logo.png" alt="Insight Redefini" className="h-12 w-auto" />
          </div>

          <div className="card p-7">
            <h2 className="font-display text-2xl font-bold text-ink mb-1">Welcome back</h2>
            <p className="text-slate text-sm mb-6">Sign in to your Insight Redefini account.</p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full border border-hairline bg-surface rounded-lg px-3.5 py-2.5 text-sm text-ink placeholder:text-slate/60 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">Password</label>
                <input
                  type="password"
                  placeholder="Your password"
                  className="w-full border border-hairline bg-surface rounded-lg px-3.5 py-2.5 text-sm text-ink placeholder:text-slate/60 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                />
              </div>

              <button
                type="button"
                onClick={() => loginAs("arinze", "staff")}
                className="block w-full text-center bg-brand text-white rounded-lg py-2.5 text-sm font-medium hover:bg-brand/90 transition-colors mt-2"
              >
                Sign in
              </button>
            </form>
          </div>

          <div className="mt-7">
            <p className="text-center text-xs font-medium text-slate mb-3">
              Demo accounts (password not required)
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {personas.map((p) => (
                <button
                  key={p.id}
                  onClick={() => loginAs(p.id, p.role)}
                  className="flex items-center gap-2 bg-surface border border-hairline rounded-full pl-1.5 pr-3.5 py-1.5 text-xs font-medium text-ink hover:border-brand hover:text-brand transition-colors"
                >
                  <span
                    className={`w-6 h-6 rounded-full ${p.avatarColor} text-white text-[10px] font-semibold flex items-center justify-center`}
                  >
                    {p.initials}
                  </span>
                  {p.name.split(" ")[0]}
                  <span className="text-slate capitalize">· {p.role}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
