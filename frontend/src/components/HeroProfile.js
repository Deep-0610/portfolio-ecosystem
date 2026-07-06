'use client';

import { useState } from 'react';
import resumeData from '@/lib/resumeData';

export default function HeroProfile() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section className="h-full animate-drift-in relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/75 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:rounded-[2.5rem] sm:p-6 lg:p-8">
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl animate-pulse-glow" />
      <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl animate-soft-float" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%),linear-gradient(120deg,rgba(16,185,129,0.12),transparent_35%,rgba(34,211,238,0.1))]" />

      <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-8">
        <div className="space-y-5 sm:space-y-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-emerald-300 sm:text-xs">Professional Summary</p>
          <h1 className="text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            {resumeData.meta.tagline}
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:text-lg">
            I’m {resumeData.meta.name}, a {resumeData.meta.title.toLowerCase()} focused on building secure, scalable, and thoughtfully crafted web experiences.
          </p>

          <div className="grid gap-3 sm:grid-cols-3 sm:gap-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300 shadow-[0_20px_50px_rgba(0,0,0,0.22)] sm:p-5">
              <div className="text-[10px] uppercase tracking-[0.35em] text-emerald-300 sm:text-xs">Location</div>
              <div className="mt-2 font-semibold text-white sm:mt-3">{resumeData.meta.location}</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300 shadow-[0_20px_50px_rgba(0,0,0,0.22)] sm:p-5">
              <div className="text-[10px] uppercase tracking-[0.35em] text-emerald-300 sm:text-xs">Email</div>
              <div className="mt-2 break-all font-semibold text-white sm:mt-3">{resumeData.links.email}</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300 shadow-[0_20px_50px_rgba(0,0,0,0.22)] sm:p-5">
              <div className="text-[10px] uppercase tracking-[0.35em] text-emerald-300 sm:text-xs">Focus</div>
              <div className="mt-2 font-semibold text-white sm:mt-3">Full-stack engineering with product-minded execution</div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:rounded-[2rem] sm:p-6">
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cyan-400/10 to-transparent" />
          <div className="absolute inset-0 opacity-0 sm:opacity-100 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_55%)]" />
          <div className="relative z-10 grid gap-4 sm:gap-6">
            <div className="mb-3 flex items-center justify-center">
              <div className="relative overflow-hidden rounded-full border border-emerald-400/30 bg-slate-950/90 p-1 shadow-[0_0_40px_rgba(34,211,238,0.14)]">
                {!photoError ? (
                  <img
                    src="/profile.jpg"
                    alt={resumeData.meta.name}
                    onError={() => setPhotoError(true)}
                    className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
                  />
                ) : (
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-800 text-3xl font-black text-white sm:h-32 sm:w-32">
                    {resumeData.meta.name.slice(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="animate-soft-float relative h-20 w-20 overflow-hidden rounded-full border border-emerald-400/30 bg-gradient-to-br from-cyan-400 to-emerald-400 sm:h-24 sm:w-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.5),transparent_40%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_60%)]" />
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-black text-slate-950 sm:text-3xl">DC</span>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.35em] text-emerald-300 sm:text-xs">Profile</div>
                <div className="text-base font-semibold text-white sm:text-lg">{resumeData.meta.title}</div>
              </div>
            </div>

            <div className="space-y-3 rounded-3xl border border-emerald-400/20 bg-slate-950/80 p-4 shadow-[0_20px_60px_rgba(34,211,238,0.08)] sm:p-5">
              <div className="text-[11px] uppercase tracking-[0.35em] text-cyan-300 sm:text-xs">Core strengths</div>
              <ul className="space-y-2 text-sm leading-7 text-slate-300">
                <li>Full-stack web application architecture</li>
                <li>Modern Python and JavaScript frameworks</li>
                <li>Performance-focused UI engineering and polished interfaces</li>
              </ul>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                <div className="text-[10px] uppercase tracking-[0.35em] text-emerald-300 sm:text-xs">Role</div>
                <div className="mt-2 font-semibold text-white">{resumeData.meta.title}</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                <div className="text-[10px] uppercase tracking-[0.35em] text-emerald-300 sm:text-xs">Base</div>
                <div className="mt-2 font-semibold text-white">{resumeData.meta.location}</div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-8 -bottom-10 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
