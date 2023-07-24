import { useHome } from "@/lib/context/HomeContext";
import useBreakpoint from "@/lib/hooks/useBreakpoint";
import Carousel from "@/lib/ui/Carousel";
import ProductCarrousel from "@/lib/ui/ProductCarrousel";

import { SwiperSlide } from "swiper/react";

export default function BestSellerSection() {
  const { trendingProducts } = useHome();
  const breakpoint = useBreakpoint();

  const slides = trendingProducts.map((item, i) => (
    <SwiperSlide
      key={i}
      className={`min-w-[250px] ${
        breakpoint === "desktop" && trendingProducts.length < 4
          ? "flex-1"
          : "flex-none"
      }`}
    >
      <ProductCarrousel
        key={i}
        title={item.title}
        image={item.image}
        oldPrice={item.oldPrice}
        newPrice={item.newPrice}
        category={item.category}
      />
    </SwiperSlide>
  ));

  return (
    <>
      {trendingProducts.length > 0 && (
        <section>
          <div className="text-center">
            <h2 className="text-xl text-black font-bold">BEST SELLERS</h2>
            <p className="text-xs text-[rgba(36,50,50,0.5)] mt-3 max-w-[35ch] mx-auto">
              Discover a stunning collection of products that combine style and
              functionality.
            </p>
          </div>
          <Carousel slides={slides} />
        </section>
      )}
    </>
  );
}
