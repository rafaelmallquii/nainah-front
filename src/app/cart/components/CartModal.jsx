"use client";
import { useContext, useRef } from "react";

import Link from "next/link";

import ModalVertical from "@/lib/ui/Modal";
import { formatPrice } from "@/helpers/helpers";

import { faker } from "@faker-js/faker";
import { useOnClickOutside } from "usehooks-ts";
import { CartContext } from "@/lib/context/CartContext";
import CartItem from "./CartItem";

export default function CartModal({ isOpenModal, setIsOpenModal }) {
  const { cartItems, total, cartSize } = useContext(CartContext);
  const ref = useRef();

  useOnClickOutside(ref, () => setIsOpenModal(false));

  return (
    <>
      <ModalVertical
        right
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        bgDark={false}
      >
        <div ref={ref} className="w-screen px-[12px] relative h-full ">
          <div className="flex items-center justify-between p-[15px]">
            <span className="text-[24px] font-semibold text-cpink-200">
              Cart({cartSize})
            </span>

            <button onClick={() => setIsOpenModal(false)}>
              <img src="/icons/close.svg" alt="Close Icon" />
            </button>
          </div>

          <div className="bg-[#989898] h-[1px]" />

          <div className="h-full pb-[280px]">
            <ul className="py-4 space-y-4 h-full overflow-y-auto">
              {cartItems
                .slice(0)
                .reverse()
                .map((product, i) => (
                  <CartItem key={i} product={product} />
                ))}
            </ul>
          </div>

          <section className="absolute bottom-0 w-full left-0 px-[12px]  bg-white border-t">
            <div className="pb-10  flex flex-col items-center">
              <span className="text-[24px] my-4">
                Total: US {formatPrice(total)}
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
