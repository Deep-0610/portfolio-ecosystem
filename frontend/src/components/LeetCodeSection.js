import resumeData from '@/lib/resumeData';

export default function LeetCodeSection() {
  return (
    <section id="leetcode" className="scroll-mt-24">
      <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:rounded-[1.75rem] sm:p-6 sm:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-5">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-300 sm:text-xs">
              LeetCode
            </div>
            <h3 className="mt-2 text-lg font-bold text-white sm:text-xl lg:text-2xl">
              Achievements & Profile
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
              A concise coding profile section for problem-solving practice, algorithmic thinking, and continued growth.
            </p>
          </div>

          <a
            href={resumeData.leetcode.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
          >
            Open LeetCode ↗
          </a>
        </div>

        <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3">
          <div className="rounded-[1.2rem] border border-white/10 bg-white/10 p-4">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400">Profile</div>
            <div className="mt-2 text-lg font-bold text-cyan-100">{resumeData.leetcode.username}</div>
            <div className="mt-1 text-xs text-slate-400">LeetCode handle</div>
          </div>
          <div className="rounded-[1.2rem] border border-white/10 bg-white/10 p-4">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400">Practice</div>
            <div className="mt-2 text-lg font-bold text-indigo-100">Growing steadily</div>
            <div className="mt-1 text-xs text-slate-400">Algorithms & data structures</div>
          </div>
          <div className="rounded-[1.2rem] border border-white/10 bg-white/10 p-4">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400">Focus</div>
            <div className="mt-2 text-lg font-bold text-emerald-100">Problem solving</div>
            <div className="mt-1 text-xs text-slate-400">Clean logic and efficiency</div>
          </div>
        </div>
      </div>
    </section>
  );
}

