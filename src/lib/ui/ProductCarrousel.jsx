import Link from "next/link";
import { parseUrl } from "../helpers/helpers";

export default function ProductCarrousel({
  title,
  image,
  newPrice,
  oldPrice,
  category
}) {
  return (
    <div className="border-[1px] border-solid border-[#eee] p-5 rounded-[13px] w-full">
      <div>
        <img src={image} alt="" className="object-cover w-full" />
      </div>
      <div className="flex flex-wrap justify-between mt-4">
        <p className="text-black font-bold">{title}</p>
        <div className="flex justify-between gap-4 w-full">
          <p className="font-bold">{newPrice}</p>
          <p className="line-through text-cgray-200">{oldPrice}</p>
        </div>
      </div>
      <p className="text-sm text-start mb-4 text-black">{category}</p>
      <Link
        href={`/products/${parseUrl(title)}`}
        className="min-w-full py-4 block text-center bg-[#FFBCCC]"
      >
        <span className="text-white hover:text-[#ED8097]">VIEW DETAILS</span>
      </Link>
    </div>
  );
}
