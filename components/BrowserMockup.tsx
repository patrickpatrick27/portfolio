import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  confidential?: boolean;
  priority?: boolean;
};

export default function BrowserMockup({ src, alt, confidential, priority }: Props) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 shadow-md overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 flex items-center gap-1.5 border-b border-gray-200 dark:border-gray-700">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
      </div>
      <div className="relative aspect-video bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover object-top transition-all ${confidential ? "scale-105 blur-sm" : ""}`}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
        {confidential && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400 shadow-sm">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              Demo on request
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
