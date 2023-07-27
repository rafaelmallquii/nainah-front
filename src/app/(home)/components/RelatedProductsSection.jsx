"use client";
import api from "@/lib/helpers/api/local";
import useBreakpoint from "@/lib/hooks/useBreakpoint";
import Carousel from "@/lib/ui/Carousel";
import ProductCarrousel from "@/lib/ui/ProductCarrousel";
import Title from "@/lib/ui/Title";
import { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";

export default function RelatedProductsSection({ title }) {
  const breakpoint = useBreakpoint();
  const [items, setItems] = useState([]);

  // const items = Array.from({ length: 3 }, () => ({
  //   title: "Product 1",
  //   image: "/img/cart_2.png",
  //   oldPrice: "$ 60.00",
  //   newPrice: "$ 50.00",
  //   category: "Category 1"
  // }));

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

  useEffect(() => {
    getRelatedProducts();
  }, []);

  const getRelatedProducts = async () => {
    try {
      const { data } = await api.get(`api/home/relatedProducts?title=${title}`);
      setItems(data);
    } catch (error) {
      console.error(error?.response?.data);
    }
  };

  return (
    <>
      {items.length > 0 && (
        <section className="p-5">
          <Title
            name="RELATED PRODUCTS"
            description="Discover a stunning collection of products that combine style and functionality."
          />
          <Carousel slides={slides} />
        </section>
      )}
    </>
  );
}
