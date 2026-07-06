import resumeData from '@/lib/resumeData';
import SectionHeading from './SectionHeading';

export default function CertificatesSection() {
  return (
    <section id="certificates" className="scroll-mt-24">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Proof of Learning"
          title="Certificates"
          subtitle="A refined archive of milestones, credentials, and proof of continued growth."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {resumeData.certificates.map((c, idx) => (
            <div
              key={`${c.title}-${idx}`}
              className="rounded-[1.3rem] border border-white/10 bg-slate-950/65 p-4 shadow-[0_15px_40px_rgba(2,6,23,0.2)] transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30 hover:shadow-[0_20px_55px_rgba(16,185,129,0.12)] sm:rounded-[1.4rem] sm:p-5"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                {c.date}
              </div>
              <div className="mt-3 text-base font-semibold text-white">
                {c.title}
              </div>
              <div className="mt-1 text-sm text-slate-400">
                {c.issuer}
              </div>
              {c.link && c.link !== '#' && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
                >
                  View certificate ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

