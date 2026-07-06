import './globals.css'; // Make sure Tailwind directives sit in here!

export const metadata = {
  title: 'XYZ | Full-Stack AI Ecosystem Portfolio',
  description: 'An interactive portfolio featuring live developer trackers and an automated AI resume proxy.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-950">
        {children}
      </body>
    </html>
  );
}