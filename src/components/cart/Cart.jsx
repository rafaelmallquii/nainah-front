"use client";
import { useState } from "react";
import ModalVertical from "../core/Modal";
import { faker } from "@faker-js/faker";

const InputIncrement = ({ value, setValue }) => {
  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
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

      <span className="text-[14px] ">{value}</span>

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
  const [value, setValue] = useState(1);
  return (
    <>
      <ModalVertical
        right
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        bgDark={false}
      >
        <div className="w-screen px-[12px] relative h-full ">
          <div className="flex items-center justify-between p-[15px]">
            <span className="text-[24px] font-semibold text-cpink-200">
              Cart(2)
            </span>

            <button onClick={() => setIsOpenModal(false)}>
              <img src="/icons/close.svg" alt="Close Icon" />
            </button>
          </div>

          <div className="bg-[#989898] h-[1px]" />

          <div className="h-full pb-[320px]">
            <ul className="py-4 space-y-4 h-full overflow-y-auto ">
              {Array.from({ length: 10 }).map((_, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between relative bror "
                >
                  <button className="top-0 right-4 absolute">
                    <img src="/icons/delete.svg" alt="Delete Icon" />
                  </button>
                  <div className="flex gap-[15px]">
                    <div>
                      <img
                        src={faker.image.urlPicsumPhotos()}
                        className="h-[100px] w-[100px] object-cover object-center"
                        alt="Shoes"
                      />
                    </div>

                    <section>
                      <div className="flex flex-col">
                        <span className="font-semibold truncate max-w-[15ch]">
                          {faker.commerce.productName()}
                        </span>
                        <span className="text-[14px]">Totem Dragon</span>
                        <span className="font-semibold text-[14px]">
                          US$ {faker.commerce.price({ min: 9, max: 1200 })}
                        </span>
                        <span className="text-[14px]">Color: Black</span>
                        <span className="text-[14px]">Size: 11</span>
                      </div>
                    </section>

                    <InputIncrement value={value} setValue={setValue} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <section className="absolute bottom-0 w-full left-0 px-[12px]  bg-white">
            <div className="pb-10  flex flex-col items-center">
              <span className="text-[24px] my-4">Total: US$ 93.98</span>

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
