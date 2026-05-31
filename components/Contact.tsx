"use client";
import { useState } from "react";
import AnimateIn from "./AnimateIn";

function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function handleEmailClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    navigator.clipboard.writeText("davepatrickbulaso@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Get in Touch</h2>
          <div className="w-10 h-1 bg-blue-600 rounded-full mb-4" />
          <p className="text-gray-500 mb-12">
            Available for freelance projects and full-time remote roles.
          </p>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Email — copy on click */}
          <AnimateIn delay={0}>
            <a
              href="mailto:davepatrickbulaso@gmail.com"
              onClick={handleEmailClick}
              className={`flex items-center gap-3 p-4 border rounded-xl hover:-translate-y-0.5 transition-all duration-200 group ${
                copied
                  ? "bg-green-50 border-green-200"
                  : "bg-[#F9FAFB] border-[#E5E7EB] hover:border-blue-200 hover:bg-blue-50"
              }`}
            >
              <span className={`shrink-0 transition-colors ${copied ? "text-green-600" : "text-gray-500 group-hover:text-blue-600"}`}>
                {copied ? <CheckIcon /> : <EmailIcon />}
              </span>
              <div className="min-w-0">
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                  {copied ? "Copied!" : "Email"}
                </div>
                <div className={`text-sm font-medium truncate transition-colors ${copied ? "text-green-700" : "text-gray-700 group-hover:text-blue-700"}`}>
                  davepatrickbulaso@gmail.com
                </div>
              </div>
            </a>
          </AnimateIn>

          {/* GitHub */}
          <AnimateIn delay={80}>
            <a
              href="https://github.com/patrickpatrick27"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl hover:border-blue-200 hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <span className="text-gray-500 group-hover:text-blue-600 transition-colors shrink-0">
                <GitHubIcon />
              </span>
              <div className="min-w-0">
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">GitHub</div>
                <div className="text-sm text-gray-700 group-hover:text-blue-700 transition-colors font-medium truncate">
                  github.com/patrickpatrick27
                </div>
              </div>
            </a>
          </AnimateIn>

          {/* LinkedIn */}
          <AnimateIn delay={160}>
            <a
              href="https://linkedin.com/in/dave-patrick-bulaso-169b7b307"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl hover:border-blue-200 hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <span className="text-gray-500 group-hover:text-blue-600 transition-colors shrink-0">
                <LinkedInIcon />
              </span>
              <div className="min-w-0">
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">LinkedIn</div>
                <div className="text-sm text-gray-700 group-hover:text-blue-700 transition-colors font-medium truncate">
                  linkedin.com/in/dave-patrick-bulaso
                </div>
              </div>
            </a>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
