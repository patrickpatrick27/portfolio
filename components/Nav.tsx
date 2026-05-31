export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <span className="font-semibold text-gray-900">Dave Bulaso</span>
        <div className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#projects" className="hover:text-gray-900 transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
