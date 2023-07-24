import { Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import useBreakpoint from "@/lib/hooks/useBreakpoint";

export default function Carousel({ slides }) {
  const breakpoint = useBreakpoint();

  return (
    <div className="mt-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={
          breakpoint === "mobile" ? 1.3 : breakpoint === "tablet" ? 2.3 : 4.5
        }
        // navigation={breakpoint === "mobile" ? false : true}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {slides}
      </Swiper>
    </div>
  );
}
