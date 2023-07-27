import { useHome } from "@/lib/context/HomeContext";
import useBreakpoint from "@/lib/hooks/useBreakpoint";
import Carousel from "@/lib/ui/Carousel";
import ProductCarrousel from "@/lib/ui/ProductCarrousel";
import Title from "@/lib/ui/Title";

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
          <Title
            name="Best Sellers"
            description="Discover a stunning collection of products that combine style and functionality."
          />
          <Carousel slides={slides} />
        </section>
      )}
    </>
  );
}
