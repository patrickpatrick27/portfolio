const stack = [
  "Python",
  "Dart / Flutter",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Firebase",
  "Google Workspace APIs",
  "Docker",
  "Linux",
  "Tailscale",
  "Playwright",
  "Vercel",
  "Git",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 bg-[#F9FAFB] border-t border-gray-200"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">About</h2>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-500">DB</span>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <p className="text-gray-600 leading-relaxed">
              I&apos;m a Computer Engineering student at Cavite State University
              (graduating February 2027) who&apos;s been building production
              software for international clients since 2025.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I specialize in full-stack development, automation engineering,
              and internal tooling — the kind of work that actually runs
              businesses. My clients are based in the UK, the US, and the
              Philippines.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I use Google Gemini CLI and Claude Code daily as part of my
              workflow. I build fast and ship clean.
            </p>
            <div className="pt-4">
              <h3 className="font-semibold text-gray-900 mb-4">
                What I work with
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
