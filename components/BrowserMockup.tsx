import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function BrowserMockup({ src, alt }: Props) {
  return (
    <div className="rounded-lg border border-gray-200 shadow-md overflow-hidden">
      <div className="bg-gray-100 px-3 py-2 flex items-center gap-1.5 border-b border-gray-200">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
      </div>
      <div className="relative aspect-video bg-gray-50">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
