import Link from "next/link";

const navMenu = [
  {
    name: "Inicio",
    href: "#",
  },
  {
    name: "Nosotros",
    href: "#",
  },
  {
    name: "Servicios",
    href: "#",
  },
  {
    name: "Contacto",
    href: "#",
  },
];
export default function Nav() {
  return (
    <nav className="container">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="#" className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
            className="h-8 mr-3"
            alt="Logo"
          />
        </Link>
        <label
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
        <input type="checkbox" id="menu" hidden className="peer/menu" />
        <div
          className=" w-full md:block md:w-auto hidden peer-checked/menu:block"
          id="navbar-default"
        >
          <ul className="font-medium flex max-md:flex-col max-md:p-4 max-md:mt-4 rounded-lg  md:space-x-8">
            {navMenu.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="block py-2 pl-3 pr-4 md:p-0">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
