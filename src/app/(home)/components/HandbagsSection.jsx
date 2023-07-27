import Carousel from "@/lib/ui/Carousel";
import { SwiperSlide } from "swiper/react";
import BasicProductCarrousel from "@/lib/ui/BasicProductCarrousel";
import useBreakpoint from "@/lib/hooks/useBreakpoint";
import Title from "@/lib/ui/Title";

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
      <Title
        name="New Handbags"
        description="Discover a stunning collection of products that combine style and functionality."
      />
      <Carousel slides={slides} />
    </section>
  );
}
