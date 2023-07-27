"use client";

import RelatedProductsSection from "../../components/RelatedProductsSection.jsx";
import { useEffect, useState } from "react";
import SizeGuideModal from "../components/SizeGuideModal";
import { unparsedUrl } from "@/lib/helpers/helpers.js";
import api from "@/lib/helpers/api/local.js";
import { useHome } from "@/lib/context/HomeContext.jsx";
import Spinner from "@/lib/ui/Spinner.jsx";
import Container from "@/lib/ui/Container.jsx";
import { useCart } from "@/lib/context/CartContext.jsx";

export default function ({ params: { name } }) {
  const [product, setProduct] = useState(null);
  const [currentVariant, setCurrentVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const query = unparsedUrl(name);
  const encodedTitle = encodeURI(query);
  const { addItemToCart } = useCart();

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => q - 1);

  const getProductDetails = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get(`api/home/product?title=${encodedTitle}`);
      setProduct(data);
      setCurrentVariant(data.variants[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (currentVariant) {
      setQuantity(1);
    }
  }, [currentVariant]);

  useEffect(() => {
    getProductDetails();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <Container>
      <div className="p-5">
        <div className="bg-white flex flex-row lg:flex-col gap-5">
          <div className="block lg:flex">
            <img
              src={currentVariant?.image}
              alt=""
              className="w-full mx-auto flex-1"
            />
            <div className="lg:px-10 py-5 space-y-4 flex-1">
              <p className="font-bold text-lg lg:text-2xl text-black">
                {currentVariant?.title}
              </p>
              <div className="space-x-6">
                <span className="text-[#01A7A3]">
                  $ {currentVariant?.sale_price}
                </span>
                <span className="text-gray-500 line-through">
                  $ {currentVariant?.price}
                </span>
              </div>
              <div className="my-4">
                <div className="mb-4">
                  <p className="mb-2 text-black">Color:</p>
                  <div className="flex flex-wrap gap-[16px]">
                    {product?.variants?.map((variant) => (
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
                    {product?.variants?.map((variant) => (
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
                  minQuantity={1}
                  maxQuantity={currentVariant?.stock}
                  increment={increment}
                  decrement={decrement}
                />
                <div className="my-[30px] flex flex-wrap gap-[16px]">
                  <button
                    className="h-[58px] w-full bg-cpink-100"
                    onClick={() =>
                      addItemToCart(currentVariant, quantity, product.title)
                    }
                  >
                    <span className="font-bold tracking-[1px] text-white hover:text-cpink-300 transition-all">
                      ADD TO CART
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-lg text-black">Description</h3>
          <div dangerouslySetInnerHTML={{ __html: product?.description }} />
        </div>
        <RelatedProductsSection title={encodedTitle} />
      </div>

      <SizeGuideModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </Container>
  );
}

function VariantColorSelector({ variant, currentVariant, setCurrentVariant }) {
  const { colors } = useHome();
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
        style={{ backgroundColor: colors[color] ?? "#FFF" }}
      ></div>
    </button>
  );
}

function VariantSizeSelector({ variant, currentVariant, setCurrentVariant }) {
  const { sizes } = useHome();
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
        {sizes[size]}
      </span>
    </button>
  );
}

function Quantity({
  quantity,
  increment,
  decrement,
  minQuantity,
  maxQuantity
}) {
  return (
    <div className="inline-flex flex-wrap items-center border-[1px] border-solid border-gray-400">
      <button
        className="group px-4 py-3 transition-all"
        onClick={decrement}
        disabled={quantity <= minQuantity}
      >
        <span
          className={`font-bold tracking-[1px] ${
            quantity <= minQuantity
              ? "text-gray-300"
              : "text-gray-400 group-hover:text-cpink-300"
          } `}
        >
          -
        </span>
      </button>
      <div className="px-4 py-3">
        <span className="font-bold tracking-[1px] text-gray-400">
          {quantity}
        </span>
      </div>
      <button
        className="group px-4 py-3 transition-all"
        onClick={increment}
        disabled={quantity >= maxQuantity}
      >
        <span
          className={`font-bold tracking-[1px] ${
            quantity >= maxQuantity
              ? "text-gray-300"
              : "text-gray-400 group-hover:text-cpink-300"
          } `}
        >
          +
        </span>
      </button>
    </div>
  );
}
