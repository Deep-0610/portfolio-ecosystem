import './globals.css';
import resumeData from '@/lib/resumeData';

export const metadata = {
  title: `${resumeData.meta.name} | ${resumeData.meta.title}`,
  description: resumeData.meta.summary,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative min-h-screen antialiased bg-[#020617] text-slate-100 font-sans overflow-x-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <video
            src="/1236-144355017_medium.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover opacity-85 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-slate-950/45" />
        </div>

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}