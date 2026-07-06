export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="space-y-3">
      {eyebrow && (
        <div className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

