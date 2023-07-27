import Image from "next/image";
import Link from "next/link";
import { parseUrl } from "../helpers/helpers";

export default function ProductList({
  product_title,
  title,
  newPrice,
  oldPrice,
  image
}) {
  return (
    <Link href={`/products/${parseUrl(product_title)}`}>
      <div>
        <Image
          src={image}
          width={300}
          height={300}
          alt={title}
          className="w-full h-full object-cover aspect-[9/13]"
        />
      </div>
      <div className="mt-3">
        <p className="text-black text-base lg:text-lg font-bold">{title}</p>
        <div className="flex flex-wrap justify-between">
          <p className="font-bold text-[#01A7A3] text-sm">{newPrice}</p>
          <p className="line-through text-cgray-200 text-sm">{oldPrice}</p>
        </div>
      </div>
    </Link>
  );
}
