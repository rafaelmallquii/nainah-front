export default function ProductList({ title, newPrice, oldPrice, image }) {
  return (
    <div>
      <div>
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="mt-3">
        <p className="text-black font-bold">{title}</p>
        <div className="flex flex-wrap justify-between">
          <p className="font-bold text-[#01A7A3]">{newPrice}</p>
          <p className="line-through text-cgray-200">{oldPrice}</p>
        </div>
      </div>
    </div>
  );
}
