import Link from "next/link";

export default function ProductCarrousel({
  title,
  image,
  newPrice,
  oldPrice,
  category
}) {
  return (
    <div
		className="border-[1px] border-[#eee] p-5 rounded-[13px]"
      style={{
        border: "1px solid #eee",
        padding: "1rem",
        borderRadius: "13px"
      }}
    >
      <div>
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-wrap justify-between mt-3">
        <p className="text-black font-bold">{title}</p>
        <div className="flex gap-4">
          <p className="font-bold">{newPrice}</p>
          <p className="line-through text-cgray-200">{oldPrice}</p>
        </div>
      </div>
      <p className="text-sm text-start my-4 text-black">{category}</p>
      <Link
        href={`/products/${title.replace(/\s+/g, "-")}`}
        className="min-w-full py-4 block text-center bg-[#FFBCCC]"
      >
        <span className="text-white hover:text-[#ED8097]">VIEW DETAILS</span>
      </Link>
    </div>
  );
}
