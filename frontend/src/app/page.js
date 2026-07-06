import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 pt-20 pb-32 space-y-24">
        {/* HERO SECTION */}
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-2xl leading-tight">
            Building Scalable Full-Stack Solutions with <span className="text-cyan-500">Intelligent Automation</span>
          </h1>
          <p className="text-slate-400 text-base max-w-xl leading-relaxed">
            Hi, I'm a Software Engineer. Explore my live work parameters below or chat directly with my AI replica to learn about my technical training credentials.
          </p>
        </section>

        {/* METRICS HUB PLACEHOLDER */}
        <section id="stats" className="space-y-4">
          <h2 className="text-2xl font-bold">Analytics Engine Logs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
              <div className="text-xs text-slate-500 font-mono mb-1">DATASTREAM.LEETCODE</div>
              <div className="text-xl font-bold font-mono text-cyan-400">Loading Metrics...</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
              <div className="text-xs text-slate-500 font-mono mb-1">DATASTREAM.GITHUB</div>
              <div className="text-xl font-bold font-mono text-indigo-400">Syncing Repositories...</div>
            </div>
          </div>
        </section>

        {/* PROJECTS ROW PLACEHOLDER */}
        <section id="projects" className="space-y-4">
          <h2 className="text-2xl font-bold">Project Repositories</h2>
          <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl text-slate-400 text-sm">
            Node / Express Server core pipeline modules successfully built. Adding frontend project cards in next development sprint.
          </div>
        </section>
      </main>

    </div>
  );
}