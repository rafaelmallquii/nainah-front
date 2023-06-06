"use client";
import { useEffect, useRef, useState } from "react";
import ModalVertical from "../core/Modal";
import { faker } from "@faker-js/faker";
import { useLocalStorage, useOnClickOutside } from "usehooks-ts";
import { formatPrice } from "@/helpers/helpers";

const InputIncrement = ({ setCart, cart, currentValue, id }) => {
  const increment = () => {
    const productIndex = cart.findIndex((item) => item.id === id);

    if (productIndex === -1) return;

    const newCart = [...cart];

    newCart[productIndex].quantity += 1;

    setCart(newCart);
  };

  const decrement = () => {
    const productIndex = cart.findIndex((item) => item.id === id);

    if (productIndex === -1) return;

    const newCart = [...cart];

    newCart[productIndex].quantity -= 1;

    setCart(newCart);

    if (newCart[productIndex].quantity === 0) {
      newCart.splice(productIndex, 1);

      setCart(newCart);
    }
  };

  return (
    <div className="absolute bottom-0 right-0 flex items-center justify-between border-[#909090] border-[1px]  w-[90px] h-[24px] text-[14px]">
      <button
        onClick={decrement}
        className="w-[40px] h-[40px] flex items-center justify-center text-[20px]  text-cgray-300 font-[500]"
      >
        -
      </button>

      <span className="text-[14px] ">{currentValue}</span>

      <button
        onClick={increment}
        className="w-[40px] h-[40px] flex items-center justify-center text-[20px]  text-cgray-300 font-[400]"
      >
        +
      </button>
    </div>
  );
};
export default function Cart({ isOpenModal, setIsOpenModal }) {
  const [cart, setCart] = useLocalStorage("cart", []);



  const [total, setTotal] = useState(0);

  const ref = useRef();

  useEffect(() => {
    setCart((prev) => [
      ...prev,
      {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price({ min: 10, max: 40 }),
        image: faker.image.urlPicsumPhotos(),
        quantity: 1,
      },
    ]);
  }, []);

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    setTotal(total);
  }, [cart]);

  const handleDelete = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };


  useOnClickOutside(ref , () => setIsOpenModal(false));
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
              Cart({cart.length})
            </span>

            <button onClick={() => setIsOpenModal(false)}>
              <img src="/icons/close.svg" alt="Close Icon" />
            </button>
          </div>

          <div className="bg-[#989898] h-[1px]" />

          <div className="h-full pb-[280px]">
            <ul className="py-4 space-y-4 h-full overflow-y-auto ">
              {cart
                .slice(0)
                .reverse()
                .map((product, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between relative bror "
                  >
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="top-0 right-4 absolute"
                    >
                      <img src="/icons/delete.svg" alt="Delete Icon" />
                    </button>
                    <div className="flex gap-[15px]">
                      <div>
                        <img
                          src={product.image}
                          className="h-[100px] w-[100px] object-cover object-center"
                          alt="Shoes"
                        />
                      </div>

                      <section>
                        <div className="flex flex-col">
                          <span className="font-semibold truncate max-w-[15ch]">
                            {product.name}
                          </span>
                          <span className="text-[14px]">Totem Dragon</span>
                          <span className="font-semibold text-[14px]">
                            US$ {product.price}
                          </span>
                          <span className="text-[14px]">Color: Black</span>
                          <span className="text-[14px]">Size: 11</span>
                        </div>
                      </section>

                      <InputIncrement
                        setCart={setCart}
                        cart={cart}
                        currentValue={product.quantity}
                        id={product.id}
                      />
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          <section className="absolute bottom-0 w-full left-0 px-[12px]  bg-white border-t">
            <div className="pb-10  flex flex-col items-center">
              <span className="text-[24px] my-4">
                Total: US {formatPrice(total)}
              </span>

              <div className="gap-[14px] flex flex-col w-full ">
                <button className="bg-cpink-100 text-white text-[20px] h-[45px]">
                  CHECKOUT
                </button>
                <button className="border-cgray-300  text-[20px] h-[45px] font-semibold border-[1px]">
                  TO CART
                </button>
              </div>
            </div>
          </section>
        </div>
      </ModalVertical>
    </>
  );
}
