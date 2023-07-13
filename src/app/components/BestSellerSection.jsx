import Carousel from "@/lib/ui/Carousel";
import ProductCarrousel from "@/lib/ui/ProductCarrousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperSlide } from "swiper/react";

export default function BestSellerSection() {
  const items = Array.from({ length: 3 }).map((_) => ({
    title: "Product 1",
    image: "/img/cart_2.png",
    oldPrice: "$ 60.00",
    newPrice: "$ 50.00",
    category: "Category 1"
  }));

  const slides = items.map((item, i) => (
    <SwiperSlide key={i}>
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
    <div className="bg-white p-5">
      <div className="text-center">
        <h2 className="text-xl text-black font-bold">BEST SELLERS</h2>
        <p className="text-xs text-[rgba(36,50,50,0.5)] mt-3 max-w-[35ch] mx-auto">
          Discover a stunning collection of products that combine style and
          functionality.
        </p>
      </div>
      <Carousel slides={slides} />
    </div>
  );
}
