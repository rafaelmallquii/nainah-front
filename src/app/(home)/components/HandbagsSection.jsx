import Carousel from "@/lib/ui/Carousel";
import { SwiperSlide } from "swiper/react";
import BasicProductCarrousel from "@/lib/ui/BasicProductCarrousel";
import useBreakpoint from "@/lib/hooks/useBreakpoint";

export default function HandbagsSection() {
  const breakpoint = useBreakpoint();

  const items = Array.from({ length: 7 });

  const slides = items.map((_, i) => (
    <SwiperSlide
      key={i}
      className={`${
        breakpoint === "desktop" && items.length < 6 ? "flex-1" : "flex-none"
      }`}
    >
      <BasicProductCarrousel />
    </SwiperSlide>
  ));

  return (
    <section className="p-5">
      <div className="text-center">
        <h2 className="text-xl text-black font-bold">NEW HANDBAGS</h2>
        <p className="text-xs text-[rgba(36,50,50,0.5)] mt-3 max-w-[35ch] mx-auto">
          Discover a stunning collection of products that combine style and
          functionality.
        </p>
      </div>
      <Carousel slides={slides} />
    </section>
  );
}
