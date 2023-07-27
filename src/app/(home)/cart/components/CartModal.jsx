"use client";
import { useRef } from "react";

import Link from "next/link";

import ModalVertical from "@/lib/ui/Modal";
import { formatPriceToUSDString } from "@/lib/helpers/helpers";

import { useOnClickOutside } from "usehooks-ts";
import { useCart } from "@/lib/context/CartContext";
import CartItem from "./CartItem";

export default function CartModal({ isOpenModal, setIsOpenModal }) {
  const { cartItems, total, cartSize } = useCart();
  const ref = useRef();

  useOnClickOutside(ref, () => setIsOpenModal(false), "mouseup");

  return (
    <>
      <ModalVertical
        right={true}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        bgDark={false}
      >
        <div ref={ref} className="w-full px-3 relative h-full">
          <div className="flex items-center justify-between p-[15px]">
            <span className="text-[24px] font-semibold text-cpink-200">
              Cart({cartSize})
            </span>

            <button onClick={() => setIsOpenModal(false)}>
              <img src="/icons/close.svg" alt="Close Icon" />
            </button>
          </div>

          <div className="bg-[#989898] h-[1px]" />

          <div className="h-full max-h-[400px] overflow-y-auto">
            <ul className="py-4 space-y-4 h-full overflow-y-auto">
              {cartItems
                .slice(0)
                .reverse()
                .map((product, i) => (
                  <CartItem key={i} product={product} />
                ))}
            </ul>
          </div>

          <section className="w-full left-0 px-3 bg-white border-t">
            <div className="pb-10  flex flex-col items-center">
              <span className="text-[24px] my-4">
                Total: US {formatPriceToUSDString(total)}
              </span>

              <div className="gap-[14px] flex flex-col w-full ">
                <Link
                  href="/checkout"
                  onClick={() => setIsOpenModal(false)}
                  className="flex justify-center items-center bg-cpink-100 text-white text-[20px] h-[45px]"
                >
                  <span>CHECKOUT</span>
                </Link>
                <Link
                  href="/cart"
                  onClick={() => setIsOpenModal(false)}
                  className="flex justify-center items-center border-cgray-300  text-[20px] h-[45px] font-semibold border-[1px]"
                >
                  <span>TO CART</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </ModalVertical>
    </>
  );
}
