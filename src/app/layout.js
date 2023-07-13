import { Montserrat } from "next/font/google";

import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";

import "./globals.css";
import dynamic from "next/dynamic";

const CartContextProvider = dynamic(() => import("@/lib/context/CartContext"), {
  ssr: false
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"]
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function ({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <CartContextProvider>
          <Nav />
          <div>{children}</div>
          <Footer />
          <div id="modal-root" />
        </CartContextProvider>
      </body>
    </html>
  );
}
