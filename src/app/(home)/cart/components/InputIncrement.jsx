import { useCart } from "@/lib/context/CartContext";

export default function InputIncrement({ product }) {
  const title = product.variant.title;
  const quantity = product.quantity;

  const { increment, decrement } = useCart();

  return (
    <div className="absolute bottom-0 right-0 flex items-center justify-between border-[#909090] border-[1px]  w-[90px] h-[24px] text-[14px]">
      <button
        onClick={() => decrement(title)}
        className="w-[40px] h-[40px] flex items-center justify-center text-[20px]  text-cgray-300 font-[500]"
      >
        -
      </button>

      <span className="text-[14px] ">{quantity}</span>

      <button
        onClick={() => increment(title)}
        className="w-[40px] h-[40px] flex items-center justify-center text-[20px]  text-cgray-300 font-[400]"
      >
        +
      </button>
    </div>
  );
}
