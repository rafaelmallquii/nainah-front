"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navMenuIcon = [
  {
    name: "Wishlist",
    href: "#",
    icon: "/icons/hearth.svg",
  },
  {
    name: "Account",
    href: "#",
    icon: "/icons/user.svg",
  },
  {
    name: "Search",
    href: "#",
    icon: "/icons/search.svg",
  },
  {
    name: "Cart",
    href: "#",
    icon: "/icons/cart.svg",
  },
];

const navMenu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Catalogs",
    href: "#",
  },
  {
    name: "Coupons",
    href: "#",
  },
  {
    name: "Shop",
    href: "#",
  },
];

const isActive = (href, path) => {
  if (href === path) {
    return "before:w-full";
  } else {
    return "hover:before:w-full";
  }
};

export default function Nav() {
  const path = usePathname();

  return (
    <nav className="container">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex gap-4 items-center">
          <Link href="#" className="flex items-center">
            <img src="/img/logo.svg" className="h-[4rem] mr-3" alt="Logo" />
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
        {/* <label
          htmlFor="menu"
          type="button"
          className="inline-flex items-center p-2  text-sm  rounded-lg md:hidden"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <input type="checkbox" id="menu" hidden className="peer/menu" /> */}
        <ul className="font-medium flex gap-2 w-max items-center">
          {navMenuIcon.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="block px-2">
                <img src={item.icon} height={24} width={24} alt={item.name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
