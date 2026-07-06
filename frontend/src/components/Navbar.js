'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import resumeData from '@/lib/resumeData';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 120);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-10 w-full bg-slate-950/30 on transition-all duration-500 ${isScrolled ? 'shadow-[0_25px_70px_rgba(0,0,0,0.35)]' : 'shadow-[0_10px_40px_rgba(0,0,0,0.25)]'}`}>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 sm:px-6 sm:py-2 lg:px-8">
        <Link href="/" className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/70 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:border-cyan-400/30 sm:px-4 sm:py-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-emerald-400/30 bg-emerald-500/10 shadow-lg shadow-emerald-500/10">
            <img
              src="/Profile.jpg"
              alt={`${resumeData.meta.name} portrait`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-black text-white">{resumeData.meta.name}</span>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-400">{resumeData.meta.location}</span>
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-lg text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link relative rounded-full px-3 py-2 transition-colors duration-300 hover:text-white hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <a
            href={resumeData.links.resumePdf}
            download
            className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-200 transition duration-300 hover:bg-emerald-500/20"
          >
            Resume PDF
          </a>

          <div className={`flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-950/65 px-3 py-2 shadow-[0_20px_60px_rgba(2,6,23,0.15)] transition-all duration-500 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px] pointer-events-none'}`}>
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]" />
            <div className="flex flex-col text-[10px] uppercase tracking-[0.28em] text-slate-300">
              <span className="font-semibold text-cyan-100">Live</span>
              <span className="text-[9px] text-slate-500">preview active</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'flex' : 'hidden'} w-full flex-col gap-3 border-t border-white/10 px-4 py-3 md:hidden`}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-200"
          >
            {item.label}
          </Link>
        ))}
        <a
          href={resumeData.links.resumePdf}
          download
          onClick={() => setIsOpen(false)}
          className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-200"
        >
          Resume PDF
        </a>
      </div>
    </nav>
  );
}

