import resumeData from '@/lib/resumeData';
import SectionHeading from './SectionHeading';

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Career Highlights"
          title="Professional Experience"
          subtitle="A blend of full-stack engineering and digital growth leadership across SaaS and agency environments."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {resumeData.experience.map((item, index) => (
            <div
              key={`${item.role}-${index}`}
              className="rounded-[1.4rem] border border-white/10 bg-slate-950/65 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30 hover:shadow-[0_24px_70px_rgba(16,185,129,0.12)] sm:rounded-[1.6rem] sm:p-6"
            >
              <div className="flex flex-col gap-1">
                <div className="text-xs uppercase tracking-[0.35em] text-emerald-300">{item.date}</div>
                <div className="text-lg font-semibold text-white">{item.role}</div>
                <div className="text-sm text-slate-400">{item.company}</div>
              </div>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                {item.responsibilities.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
