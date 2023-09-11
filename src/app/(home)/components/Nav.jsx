"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import CartModal from "../cart/components/CartModal.jsx";
import { useHome } from "@/lib/context/HomeContext.jsx";

export default function Nav() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { settings } = useHome();
  const path = usePathname();

  const isActive = (href, path) => {
    if (href === path) {
      return "before:w-full";
    } else {
      return "hover:before:w-full";
    }
  };

  const navMenu = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "About us",
      href: "/"
    },
    {
      name: "Catalogs",
      href: "/"
    },
    {
      name: "Coupons",
      href: "/"
    },
    {
      name: "Shop",
      href: "/"
    }
  ];

  const navMenuIcon = [
    {
      name: "Wishlist",
      href: "/",
      custom: false,
      icon: "/icons/hearth.svg"
    },
    {
      name: "Search",
      href: "/",
      custom: false,
      icon: "/icons/search.svg"
    },
    {
      name: "Account",
      href: "/profile",
      custom: false,
      icon: "/icons/user.svg"
    },
    {
      name: "Cart",
      icon: "/icons/cart.svg",
      custom: true,
      action: () => setIsOpenModal(true)
    }
  ];

  return (
    <>
      <nav className="h-[61px] lg:h-[100px] bg-white sticky top-0 z-[999] left-0 w-full px-3 lg:px-5 [box-shadow:1px_3px_4px_rgba(0,0,0,0.25)] ">
        <div className="flex flex-wrap items-center justify-between h-full">
          <div className="flex gap-4 items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={settings?.site_logo}
                width={33}
                height={33}
                className="mr-6 block lg:hidden"
                alt="Logo"
              />

              <Image
                src={settings?.site_logo}
                width={71}
                height={71}
                className="mr-6 hidden lg:block"
                alt="Logo"
              />
            </Link>
            <ul className="font-medium flex max-md:flex-col max-md:p-4 max-md:mt-4 rounded-lg max-lg:hidden  md:space-x-8">
              {navMenu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`text-[18px] block py-2 pl-3 pr-4 md:p-0 uppercase relative before:absolute before:content-[''] before:w-0  before:-bottom-1  before:h-[1px] ${isActive(
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

          <ul className="font-medium flex gap-[12px] lg:gap-[48px] w-max items-center">
            {navMenuIcon.map((item, index) => (
              <li key={index}>
                {item?.custom ? (
                  <button onClick={item.action} className="block">
                    <Image
                      src={item.icon}
                      height={24}
                      width={24}
                      alt={item.name}
                      className="block lg:hidden"
                    />
                    <Image
                      src={item.icon}
                      height={36}
                      width={36}
                      alt={item.name}
                      className="hidden lg:block"
                    />
                  </button>
                ) : (
                  <Link href={item.href} className="block">
                    <Image
                      src={item.icon}
                      height={24}
                      width={24}
                      alt={item.name}
                      className="block lg:hidden"
                    />
                    <Image
                      src={item.icon}
                      height={36}
                      width={36}
                      alt={item.name}
                      className="hidden lg:block"
                    />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <CartModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </>
  );
}
