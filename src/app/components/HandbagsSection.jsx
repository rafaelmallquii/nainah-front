import Carousel from "@/lib/ui/Carousel";
import { SwiperSlide } from "swiper/react";
import BasicProductCarrousel from "@/lib/ui/BasicProductCarrousel";

export default function HandbagsSection() {
  const slides = Array.from({ length: 3 }).map((_, i) => (
    <SwiperSlide key={i}>
      <BasicProductCarrousel />
    </SwiperSlide>
  ));

  return (
    <div className="bg-white p-5">
      <div className="text-center">
        <h2 className="text-xl text-black font-bold">NEW HANDBAGS</h2>
        <p className="text-xs text-[rgba(36,50,50,0.5)] mt-3 max-w-[35ch] mx-auto">
          Discover a stunning collection of products that combine style and
          functionality.
        </p>
      </div>
      <Carousel slides={slides} />
    </div>
  );
}
