import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex">
      <section className="hidden lg:flex lg:w-1/2 bg-ink text-paper flex-col justify-between p-14">
        <div className="font-display text-2xl">
          <img src="/logo.png" alt="Insight Redefini" className="h-14 w-auto bg-white p-2 inline-block" />
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand mb-4">
            Staff Training Record · Internal
          </div>
          <h1 className="font-display text-4xl leading-tight max-w-md">
            The institutional knowledge of this company, taught by the people who built it.
          </h1>
          <p className="text-paper/70 mt-6 max-w-sm text-sm leading-relaxed">
            Every course here is presented by a member of senior management.
            Access is restricted to verified staff accounts only.
          </p>
        </div>

        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/40">
          Confidential — Not for external distribution
        </div>
      </section>

      <section className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="lg:hidden mb-10">
            <img src="/logo.png" alt="Insight Redefini" className="h-12 w-auto" />
          </div>

          <h2 className="font-display text-2xl text-ink mb-2">Sign in</h2>
          <p className="text-slate text-sm mb-8">
            Use your company email address to continue.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wide text-slate mb-1.5">
                Work email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full border border-hairline bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slate/60 focus:outline-none focus:border-brand"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wide text-slate mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••••"
                className="w-full border border-hairline bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slate/60 focus:outline-none focus:border-brand"
              />
            </div>

            <Link
              href="/dashboard"
              className="block w-full text-center bg-ink text-paper py-2.5 text-sm hover:bg-brand transition-colors mt-2"
            >
              Continue
            </Link>
          </form>

          <p className="font-mono text-[10px] uppercase tracking-wide text-slate mt-6">
            Access restricted to company-issued accounts
          </p>
        </div>
      </section>
    </main>
  );
}
