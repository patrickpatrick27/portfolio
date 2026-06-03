import Image from "next/image";
import AnimateIn from "./AnimateIn";

const stack = [
  // Black
  { name: "Next.js",                 bg: "bg-gray-900 dark:bg-gray-800",        text: "text-white dark:text-gray-100",        border: "border-gray-800 dark:border-gray-700"   },
  { name: "Vercel",                  bg: "bg-gray-900 dark:bg-gray-800",        text: "text-white dark:text-gray-100",        border: "border-gray-800 dark:border-gray-700"   },
  // Blue
  { name: "Python",                  bg: "bg-blue-50 dark:bg-blue-950/50",      text: "text-blue-700 dark:text-blue-300",     border: "border-blue-100 dark:border-blue-900"   },
  { name: "TypeScript",              bg: "bg-blue-50 dark:bg-blue-950/50",      text: "text-blue-800 dark:text-blue-300",     border: "border-blue-100 dark:border-blue-900"   },
  { name: "Docker",                  bg: "bg-blue-50 dark:bg-blue-950/50",      text: "text-blue-600 dark:text-blue-300",     border: "border-blue-100 dark:border-blue-900"   },
  // Sky / Cyan
  { name: "Dart / Flutter",          bg: "bg-sky-50 dark:bg-sky-950/50",        text: "text-sky-600 dark:text-sky-300",       border: "border-sky-100 dark:border-sky-900"     },
  { name: "React",                   bg: "bg-cyan-50 dark:bg-cyan-950/50",      text: "text-cyan-700 dark:text-cyan-300",     border: "border-cyan-100 dark:border-cyan-900"   },
  // Green / Emerald
  { name: "Node.js",                 bg: "bg-green-50 dark:bg-green-950/50",    text: "text-green-700 dark:text-green-300",   border: "border-green-100 dark:border-green-900" },
  { name: "Supabase",                bg: "bg-emerald-50 dark:bg-emerald-950/50",text: "text-emerald-700 dark:text-emerald-300",border:"border-emerald-100 dark:border-emerald-900"},
  { name: "Playwright",              bg: "bg-green-50 dark:bg-green-950/50",    text: "text-green-700 dark:text-green-300",   border: "border-green-100 dark:border-green-900" },
  // Indigo
  { name: "PostgreSQL",              bg: "bg-indigo-50 dark:bg-indigo-950/50",  text: "text-indigo-700 dark:text-indigo-300", border: "border-indigo-100 dark:border-indigo-900"},
  { name: "Tailscale",               bg: "bg-indigo-50 dark:bg-indigo-950/50",  text: "text-indigo-600 dark:text-indigo-300", border: "border-indigo-100 dark:border-indigo-900"},
  // Orange
  { name: "Firebase",                bg: "bg-orange-50 dark:bg-orange-950/50",  text: "text-orange-600 dark:text-orange-300", border: "border-orange-100 dark:border-orange-900"},
  { name: "Git",                     bg: "bg-orange-50 dark:bg-orange-950/50",  text: "text-orange-600 dark:text-orange-300", border: "border-orange-100 dark:border-orange-900"},
  // Red
  { name: "Google Workspace APIs",   bg: "bg-red-50 dark:bg-red-950/50",        text: "text-red-600 dark:text-red-300",       border: "border-red-100 dark:border-red-900"     },
  // Gray
  { name: "Linux",                   bg: "bg-gray-100 dark:bg-gray-800",        text: "text-gray-700 dark:text-gray-300",     border: "border-gray-200 dark:border-gray-700"   },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-[#F9FAFB] dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-3">About</h2>
          <div className="w-10 h-1 bg-blue-600 rounded-full mb-12" />
        </AnimateIn>
        <AnimateIn delay={80} className="flex flex-col sm:flex-row gap-10">
          <div className="shrink-0 mx-auto sm:mx-0">
            <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
              <Image
                src="/avatar.jpg"
                alt="Dave Patrick Bulaso"
                width={128}
                height={128}
                className="object-cover w-full h-full"
                style={{ objectPosition: "center 45%" }}
              />
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;m a 21-year-old Computer Engineering student at Cavite State University
              (graduating February 2027, GPA 1.58/1.00 — Philippine scale where 1.0 is highest),
              currently building production software for three international clients simultaneously
              while still in school.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I specialize in full-stack development, automation engineering,
              and internal tooling: the kind of systems that actually run
              businesses. I was appointed technical team lead at my primary UK
              client within my first month. My clients are based in the UK, the
              US, and the Philippines.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I use Claude Code and Gemini CLI daily as part of my workflow. I
              build fast and ship clean.
            </p>
            <div className="pt-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                What I work with
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span key={tech.name} className={`px-3 py-1 text-sm rounded-full border font-medium ${tech.bg} ${tech.text} ${tech.border}`}>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
