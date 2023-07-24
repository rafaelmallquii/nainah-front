import useBreakpoint from "@/lib/hooks/useBreakpoint";
import Carousel from "@/lib/ui/Carousel";
import ProductCarrousel from "@/lib/ui/ProductCarrousel";
import { SwiperSlide } from "swiper/react";

export default function RelatedProductsSection() {
  const breakpoint = useBreakpoint();

  const items = Array.from({ length: 3 }, () => ({
    title: "Product 1",
    image: "/img/cart_2.png",
    oldPrice: "$ 60.00",
    newPrice: "$ 50.00",
    category: "Category 1"
  }));

  const slides = items.map((item, i) => (
    <SwiperSlide
      key={i}
      className={`${
        breakpoint === "desktop" && items.length < 6 ? "flex-1" : "flex-none"
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
    <section className="p-5">
      <div className="text-center">
        <h2 className="text-xl text-black font-bold">RELATED PRODUCTS</h2>
        <p className="text-xs text-[rgba(36,50,50,0.5)] mt-3 max-w-[35ch] mx-auto">
          Discover a stunning collection of products that combine style and
          functionality.
        </p>
      </div>
      <Carousel slides={slides} />
    </section>
  );
}
