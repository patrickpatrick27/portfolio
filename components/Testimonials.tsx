import AnimateIn from "./AnimateIn";

const testimonials = [
  {
    quote:
      "One thing that has stood out to me is his ability to deliver projects earlier than required while still maintaining quality and professionalism. He has been reliable, easy to work with, and quick to understand project goals and technical requirements. I already have additional projects lined up for him moving forward.",
    name: "Matt McCray",
    role: "Owner",
    company: "Agency Builder Pro",
    location: "US",
    initials: "MM",
  },
  {
    quote:
      "Messages get answered fast, tasks get picked up without chasing, and the quality of the work coming back reflects genuine care for getting it right. That combination of capability and adaptability is rare — it is what makes him genuinely useful on product development work rather than just task execution.",
    name: "Aravinth Ratnakumar",
    role: "CFO & Co-Founder",
    company: "Wiser",
    location: "UK",
    initials: "AR",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#F9FAFB] border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What Clients Say</h2>
          <div className="w-10 h-1 bg-blue-600 rounded-full mb-12" />
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 100} className="flex flex-col">
              <div
                className="bg-white rounded-xl p-7 flex flex-col gap-5 flex-1"
                style={{ border: "1px solid #E5E7EB", borderTop: "2px solid #2563EB" }}
              >
                {/* Quote mark */}
                <svg
                  className="w-8 h-8 text-blue-100"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.5C7.5 12.067 9.067 10.5 11 10.5V8h-1zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.5c0-1.933 1.567-3.5 3.5-3.5V8h-1z" />
                </svg>

                {/* Quote text */}
                <p className="text-gray-600 leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t border-gray-100 pt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">
                      {t.role} · {t.company} · {t.location}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
