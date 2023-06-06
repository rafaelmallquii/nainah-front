import Link from "next/link";

const customerService = [
  ["Privacy Policy", "#"],
  ["Shipping Policy", "#"],
  ["Terms & Conditions", "#"],
  ["Return & Refund Policy", "#"],
  ["Delivery, Return & Change", "#"],
  ["Distance Sales Agreement", "#"],
  ["Preliminary Information Form", "#"],
  ["Terms of Service", "#"],
];

const menu = [
  ["About Us", "#"],
  ["Stockist", "#"],
  ["FAQ", "#"],
];

const contact = [
  ["123 Ocean Avenue Miami, FL 33101 United States", "#", "w-[145px] block"],

  ["hello@nainahcollections.com", "#"],
  ["pr@nainahcollections.com", "#", "underline"],
];

export default function Footer() {
  return (
    <footer className="container p-4 space-y-4">
      <section className="space-y-4 text-[20px]">
        <h2>Newletter</h2>

        <p>
          Sign up for our newsletter easily and be the first to know about our
          latest news.
        </p>

        <input
          type="text"
          placeholder="Enter your email address"
          className="outline-none border p-4 w-full"
        />

        <button className="bg-primary w-[226px] h-[64px] text-white">
          SUBSCRIBE
        </button>
      </section>

      <section className="space-y-[19px]">
        <h2 className="text-[20px] text-[#C0C3C3]">Customer Service</h2>

        <ul className="space-y-[12px]">
          {customerService.map(([name, href], i) => (
            <li key={i}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="space-y-[19px]">
        <h2 className="text-[20px] text-[#C0C3C3]">Menu</h2>

        <ul className="space-y-[12px]">
          {menu.map(([name, href], i) => (
            <li key={i}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="space-y-[19px]">
        <h2 className="text-[20px] text-[#C0C3C3]">Contact</h2>

        <ul className="space-y-[12px]">
          {contact.map(([name, href, className], i) => (
            <li key={i}>
              <Link className={className ?? "contact"} href={href}>
                {name}
              </Link>
            </li>
          ))}
          <li className="flex gap-[35px]">
            <Link href="#">
              <img src="/icons/social/facebook.png" alt="Facebook Icon" />
            </Link>
            <Link href="#">
              <img src="/icons/social/instagram.png" alt="Instagram Icon" />
            </Link>
            <Link href="#">
              <img src="/icons/social/tiktok.png" alt="Tiktok Icon" />
            </Link>
          </li>
        </ul>
      </section>

      <section className="space-y-[26px]">
        <p className=" text-[20px]">© Nainah Collections</p>
        <p className=" text-[14px]">Powered By Aimet</p>
      </section>

      <section>
        <ul className="flex gap-[10px] items-center">
          <li>
            <img src="/img/payment/afterpay.png" alt="Afterpay" />
          </li>
          <li>
            <img src="/img/payment/authorize.png" alt="Authorize" />
          </li>
          <li>
            <img src="/img/payment/visa.png" alt="Visa" />
          </li>
          <li>
            <img src="/img/payment/master_card.png" alt="Master Card" />
          </li>
          <li>
            <img src="/img/payment/maestro.png" alt="Maestro" />
          </li>
        </ul>
      </section>
    </footer>
  );
}
