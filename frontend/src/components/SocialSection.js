import resumeData from '@/lib/resumeData';
import SectionHeading from './SectionHeading';

const socials = [
  { label: 'GitHub', href: resumeData.links.github },
  { label: 'LeetCode', href: resumeData.leetcode.profileUrl },
  { label: 'YouTube', href: resumeData.links.youtube },
  { label: 'Instagram', href: resumeData.links.instagram },
  { label: 'LinkedIn', href: resumeData.links.linkedin },
];

export default function SocialSection() {
  return (
    <section id="social" className="scroll-mt-24">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Stay Connected"
          title="Social & Links"
          subtitle="A polished gateway to the broader creative and technical presence behind the work."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.4rem] border border-white/10 bg-slate-950/65 px-5 py-4 shadow-[0_10px_35px_rgba(2,6,23,0.2)] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white">{s.label}</div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">Open ↗</div>
              </div>
            </a>
          ))}
        </div>

        <div className="rounded-[1.4rem] border border-emerald-400/20 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(34,211,238,0.08))] p-4 shadow-[0_20px_60px_rgba(2,6,23,0.2)] sm:rounded-[1.6rem] sm:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">Contact</div>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-base font-bold text-white">{resumeData.links.email}</div>
            <a
              href={`mailto:${resumeData.links.email}`}
              className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

