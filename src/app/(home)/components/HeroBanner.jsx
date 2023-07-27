import Image from "next/image";

export default function HeroBanner({ site_banner_small, site_banner_large }) {
  return (
    <>
      <header>
        {site_banner_small && (
          <Image
            src={site_banner_small}
            width={351}
            height={247}
            quality={100}
            className="md:hidden w-full h-auto object-cover"
            alt={"Banner"}
          />
        )}
        {site_banner_large && (
          <Image
            src={site_banner_large}
            width={1520}
            height={980}
            quality={100}
            className="hidden md:block w-full max-w-[90vw] object-cover"
            alt={"Banner"}
          />
        )}
      </header>
    </>
  );
}
