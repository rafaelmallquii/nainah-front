import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="container">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="#" className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0">
            <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <span className="block text-sm  sm:text-center ">
          © {year}{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            NextJS™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
