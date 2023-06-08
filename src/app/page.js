"use client";

import Card from "@/components/card/Card";

export const metadata = {
  title: "Home",
  description:
    "This is a meta description. Welcome to slingacademy.com. Happy coding and have a nice day",
};

export default function () {
  return (
    <main>
      <Card description="Mostasero" img="/img/cart.png" price={5} priceOld={45} productName="Product 1"/>
    </main>
  );
}
