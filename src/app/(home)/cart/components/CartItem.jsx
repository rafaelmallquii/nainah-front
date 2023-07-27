import { useCart } from "@/lib/context/CartContext";
import InputIncrement from "./InputIncrement";

export default function CartItem({ product }) {
  const { removeItemFromCart } = useCart();

  return (
    <li className="mr-3 flex items-center justify-between relative">
      <button
        onClick={() => removeItemFromCart(product.variant.title)}
        className="top-0 right-4 absolute"
      >
        <img src="/icons/delete.svg" alt="Delete Icon" />
      </button>
      <div className="flex gap-[15px]">
        <div>
          <img
            src={product.variant.image}
            className="h-[100px] w-[100px] object-cover object-center"
            alt="#"
          />
        </div>

        <section>
          <div className="flex flex-col">
            <span className="font-semibold text-base truncate max-w-[15ch]">
              {product.variant.title}
            </span>
            <span className="text-[12px]">{product.title}</span>
            <span className="font-semibold text-[14px]">
              US$ {product.totalPrice}
            </span>
            <span className="text-[14px]">Color: {product.variant.color}</span>
            <span className="text-[14px]">Size: {product.variant.size}</span>
          </div>
        </section>

        <InputIncrement
          currentValue={product.quantity}
          title={product.variant.title}
        />
      </div>
    </li>
  );
}
