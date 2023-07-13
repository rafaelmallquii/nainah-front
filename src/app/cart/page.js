"use client";

import { useContext } from "react";
import Link from "next/link";

import { CartContext } from "@/lib/context/CartContext";
import CartItem from "@/app/cart/components/CartItem";
import RelatedProductsSection from "@/app/components/RelatedProductsSection";

export default function ({ params: { name } }) {
  const { cartItems, total } = useContext(CartContext);

  return (
    <div className="bg-white p-4">
      <h1 className="text-center font-bold mb-6 text-black">Cart</h1>
      <div className="h-[800px]">
        <ul className="space-y-4 h-full overflow-y-auto">
          {cartItems
            .slice(0)
            .reverse()
            .map((product, i) => (
              <CartItem key={i} product={product} />
            ))}
        </ul>
      </div>

      <div className="bg-[#989898] h-[1px] my-6" />

      <h2>Add Order Note</h2>
      <textarea
        placeholder="How can we help you?"
        className="w-full h-[100px] bg-white border border-[#989898] p-2"
      />

      <div className="text-end my-6">
        <p className="text-black">Total: US$ {total}</p>
        <span className="text-xs">Shipping calculated at checkout</span>
      </div>

      <Link
        href="/checkout"
        className="flex justify-center items-center bg-cpink-100 text-white text-[20px] h-[45px]"
      >
        <span>CHECKOUT</span>
      </Link>

      <div className="bg-[#989898] h-[1px] my-6" />

      <RelatedProductsSection />
    </div>
  );
}
