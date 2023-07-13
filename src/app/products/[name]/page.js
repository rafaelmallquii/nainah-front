"use client";

import RelatedProductsSection from "@/app/components/RelatedProductsSection";
import { useEffect, useState } from "react";
import SizeGuideModal from "../components/SizeGuideModal";

const fetchedItem = {
  id: 1,
  enabled: true,
  trending: true,
  title: "Product 1",
  description: "string",
  image: "string",
  created_at: "2023-07-11T00:29:58.864Z",
  updated_at: "2023-07-11T00:29:58.864Z",
  image: "https://images.placeholders.dev/?width=100&height=100&text=3",
  variants: [
    {
      id: 1,
      title: "Variant 1",
      color: "black",
      size: "5",
      stock: 0,
      price: "$50.00",
      sale_price: "$40.00",
      image: "https://images.placeholders.dev/?width=100&height=100&text=3",
      product: 1
    },
    {
      id: 2,
      title: "Variant 2",
      color: "pink",
      size: "6",
      stock: 0,
      price: "$40.00",
      sale_price: "$30.00",
      image: "https://images.placeholders.dev/?width=100&height=100&text=4",
      product: 1
    }
  ]
};

export default function ({ params: { name } }) {
  const [product, setProduct] = useState(fetchedItem);
  const [currentVariant, setCurrentVariant] = useState(fetchedItem.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => q - 1);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await new Promise((resolve) => {
  //         setTimeout(() => {
  //           resolve(fetchedItem);
  //         }, 0);
  //       });
  //       setProduct(data);
  //       setCurrentVariant(data.variants[0]);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <div className="bg-white">
        <img src="/img/cart.png" alt="" className="w-full mx-auto" />

        <div className="p-5 space-y-4">
          <p className="font-bold text-black">{product.title}</p>
          <div className="space-x-6">
            <span className="text-[#01A7A3]">{currentVariant.sale_price}</span>
            <span className="text-gray-500 line-through">
              {currentVariant.price}
            </span>
          </div>
          <div className="my-4">
            <div className="mb-4">
              <p className="mb-2 text-black">Color:</p>
              <div className="flex flex-wrap gap-[16px]">
                {product.variants.map((variant) => (
                  <VariantColorSelector
                    key={variant.id}
                    variant={variant}
                    currentVariant={currentVariant}
                    setCurrentVariant={setCurrentVariant}
                  />
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="mb-2 text-black">Sizes:</p>
              <div className="flex flex-wrap gap-[16px]">
                {product.variants.map((variant) => (
                  <VariantSizeSelector
                    key={variant.id}
                    variant={variant}
                    currentVariant={currentVariant}
                    setCurrentVariant={setCurrentVariant}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <img src="/icons/harge.svg" width={40} height={40} />
              <button
                className="text-base font-medium text-gray-500 underline"
                onClick={() => setIsOpenModal(true)}
              >
                Size Guide
              </button>
            </div>

            <Quantity
              quantity={quantity}
              increment={increment}
              decrement={decrement}
            />

            <div className="my-[30px] flex flex-wrap gap-[16px]">
              <button
                className="h-[58px] w-full bg-cpink-100"
                // onClick={addToCart}
              >
                <span className="font-bold tracking-[1px] text-white hover:text-cpink-300">
                  ADD TO CART
                </span>
              </button>
            </div>

            <div className="mt-4">
              <h3 className="font-bold text-lg text-black">Description</h3>
              <ul className="ml-8">
                <li className="list-disc text-black">{product.title}</li>
                <li className="list-disc text-black">
                  sizes{" "}
                  {product.variants.map((variant) => variant.size).join(" ")}
                </li>
                <li className="list-disc text-black">{product.description}</li>
              </ul>
            </div>

            <RelatedProductsSection />
          </div>
        </div>
      </div>

      <SizeGuideModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </>
  );
}

function VariantColorSelector({ variant, currentVariant, setCurrentVariant }) {
  const { color } = variant;
  const isSelected = currentVariant.id === variant.id;

  return (
    <button
      className={`w-9 h-9 rounded-full flex justify-center items-center border-[1px] border-solid ${
        isSelected ? "border-[#D87D4A]" : "border-[#E5E5E5]"
      }`}
      onClick={() => setCurrentVariant(variant)}
    >
      <div
        className="w-8 h-8 rounded-full"
        style={{ backgroundColor: color }}
      ></div>
    </button>
  );
}

function VariantSizeSelector({ variant, currentVariant, setCurrentVariant }) {
  const { size } = variant;
  const isSelected = currentVariant.id === variant.id;

  return (
    <button
      className={`group border-2 w-[48px] h-[46px] border-solid ${
        isSelected ? "border-[#D87D4A]" : "border-[#B3B3B3]"
      }`}
      onClick={() => setCurrentVariant(variant)}
    >
      <span
        className={`font-bold tracking-[1px] ${
          isSelected ? "text-[#D87D4A]" : "text-[#B3B3B3]"
        }`}
      >
        {size}
      </span>
    </button>
  );
}

function Quantity({ quantity, increment, decrement }) {
  return (
    <div className="inline-flex flex-wrap items-center border-[1px] border-solid border-gray-400">
      <button className="group px-[16px] py-[12px]" onClick={decrement}>
        <span className="font-bold tracking-[1px] text-gray-400 group-hover:text-cpink-300">
          -
        </span>
      </button>
      <div className="px-[16px] py-[12px]">
        <span className="font-bold tracking-[1px] text-gray-400">
          {quantity}
        </span>
      </div>
      <button className="group px-[16px] py-[12px]" onClick={increment}>
        <span className="font-bold tracking-[1px] text-gray-400 group-hover:text-cpink-300">
          +
        </span>
      </button>
    </div>
  );
}
