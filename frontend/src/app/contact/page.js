import Link from 'next/link';
import Navbar from '@/components/Navbar';
import RevealSection from '@/components/RevealSection';
import resumeData from '@/lib/resumeData';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:36px_36px]" />
        <div className="absolute left-[-15%] top-0 h-[55vh] w-[55vh] rounded-full border border-cyan-400/20 bg-cyan-400/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[60vh] w-[60vh] rounded-full border border-emerald-400/20 bg-emerald-400/10 blur-[120px]" />
      </div>

      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-28 sm:px-6 lg:px-8">
        <RevealSection delay={60} className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Contact</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Let's build something bold together.</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">Reach out via email, socials, or by downloading my resume. I’m available for remote and hybrid opportunities in web engineering and product-driven design work.</p>
        </RevealSection>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <RevealSection delay={140} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_30px_80px_rgba(2,6,23,0.28)] backdrop-blur-2xl">
            <h2 className="text-2xl font-semibold text-white">Contact details</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">Email</p>
                <p className="mt-2 text-base font-semibold text-white">{resumeData.links.email}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">Location</p>
                <p className="mt-2 text-base font-semibold text-white">{resumeData.meta.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">Resume</p>
                <a href={resumeData.links.resumePdf} download className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/25">
                  Download resume
                </a>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={220} className="rounded-[2rem] border border-white/10 bg-slate-900/85 p-8 shadow-[0_30px_80px_rgba(2,6,23,0.28)] backdrop-blur-2xl">
            <h2 className="text-2xl font-semibold text-white">Social channels</h2>
            <div className="mt-6 grid gap-4 text-slate-300">
              {Object.entries(resumeData.links).filter(([key]) => key !== 'resumePdf' && key !== 'email').map(([key, value]) => (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-white/10"
                >
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}
                </a>
              ))}
            </div>
          </RevealSection>
        </div>

        <RevealSection delay={300} className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20">Back home</Link>
          <Link href="/about" className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20">About</Link>
        </RevealSection>
      </main>
    </div>
  );
}
