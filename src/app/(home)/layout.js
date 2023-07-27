import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

import { CartProvider } from "@/lib/context/CartContext.jsx";
import { HomeProvider } from "@/lib/context/HomeContext.jsx";

export default function ({ children }) {
  return (
    <CartProvider>
      <HomeProvider>
        <Nav />
        {children}
        <Footer />
        <div id="modal-root" />
      </HomeProvider>
    </CartProvider>
  );
}
