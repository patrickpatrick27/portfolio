import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center px-4 text-center">
      <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">404</p>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">Page not found</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm leading-relaxed">
        This page doesn&apos;t exist. Head back to the portfolio.
      </p>
      <Link href="/" className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
        Back to Home
      </Link>
    </div>
  );
}
