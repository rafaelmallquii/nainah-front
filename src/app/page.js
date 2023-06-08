"use client";

import CardClassic from "@/components/card/CardClassic";

export const metadata = {
  title: "Home",
  description:
    "This is a meta description. Welcome to slingacademy.com. Happy coding and have a nice day",
};

export default function () {
  return (
    <main className="gap-[10px] grid grid-cols-2 p-[12px]">
      <CardClassic img="/img/cart.png" price={5.75} priceOld={7.50} title="Producto 1"/>
      <CardClassic img="/img/cart.png" price={4.75} priceOld={7.50} title="Producto 2"/>

    </main>
  );
}
