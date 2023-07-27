import ProductList from "@/lib/ui/ProductList";
import PropTypes from "prop-types";
import Image from "next/image";
import Title from "@/lib/ui/Title";

export default function NewCollectionSection({
  active,
  banner,
  name,
  description,
  products,
  show_quantity
}) {
  return (
    <>
      {active && products.length > 0 && (
        <section className="space-y-4">
          <Title name={name} description={description} />
          <Image
            src={banner}
            width={1520}
            height={980}
            quality={100}
            className="w-full object-cover"
            alt={`Banner ${name}`}
          />

          <>
            <div className="grid grid-cols-2 md:grid-cols-4 p-5 gap-5 mt-4">
              {products.slice(0, show_quantity).map((product) => (
                <ProductList
                  key={product.id}
                  product_title={product.product.title}
                  title={product.title}
                  image={product.image}
                  newPrice={`$ ${product.sale_price}`}
                  oldPrice={`$ ${product.price}`}
                />
              ))}
            </div>
          </>
        </section>
      )}
    </>
  );
}

NewCollectionSection.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  banner: PropTypes.string,
  show_quantity: PropTypes.number,
  order: PropTypes.number
};
