import "./globals.css";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Nav />
        <div>{children}</div>
       {/*  <Footer /> */}
      </body>
    </html>
  );
}
