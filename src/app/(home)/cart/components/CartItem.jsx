import { useCart } from "@/lib/context/CartContext";
import InputIncrement from "./InputIncrement";
import { useHome } from "@/lib/context/HomeContext";
import Image from "next/image";

export default function CartItem({ product }) {
  const { colors, sizes } = useHome();
  const { removeItemFromCart } = useCart();

  return (
    <li className="mr-3 flex items-center justify-between relative">
      <button
        onClick={() => removeItemFromCart(product?.variant?.title)}
        className="top-0 right-4 absolute"
      >
        <img src="/icons/delete.svg" alt="Delete Icon" />
      </button>
      <div className="flex gap-[15px]">
        <div>
          <Image
            src={product?.variant?.image}
            width={120}
            height={120}
            className="max-w-full object-cover object-center"
            alt="#"
          />
        </div>

        <section>
          <div className="flex flex-col">
            <span className="font-semibold text-base truncate lg:max-w-[25ch]">
              {product.variant.title}
            </span>
            <span className="text-sm">{product?.title}</span>
            <span className="font-semibold text-base">
              US$ {product?.totalPrice}
            </span>
            <div className="inline-flex items-center gap-2">
              <span className="text-sm">Color:</span>
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: colors[product?.variant?.color] ?? "gray"
                }}
              ></div>
            </div>
            <span className="text-sm">Size: {sizes[product?.variant?.size]}</span>
          </div>
        </section>

        <InputIncrement product={product} />
      </div>
    </li>
  );
}
