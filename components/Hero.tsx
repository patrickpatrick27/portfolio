export default function Hero() {
  return (
    <section className="py-24 px-4 sm:px-6 text-center bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
          I build production systems for international clients.
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Full-stack developer and automation engineer based in the Philippines.
          I ship real products — dashboards, mobile apps, automation pipelines —
          used daily by companies in the UK, US, and locally.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
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
            href="https://drive.google.com/file/d/1giBIEb7eScnH7ur5qj5bDGz_g5wwVlE2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:text-gray-900 transition-colors inline-flex items-center gap-1.5"
          >
            Resume
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "8 systems in production",
            "3 international clients",
            "UK · US · Philippines",
          ].map((chip) => (
            <span
              key={chip}
              className="px-3 py-1 bg-gray-100 text-gray-500 text-sm rounded-full"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
