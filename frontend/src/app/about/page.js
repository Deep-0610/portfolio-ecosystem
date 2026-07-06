import Link from 'next/link';
import Navbar from '@/components/Navbar';
import RevealSection from '@/components/RevealSection';
import resumeData from '@/lib/resumeData';

export default function AboutPage() {
  return (
    // Added 'w-full max-w-full' and changed 'overflow-hidden' to 'overflow-x-hidden' to preserve normal vertical scrolling while locking horizontal overflow
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden text-slate-100">
      {/* Added 'pointer-events-none' so the negative positions (left-[-15%]) don't mess with mobile layout spacing or click targets */}
      <Navbar />

      {/* Added 'w-full' to ensure the main grid container scales fluidly up to 'max-w-6xl' */}
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-28 sm:px-6 lg:px-8">
        <RevealSection delay={60} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">About me</p>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
                {resumeData.meta.name}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                {resumeData.meta.summary} I focus on building polished, reliable, and scalable products that balance thoughtful design with solid engineering.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-emerald-400/20 bg-slate-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Focus areas</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Full-stack engineering', 'Web architecture', 'UI craft', 'Performance'].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-slate-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { title: 'Visual Direction', text: 'Interfaces that feel polished, intentional, and easy to navigate while keeping a modern product identity.' },
            { title: 'Engineering', text: 'Reliable full-stack experiences built with clean architecture and modern tooling.' },
            { title: 'Growth Mindset', text: 'Every project is crafted with performance, accessibility, and maintainability in mind.' },
          ].map((card, index) => (
            <RevealSection key={card.title} delay={120 + index * 80}>
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-6 shadow-lg shadow-black/20">
                <h2 className="text-xl font-semibold text-white">{card.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={220} className="flex flex-wrap gap-3">
          <Link href="/" className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20">
            Back to home
          </Link>
          <a href={resumeData.links.resumePdf} download className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-5 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/25">
            Download resume
          </a>
        </RevealSection>
      </main>
    </div>
  );
}