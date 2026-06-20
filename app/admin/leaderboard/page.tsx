"use client";

import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import AdminTabs from "@/components/AdminTabs";
import { leaderboard } from "@/lib/mock-data";

const medal = ["🥇", "🥈", "🥉"];

export default function LeaderboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar active="/admin" />

      <div className="flex-1">
        <TopBar title="Leaderboard" subtitle="Most engaged staff this quarter" />
        <AdminTabs />

        <main className="p-6 md:p-10">
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {leaderboard.slice(0, 3).map((entry) => (
              <div key={entry.rank} className="card p-6 text-center">
                <div className="text-3xl mb-2">{medal[entry.rank - 1]}</div>
                <div className="font-display font-bold text-lg text-ink">{entry.name}</div>
                <div className="text-xs text-slate mt-0.5">{entry.company}</div>
                <div className="font-display text-2xl font-bold text-brand mt-3">
                  {entry.points}
                </div>
                <div className="text-xs text-slate">points</div>
              </div>
            ))}
          </div>

          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs font-semibold text-slate text-left bg-paper/60">
                  <th className="py-3 px-6">Rank</th>
                  <th className="py-3 px-6">Staff member</th>
                  <th className="py-3 px-6">Company</th>
                  <th className="py-3 px-6">Courses completed</th>
                  <th className="py-3 px-6">Streak</th>
                  <th className="py-3 px-6">Points</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry) => (
                  <tr key={entry.rank} className="border-t border-hairline">
                    <td className="py-3.5 px-6 text-ink font-medium">#{entry.rank}</td>
                    <td className="py-3.5 px-6 text-ink">{entry.name}</td>
                    <td className="py-3.5 px-6 text-slate">{entry.company}</td>
                    <td className="py-3.5 px-6 text-slate">{entry.coursesCompleted}</td>
                    <td className="py-3.5 px-6 text-slate">{entry.streakDays} days</td>
                    <td className="py-3.5 px-6 text-brand font-semibold">{entry.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
