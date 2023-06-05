export default function Card({
  price,
  priceOld,
  productName,
  description,
  img,
}) {
  return (
    <div className="border-[1px] border-[1px_solid_rgba(0,0,0,0.21)] p-4 rounded-custom-50 ">
      <img src={img} alt="Img" className="w-full" />

      <div className="flex justify-between my-4">
        <div className="text-sm">
          <h3 className="font-semibold">{productName}</h3>
          <p>{description}</p>
        </div>
        <div className="space-x-2">
          <span className="font-semibold">$ {price}</span>
          <span className="line-through text-cgray-200 [text-shadow:0px_4px_4px_rgba(0,0,0,0.25);]">$ {priceOld}</span>
        </div>
      </div>

      <button className="w-full bg-cpink-50 h-[3.2rem] shadow-custom uppercase text-cpink-200">
        Add to Cart - ${price}
      </button>
    </div>
  );
}
