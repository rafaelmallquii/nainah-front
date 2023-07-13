export default function BasicProductCarrousel() {
  return (
    <div className="flex flex-wrap justify-between items-center mt-3">
      <img
        src={"/img/cart_2.png"}
        alt=""
        className="w-full h-full object-cover"
      />
      <p className="text-black font-bold text-center w-full mt-4">
        {"Handbag 1"}
      </p>
    </div>
  );
}
