import Link from 'next/link';
import IntroAnimation from '@/components/IntroAnimation';
import Navbar from '@/components/Navbar';
import RevealSection from '@/components/RevealSection';
import HeroProfile from '@/components/HeroProfile';
import resumeData from '@/lib/resumeData';

export default function Home() {
  return (
    <IntroAnimation>
      <div className="relative min-h-screen overflow-hidden text-slate-100">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:42px_42px]" />
          <div className="absolute left-[-10%] top-[-20%] h-[60vh] w-[60vh] rounded-full border border-cyan-400/20 bg-cyan-400/10 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[70vh] w-[70vh] rounded-full border border-emerald-400/20 bg-emerald-400/10 blur-[140px]" />
        </div>

        <Navbar />

        <main className="mx-auto max-w-6xl px-3  pb-20 pt-16 sm:px-4 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-28">
          <div className="grid items-stretch gap-8 lg:grid-cols-1 lg:gap-10">
            <HeroProfile />
            <RevealSection delay={120} className="h-full space-y-8 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.35)] backdrop-blur-2xl sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Welcome</p>
                <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
                  Explore the portfolio in a richer multipage experience.
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  Navigate through dedicated pages for About, Work, Projects, and Contact so each section feels polished and easy to explore.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'About', description: 'Learn more about my background, skillset, and approach.', href: '/about' },
                  { title: 'Work', description: 'See selected projects built with thoughtful engineering.', href: '/work' },
                  { title: 'Projects', description: 'Explore case studies and highlighted builds.', href: '/projects' },
                  { title: 'Contact', description: 'Connect via socials, email, and professional links.', href: '/contact' },
                ].map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5 transition hover:border-cyan-400/40 hover:bg-slate-900/95"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">{card.title}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{card.description}</p>
                  </Link>
                ))}
              </div>

              <div className="rounded-[1.5rem] border border-emerald-400/20 bg-slate-950/60 p-5 text-sm text-slate-300 shadow-[0_20px_60px_rgba(34,211,238,0.12)]">
                <p className="font-semibold text-white">Quick links</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/about" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/15">
                    About
                  </Link>
                  <Link href="/work" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/15">
                    Work
                  </Link>
                  <Link href="/projects" className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200 transition hover:bg-emerald-500/20">
                    Projects
                  </Link>
                  <Link href="/contact" className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-500/20">
                    Contact
                  </Link>
                </div>
              </div>
            </RevealSection>
          </div>

          <footer className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-400 sm:mt-16 sm:pt-8 sm:text-sm">
            Built with Next.js · Tailwind CSS · Crafted for premium animation-led experiences
          </footer>
        </main>
      </div>
    </IntroAnimation>
  );
}

