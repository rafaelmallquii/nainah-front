import ProductList from "@/lib/ui/ProductList";
import HeroBanner from "./HeroBanner";

const images = [
  { id: 1, src: "/img/cart_2.png" },
  { id: 2, src: "/img/cart_2.png" },
  { id: 3, src: "/img/cart_2.png" },
  { id: 4, src: "/img/cart_2.png" },
  { id: 5, src: "/img/cart_2.png" },
  { id: 6, src: "/img/cart_2.png" },
  { id: 7, src: "/img/cart_2.png" },
  { id: 8, src: "/img/cart_2.png" }
];

export default function NewCollectionSection() {
  return (
    <div className="bg-white space-y-4">
      <div className="text-center ">
        <h2 className="text-xl text-black font-bold">NEW COLLECTION</h2>
        <p className="text-xs text-[rgba(36,50,50,0.5)] mt-3 max-w-[35ch] mx-auto">
          Discover a stunning collection of products that combine style and
          functionality.
        </p>
      </div>
      <HeroBanner
        src={"/img/collection-banner.jpg"}
        width={343}
        height={247}
        alt="Collection Banner"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 p-3 gap-4 mt-4">
        {images.map((image) => (
          <ProductList
            key={image.id}
            image={image.src}
            newPrice={"$ 50.00"}
            oldPrice={"$ 60.00"}
            title={"Product 1"}
          />
        ))}
      </div>
    </div>
  );
}
