import resumeData from '@/lib/resumeData';

async function safeGitHubFetch(url) {
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        'User-Agent': 'resume-portfolio',
        Accept: 'application/vnd.github+json',
      },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export default async function GitHubSection() {
  const username = resumeData.github.username;
  const pinned = username
    ? await safeGitHubFetch(`https://api.github.com/users/${username}/repos?type=public&sort=updated&per_page=12`)
    : null;

  const pinnedList = Array.isArray(pinned)
    ? pinned.slice(0, 6).map((repo) => ({
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
        lang: repo.language,
        stars: repo.stargazers_count,
      }))
    : resumeData.github.pinnedFallback || [];

  return (
    <section id="github" className="scroll-mt-24">
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
        <div className="space-y-4 sm:space-y-6">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:rounded-[1.75rem] sm:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-300 sm:text-xs">Live GitHub</p>
                <h2 className="mt-2 text-xl font-black text-white sm:mt-3 sm:text-2xl">Pinned & recent repos</h2>
              </div>
              <a
                href={resumeData.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
              >
                View profile →
              </a>
            </div>

            <div className="mt-4 grid gap-3 sm:mt-6">
              {pinnedList.length === 0 ? (
                <div className="text-sm text-slate-400">No repos to show.</div>
              ) : (
                pinnedList.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block rounded-[1.3rem] border border-white/10 bg-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="truncate font-semibold text-white">{repo.name}</span>
                          {repo.lang && (
                            <span className="rounded-full border border-white/10 bg-slate-900/70 px-2 py-0.5 text-xs text-slate-300">
                              {repo.lang}
                            </span>
                          )}
                        </div>
                        {repo.description && (
                          <p className="mt-2 text-sm leading-relaxed text-slate-400">
                            {repo.description}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        {typeof repo.stars === 'number' && (
                          <div className="text-xs font-mono text-slate-400">★ {repo.stars}</div>
                        )}
                        <div className="mt-3 text-xs text-emerald-200 opacity-0 transition-opacity group-hover:opacity-100">Open ↗</div>
                      </div>
                    </div>
                  </a>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-5">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.15)] sm:rounded-[1.75rem] sm:p-6">
            <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-300 sm:text-xs">Focus</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Built with an emphasis on <span className="font-semibold text-emerald-200">clean UI</span>,{' '}
              <span className="font-semibold text-emerald-200">scalable APIs</span>, and{' '}
              <span className="font-semibold text-emerald-200">performance</span>.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.15)] sm:rounded-[1.75rem] sm:p-6">
            <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-300 sm:text-xs">Quick actions</p>
            <div className="mt-4 grid gap-3">
              <a
                href={resumeData.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/20"
              >
                GitHub profile
              </a>
              <a
                href="#projects"
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Featured projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

