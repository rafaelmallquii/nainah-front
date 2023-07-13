import { CartContext } from "@/lib/context/CartContext";
import InputIncrement from "./InputIncrement";
import { useContext } from "react";

export default function CartItem({ product }) {
	const { removeItemFromCart } = useContext(CartContext);

  return (
    <li className="flex items-center justify-between relative">
      <button
        onClick={() => removeItemFromCart(product.id)}
        className="top-0 right-4 absolute"
      >
        <img src="/icons/delete.svg" alt="Delete Icon" />
      </button>
      <div className="flex gap-[15px]">
        <div>
          <img
            src={product.image}
            className="h-[100px] w-[100px] object-cover object-center"
            alt="#"
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

        <InputIncrement currentValue={product.quantity} id={product.id} />
      </div>
    </li>
  );
}
