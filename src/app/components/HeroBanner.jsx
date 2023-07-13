import Image from "next/image";

export default function HeroBanner({ width, height, src, alt }) {
  return (
    <>
      <Image
        src={src}
        width={width}
        height={height}
        quality={100}
        className="w-full object-cover"
        alt={alt}
      />
    </>
  );
}
