import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

import dynamic from "next/dynamic";

const CartContextProvider = dynamic(() => import("@/lib/context/CartContext"), {
  ssr: false
});

const HomeContextProvider = dynamic(() => import("@/lib/context/HomeContext"), {
  ssr: false
});

export default function ({ children }) {
  return (
    <CartContextProvider>
      <HomeContextProvider>
        <Nav />
        <div>{children}</div>
        <Footer />
        <div id="modal-root" />
      </HomeContextProvider>
    </CartContextProvider>
  );
}
