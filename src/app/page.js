"use client";

import Card from "@/components/card/Card";
import Carousel from "@/components/core/Carousel";

export const metadata = {
  title: "Home",
  description:
    "This is a meta description. Welcome to slingacademy.com. Happy coding and have a nice day",
};

export default function () {
  return (
    <div>
      <Carousel>
        <Card
          title="Card 1"
          description="This is a card description"
          img="/img/cart.png"
          price={6}
          priceOld={8}
          productName="Product 1"
        />
        <Card
          title="Card 2"
          description="This is a card description"
          img="/img/cart_2.png"
          price={6}
          priceOld={8}
          productName="Product 2"
        />
        <Card
          title="Card 3"
          description="This is a card description"
          img="/img/cart_2.png"
          price={6}
          priceOld={8}
          productName="Product 4"
        />
      </Carousel>
    </div>
  );
}
