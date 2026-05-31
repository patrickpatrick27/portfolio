import AnimateIn from "./AnimateIn";
import BrowserMockup from "./BrowserMockup";
import PhoneMockup from "./PhoneMockup";

type Status = "live" | "confidential" | "github" | "internal";

type Project = {
  name: string;
  description: string;
  stack: string[];
  status: Status;
  image: string;
  mockup: "browser" | "phone";
  link?: string;
};

const projects: Project[] = [
  {
    name: "Wiser Finance Dashboard",
    description:
      "AR management portal tracking payments, forecasts, and aging reports for a UK employer branding firm with £1M+ monthly billing.",
    stack: ["Next.js", "TypeScript", "Supabase", "Google OAuth"],
    status: "confidential",
    image: "/projects/image17.png",
    mockup: "browser",
  },
  {
    name: "Email Bison Monitor",
    description:
      "Internal ops dashboard for a US insurance agency recruitment firm, monitoring 1,900+ email accounts and 111,000+ campaign sends in real time.",
    stack: ["Next.js", "TypeScript", "Supabase", "Email Bison API"],
    status: "confidential",
    image: "/projects/image5.png",
    mockup: "browser",
  },
  {
    name: "10Q Holdings Dashboard",
    description:
      "Internal lead management CRUD tool replacing spreadsheet workflows for multi-company LinkedIn outreach across 4,578+ leads.",
    stack: ["Next.js", "TypeScript", "Supabase", "Google OAuth"],
    status: "live",
    image: "/projects/image3.png",
    mockup: "browser",
    link: "https://10q-dashboard.vercel.app/login",
  },
  {
    name: "NAP Finder",
    description:
      "Flutter geolocation app used daily by field technicians to locate 3,000+ network access points across Cavite, replacing manual spreadsheet lookups.",
    stack: ["Flutter", "Dart", "OpenStreetMap", "Google Sheets API"],
    status: "internal",
    image: "/projects/image6.jpg",
    mockup: "phone",
  },
  {
    name: "AquaLink",
    description:
      "Flutter delivery management app with role-based views for dispatchers and customers, real-time order tracking, offline-first architecture, and an analytics dashboard.",
    stack: ["Flutter", "Dart", "Supabase", "Hive"],
    status: "internal",
    image: "/projects/image11.jpg",
    mockup: "phone",
  },
  {
    name: "Pinpoint",
    description:
      "Real-time location sharing web app. Create a session, share a link, see everyone on a live map. No account needed.",
    stack: ["Next.js", "Supabase Realtime", "Leaflet", "OpenStreetMap"],
    status: "live",
    image: "/projects/pinpoint2.jpg",
    mockup: "browser",
    link: "https://pinpoint-tau.vercel.app",
  },
  {
    name: "OLJ Job Scout Bot",
    description:
      "24/7 Python automation agent that monitors OnlineJobs.ph and delivers real-time Telegram alerts for matched job listings, deployed as a Linux systemd service.",
    stack: [
      "Python",
      "BeautifulSoup",
      "HTTPX",
      "SQLite",
      "Telegram Bot API",
      "Linux systemd",
    ],
    status: "github",
    image: "/projects/image13.png",
    mockup: "browser",
    link: "https://github.com/patrickpatrick27",
  },
  {
    name: "Google Apps Script Inventory System",
    description:
      "Automated warehouse inventory monitoring for a Philippine telecoms company, reducing data entry from hours to minutes via Google Sheets automation.",
    stack: ["Google Apps Script", "Google Sheets", "Google Workspace APIs"],
    status: "internal",
    image: "/projects/image14.png",
    mockup: "browser",
  },
  {
    name: "Mountaintop Telecom Installation Form",
    description:
      "Customer-facing internet subscription portal for a Philippine telecoms provider. Lets subscribers browse plans from 50 to 500 Mbps and submit installation requests online.",
    stack: ["React", "Firebase Hosting"],
    status: "live",
    image: "/projects/image8.png",
    mockup: "browser",
    link: "https://telecom-installation-form.web.app",
  },
];

const statusConfig: Record<Status, { label: string; className: string }> = {
  live: { label: "Live", className: "bg-green-100 text-green-700" },
  confidential: {
    label: "Confidential - demo on call",
    className: "bg-gray-100 text-gray-600",
  },
  github: { label: "GitHub", className: "bg-gray-900 text-white" },
  internal: {
    label: "In production - internal use",
    className: "bg-gray-100 text-gray-600",
  },
};

function ExternalLinkIcon() {
  return (
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
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Projects</h2>
          <div className="w-10 h-1 bg-blue-600 rounded-full mb-4" />
          <p className="text-gray-500 mb-12">
            Production systems in active daily use.
          </p>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const badge = statusConfig[project.status];
            const featured = i === 0;

            return (
              <AnimateIn
                key={project.name}
                delay={i * 60}
                className={`flex flex-col ${featured ? "md:col-span-2" : ""}`}
              >
                <div
                  className={`bg-[#F9FAFB] rounded-xl overflow-hidden flex flex-1 hover:-translate-y-1 hover:shadow-lg transition-[transform,box-shadow] duration-200 ${
                    featured ? "flex-col md:flex-row" : "flex-col"
                  }`}
                  style={{ border: "1px solid #E5E7EB", borderTop: "2px solid #2563EB" }}
                >
                  {/* Screenshot */}
                  <div className={`bg-white p-4 border-b border-gray-100 ${featured ? "md:w-3/5 md:border-b-0 md:border-r" : ""}`}>
                    {project.mockup === "browser" ? (
                      <BrowserMockup src={project.image} alt={project.name} confidential={project.status === "confidential"} />
                    ) : (
                      <div className="py-4 flex justify-center">
                        <PhoneMockup src={project.image} alt={project.name} />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className={`flex flex-col gap-3 flex-1 ${featured ? "p-6 md:p-8 justify-center" : "p-5"}`}>
                    {featured && (
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                        Featured Project
                      </span>
                    )}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className={`font-semibold text-gray-900 leading-snug ${featured ? "text-xl" : ""}`}>
                        {project.name}
                      </h3>
                      <span className={`shrink-0 px-2 py-0.5 text-xs rounded-full font-medium ${badge.className}`}>
                        {badge.label}
                      </span>
                    </div>
                    <p className={`text-gray-600 leading-relaxed ${featured ? "text-base" : "text-sm"}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <div className="mt-auto pt-1">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                        >
                          {project.status === "github" ? "View on GitHub" : "Open App"}
                          <ExternalLinkIcon />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
