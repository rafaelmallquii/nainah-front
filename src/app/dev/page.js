import Card from "@/components/card/Card";
import CategoryBar from "@/components/categoryBar/CategoryBar";

export default function () {
  return (
    <div className="container">
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card description="Mostro" price={70} priceOld={80} productName="Producto 1" img="/img/cart.png" />
        <Card description="Mostro" price={75} priceOld={80} productName="Producto 2" img="/img/cart.png" />
        <Card description="Mostro" price={80} priceOld={80} productName="Producto 3" img="/img/cart.png" />
        <Card description="Mostro" price={90} priceOld={80} productName="Producto 4" img="/img/cart.png" />
        
        
      </div> */}

      <CategoryBar />
    </div>
  );
}
