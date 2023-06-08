import { formatPrice } from "@/helpers/helpers";

export default function CardClassic({ img, title, price, priceOld }) {
  return (
    <div>
      <img src={img} alt="Card" />

      <section className=" space-y-2 mt-4">
        <h4>{title}</h4>

        <div className="space-x-4">
          <span className="text-secondary">{formatPrice(price)}</span>
          <span className="line-through">{formatPrice(priceOld)}</span>
        </div>
      </section>
    </div>
  );
}
