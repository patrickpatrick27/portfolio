"use client";
import { useState, useEffect } from "react";

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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <span className="font-semibold text-blue-600">Dave Bulaso</span>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors ${
                active === link.href
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger — cross-fades between icons */}
        <button
          className="sm:hidden p-2 -mr-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div className="relative w-5 h-5">
            <svg
              className={`absolute inset-0 w-5 h-5 transition-all duration-200 ${open ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`absolute inset-0 w-5 h-5 transition-all duration-200 ${open ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>
      </div>

      {/* Mobile dropdown — slides down */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-200 ease-in-out bg-white ${
          open ? "max-h-64 border-t border-gray-100" : "max-h-0"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`block px-6 py-3 text-sm font-medium border-b border-gray-50 last:border-0 transition-colors ${
              active === link.href
                ? "text-blue-600 bg-blue-50"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
