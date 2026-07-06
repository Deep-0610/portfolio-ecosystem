export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand Logo Monogram */}
        <div className="font-mono text-xl font-bold text-cyan-500 tracking-wider">
          &lt;XYZ /&gt;
        </div>
        
        {/* Navigation Elements */}
        <div className="flex items-center gap-6 text-sm text-slate-400 font-medium">
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#stats" className="hover:text-cyan-400 transition-colors">Stats</a>
          <button className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-cyan-500/20 transition-all">
            Resume PDF
          </button>
        </div>
      </div>
    </nav>
  );
}