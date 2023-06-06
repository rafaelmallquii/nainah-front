"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "../cart/Cart";
import { useState } from "react";

const isActive = (href, path) => {
  if (href === path) {
    return "before:w-full";
  } else {
    return "hover:before:w-full";
  }
};

const navMenu = [];

export default function Nav() {
  const [isOpenModal, setIsOpenModal] = useState(false); // [1
  const path = usePathname();

  const navMenuIcon = [
    {
      name: "Wishlist",
      href: "#",
      icon: "/icons/hearth.svg",
    },
    {
      name: "Search",
      href: "#",
      icon: "/icons/search.svg",
    },
    {
      name: "Account",
      href: "#",
      icon: "/icons/user.svg",
    },
    {
      name: "Cart",
      href: "#",
      icon: "/icons/cart.svg",
      action: () => setIsOpenModal(true),
    },
  ];

  return (
    <>
      <nav className="container h-[40px] bg-white fixed top-0 left-0 w-full px-[12px] [box-shadow:1px_3px_4px_rgba(0,0,0,0.25)] ">
        <div className="flex flex-wrap items-center justify-between  h-full">
          <div className="flex gap-4 items-center">
            <Link href="#" className="flex items-center">
              <img src="/img/logo.svg" className="h-[33px] mr-3" alt="Logo" />
            </Link>
            <ul className="font-medium flex max-md:flex-col max-md:p-4 max-md:mt-4 rounded-lg max-lg:hidden  md:space-x-8">
              {navMenu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`block py-2 pl-3 pr-4 md:p-0 uppercase relative before:absolute before:content-[''] before:w-0  before:-bottom-1  before:h-[1px] ${isActive(
                      item.href,
                      path
                    )} before:bg-black before:transition-[width_600ms] before:duration-300 ease-in-out`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ul className="font-medium flex gap-[12px] w-max items-center">
            {navMenuIcon.map((item, index) => (
              <li key={index}>
                {item?.custom ? (
                  <Link href={item.href} className="block">
                    <img
                      src={item.icon}
                      height={24}
                      width={24}
                      alt={item.name}
                    />
                  </Link>
                ) : (
                  <button onClick={item.action} className="block">
                    <img
                      src={item.icon}
                      height={24}
                      width={24}
                      alt={item.name}
                    />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Cart isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </>
  );
}
