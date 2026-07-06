import resumeData from '@/lib/resumeData';
import SectionHeading from './SectionHeading';

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects"
          subtitle="A curated set of launches and product experiences shaped around thoughtful motion, clarity, and technical quality."
        />

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {resumeData.projects.map((p, idx) => (
            <div
              key={`${p.name}-${idx}`}
              className="group rounded-[1.4rem] border border-white/10 bg-slate-950/65 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.25)] transition duration-500 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-[0_24px_70px_rgba(16,185,129,0.14)] sm:rounded-[1.6rem] sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-xl font-semibold text-white">
                    {p.name}
                  </div>
                  <div className="mt-3 text-sm leading-7 text-slate-300">
                    {p.description}
                  </div>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  Project
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {(p.tags || []).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-center text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/20"
                >
                  GitHub ↗
                </a>
                {p.demo && p.demo !== '#' ? (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    Live Demo ↗
                  </a>
                ) : (
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-slate-400">
                    Demo Soon
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

