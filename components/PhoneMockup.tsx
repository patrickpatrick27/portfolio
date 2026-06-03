"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
};

export default function PhoneMockup({ src, alt }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mx-auto w-44 rounded-[2.5rem] border-4 border-gray-800 dark:border-gray-700 shadow-lg overflow-hidden">
      <div className="relative aspect-[9/16] bg-gray-100 dark:bg-gray-800 overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
        )}
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          sizes="176px"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}
