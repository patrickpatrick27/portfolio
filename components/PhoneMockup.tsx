import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function PhoneMockup({ src, alt }: Props) {
  return (
    <div className="mx-auto w-44 rounded-[2.5rem] border-4 border-gray-800 shadow-lg overflow-hidden">
      <div className="relative aspect-[9/16] bg-gray-50">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="176px"
        />
      </div>
    </div>
  );
}
