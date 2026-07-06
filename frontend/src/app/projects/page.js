import Link from 'next/link';
import Navbar from '@/components/Navbar';
import RevealSection from '@/components/RevealSection';
import resumeData from '@/lib/resumeData';

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:36px_36px]" />
        <div className="absolute left-[-15%] top-0 h-[55vh] w-[55vh] rounded-full border border-cyan-400/20 bg-cyan-400/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[60vh] w-[60vh] rounded-full border border-emerald-400/20 bg-emerald-400/10 blur-[120px]" />
      </div>

      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:px-8">
        <RevealSection delay={60} className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Projects</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Showcasing the latest work and case studies.</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">Detailed project highlights and design-driven engineering examples that emphasize modern UI, architecture, and production-ready polish.</p>
        </RevealSection>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {resumeData.projects.map((project, index) => (
            <RevealSection key={project.name} delay={140 + index * 80}>
              <div className="group rounded-[1.8rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-white">{project.name}</h2>
                  <span className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">{project.type || 'Featured'}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">{tag}</span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.link} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20">Open project</a>
                  <a href={project.demo && project.demo !== '#' ? project.demo : project.link} target="_blank" rel="noreferrer" className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/25">{project.demo && project.demo !== '#' ? 'View demo' : 'Open project'}</a>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={260} className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20">Back home</Link>
          <Link href="/contact" className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20">Contact me</Link>
        </RevealSection>
      </main>
    </div>
  );
}
