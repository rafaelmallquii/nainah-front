import ProductList from "@/lib/ui/ProductList";
import Container from "@/lib/ui/Container";
import PropTypes from "prop-types";
import Image from "next/image";

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
          <div className="text-center ">
            <h2 className="text-xl text-black font-bold">{name}</h2>
            <p className="text-xs text-[rgba(36,50,50,0.5)] mt-3 max-w-[35ch] mx-auto">
              {description}
            </p>
          </div>
          <Image
            src={banner}
            width={1520}
            height={980}
            quality={100}
            className="w-full object-cover"
            alt={`Banner ${name}`}
          />

          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 p-5 gap-4 mt-4">
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
          </Container>
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
