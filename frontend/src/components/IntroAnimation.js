'use client';

import { useEffect, useState } from 'react';
import resumeData from '@/lib/resumeData';

export default function IntroAnimation({ children }) {
  const [ready, setReady] = useState(false);
  const [photoLoaded, setPhotoLoaded] = useState(true);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      window.requestAnimationFrame(() => setReady(true));
      return;
    }


    const t = window.setTimeout(() => setReady(true), 900);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen">
      {!ready && (
        <div
          aria-hidden
          className="fixed inset-0 z-60 overflow-hidden bg-slate-950"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(99,102,241,0.16),transparent_60%)]" />
          <div className="absolute inset-0 animate-shimmer bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.05),transparent)]" />
          <div className="absolute inset-0 flex items-center justify-center px-4 py-10">
            <div className="relative w-full max-w-2xl rounded-[2rem] border border-cyan-400/20 bg-slate-950/95 p-8 shadow-[0_30px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl">
              <div className="mx-auto mb-8 flex h-36 w-36 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-900/80 shadow-[0_0_80px_rgba(34,211,238,0.24)]">
                <div className="sword-loader relative h-24 w-10">
                  <div className="sword-blade absolute left-1/2 top-0 h-24 w-2 -translate-x-1/2 rounded-full bg-gradient-to-b from-slate-100 to-slate-300 shadow-[0_0_30px_rgba(255,255,255,0.45)]" />
                  <div className="sword-guard absolute left-1/2 top-20 h-3 w-14 -translate-x-1/2 rounded-full bg-cyan-300/80 shadow-[0_0_20px_rgba(34,211,238,0.35)]" />
                  <div className="sword-handle absolute left-1/2 top-23 h-12 w-3 -translate-x-1/2 rounded-full bg-slate-700 shadow-[0_0_20px_rgba(0,0,0,0.35)]" />
                  <div className="sword-glow absolute left-1/2 top-0 h-full w-3 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-2xl" />
                </div>
              </div>
              <div className="space-y-5 text-center">
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                  System booting
                </div>
                <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Launching the digital blade.
                </h2>
                <p className="mx-auto max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  Loading the portfolio with premium motion, crisp tech visuals, and your personal brand energy.
                </p>
              </div>
              <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="h-24 w-24 overflow-hidden rounded-full border border-white/10 bg-slate-900/80 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="space-y-1 text-left text-sm text-slate-300">
                  <div className="font-semibold text-white">{resumeData.meta.name}</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-400">{resumeData.meta.title}</div>
                  <div className="text-xs text-slate-500">Ready in seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={ready ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}>
        {children}
      </div>

      <style jsx>{`
        @keyframes sweep {
          0% {
            transform: translateX(-30%) rotate(-10deg);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            transform: translateX(30%) rotate(-10deg);
            opacity: 0;
          }
        }
        .animate-sweep {
          animation: sweep 900ms ease-out forwards;
        }
      `}</style>
    </div>
  );
}

