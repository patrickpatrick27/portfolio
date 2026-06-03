"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const hit = links
        .map((l) => ({
          href: l.href,
          top: document.getElementById(l.href.slice(1))?.getBoundingClientRect().top ?? Infinity,
        }))
        .filter((s) => s.top <= 80)
        .reduce<{ href: string; top: number } | null>(
          (best, s) => (best === null || s.top > best.top ? s : best),
          null
        );
      setActive(hit ? hit.href : "");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <span className="font-semibold text-blue-600">Dave Bulaso</span>

        <div className="hidden sm:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <a key={link.href} href={link.href}
              className={`font-medium transition-colors ${active === link.href ? "text-blue-600" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"}`}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="sm:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="p-2 -mr-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <svg className={`absolute inset-0 w-5 h-5 transition-all duration-200 ${open ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`absolute inset-0 w-5 h-5 transition-all duration-200 ${open ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown - absolute, slides down from nav */}
      <div
        className={`sm:hidden absolute top-full left-0 right-0 z-40 transition-all duration-200 ease-out origin-top
          bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 shadow-lg
          ${open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}
            className={`flex items-center px-6 py-3.5 text-sm font-medium border-b border-gray-50 dark:border-gray-900 last:border-0 transition-colors ${
              active === link.href
                ? "text-blue-600 bg-blue-50/50 dark:bg-blue-950/20"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
