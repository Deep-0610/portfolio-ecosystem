import resumeData from '@/lib/resumeData';

export default function MinimalNordicHeader() {
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-slate-50/70 backdrop-blur-md border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
              <div className="font-mono text-xl font-extrabold tracking-wide text-slate-950">
              {resumeData.meta.name.slice(0, 3).toUpperCase()}
            </div>



            <div className="hidden sm:block">
              <div className="text-xs font-semibold text-slate-950">{resumeData.meta.title}</div>
              <div className="text-xs text-slate-600 font-mono">{resumeData.meta.location}</div>
            </div>
          </div>

          <nav className="flex items-center gap-5 text-sm">
            <a href="#projects" className="text-slate-600 hover:text-slate-950 transition-colors hidden md:inline">
              Projects
            </a>
            <a href="#certificates" className="text-slate-600 hover:text-slate-950 transition-colors hidden md:inline">
              Certificates
            </a>
            <a href="#github" className="text-slate-600 hover:text-slate-950 transition-colors hidden lg:inline">
              GitHub
            </a>
            <a href="#leetcode" className="text-slate-600 hover:text-slate-950 transition-colors hidden lg:inline">
              LeetCode
            </a>
            <a href="#social" className="text-slate-600 hover:text-slate-950 transition-colors hidden md:inline">
              Social
            </a>

            <a
              href={resumeData.links.resumePdf}
              className="rounded-xl px-4 py-2 text-xs font-semibold border border-emerald-500/35 text-emerald-700 bg-white/80 hover:bg-white transition-colors hidden sm:inline"
              download
            >
              Resume PDF
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

