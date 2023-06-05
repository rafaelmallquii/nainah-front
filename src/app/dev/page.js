"use client";

import Card from "@/components/card/Card";
import CategoryBar from "@/components/categoryBar/CategoryBar";
import ModalVertical from "@/components/core/Modal";
import { useState } from "react";

export default function () {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="container">
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card description="Mostro" price={70} priceOld={80} productName="Producto 1" img="/img/cart.png" />
        <Card description="Mostro" price={75} priceOld={80} productName="Producto 2" img="/img/cart.png" />
        <Card description="Mostro" price={80} priceOld={80} productName="Producto 3" img="/img/cart.png" />
        <Card description="Mostro" price={90} priceOld={80} productName="Producto 4" img="/img/cart.png" />
        
        
      </div> */}

      {/* <CategoryBar /> */}

      <button onClick={()=> setIsOpenModal(!isOpenModal)}>ABRIR </button>

      <ModalVertical
        right
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        bgDark={false}
      >
        <div className="w-screen">sdadda
          
      <button onClick={()=> setIsOpenModal(!isOpenModal)}>CERRAR </button>
        </div>
      </ModalVertical>
    </div>
  );
}
