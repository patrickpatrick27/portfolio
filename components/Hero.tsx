import CountUp from "./CountUp";

export default function Hero() {
  return (
    <section className="relative py-24 px-4 sm:px-6 text-center bg-gradient-to-b from-blue-50 via-blue-50/30 to-white overflow-hidden">
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #93c5fd 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Available badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-sm text-green-700 font-medium mb-7 animate-fade-in-up"
          style={{ animationDelay: "0ms" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for freelance &amp; remote roles
        </div>

        <h1
          className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "120ms" }}
        >
          I build production systems for international clients.
        </h1>
        <p
          className="text-lg sm:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "240ms" }}
        >
          Full-stack developer and automation engineer based in the Philippines.
          I ship real products: dashboards, mobile apps, automation pipelines,
          used daily by companies in the UK, US, and locally.
        </p>
        <div
          className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href="#projects"
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:text-gray-900 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/file/d/1Cb8UfQCPRz8o6i46XHzZI9niGyUTU3tA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:text-gray-900 transition-colors inline-flex items-center gap-1.5"
          >
            Resume
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        <div
          className="flex flex-wrap justify-center gap-3 mb-5 animate-fade-in-up"
          style={{ animationDelay: "480ms" }}
        >
          {[
            { label: "total projects", count: 9 },
            { label: "international clients", count: 3 },
          ].map((chip, i) => (
            <span
              key={chip.label}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full border border-blue-100 tabular-nums"
            >
              <CountUp end={chip.count} delay={560 + i * 120} />
              {" "}{chip.label}
            </span>
          ))}
          <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full border border-blue-100">
            UK · US · Philippines
          </span>
        </div>
        <p
          className="text-sm text-gray-400 animate-fade-in-up"
          style={{ animationDelay: "560ms" }}
        >
          Currently: shipping production systems for clients in the UK and US
        </p>
      </div>
    </section>
  );
}
