"use client";
import { useHome } from "@/lib/context/HomeContext";
import useBreakpoint from "@/lib/hooks/useBreakpoint";
import Link from "next/link";
import { toast } from "react-hot-toast";

const customerService = [
  ["Privacy Policy", "#"],
  ["Shipping Policy", "#"],
  ["Terms & Conditions", "#"],
  ["Return & Refund Policy", "#"],
  ["Delivery, Return & Change", "#"],
  ["Distance Sales Agreement", "#"],
  ["Preliminary Information Form", "#"],
  ["Terms of Service", "#"]
];

const menu = [
  ["About Us", "#"],
  ["Stockist", "#"],
  ["FAQ", "#"]
];

export default function Footer() {
  const { settings, subscribe } = useHome();
  const breakpoint = useBreakpoint();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputEmail = e.target.email.value;
    const myPromise = subscribe(inputEmail);
    toast.promise(myPromise, {
      loading: "Loading",
      success: (data) => "Subscribed successfully",
      error: (err) => `${err.message}`
    });
    e.target.reset();
  };

  return (
    <>
      {breakpoint === "desktop" ? (
        <FooterDesktop
          handleSubmit={handleSubmit}
          settings={settings}
          customerService={customerService}
          menu={menu}
        />
      ) : (
        <FooterMobile
          handleSubmit={handleSubmit}
          settings={settings}
          customerService={customerService}
          menu={menu}
        />
      )}
    </>
  );
}

function FooterMobile({ handleSubmit, settings, customerService, menu }) {
  return (
    <footer className="p-5 space-y-4 bg-[#F5F5F5]">
      <section>
        <form onSubmit={handleSubmit} className="space-y-[19px] text-[20px]">
          <h2 className="text-xl">Newletter</h2>
          <p className="text-xl">
            Sign up for our newsletter <br /> easily and be the first to know{" "}
            <br /> about our latest news.
          </p>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="text-[22px] outline-none border p-4 w-full bg-transparent border-[#C0C3C3]"
          />
          <button
            type="submit"
            className="bg-primary w-fit p-5 text-[24px] text-white"
          >
            SUBSCRIBE
          </button>
        </form>
      </section>

      <section className="space-y-[19px]">
        <h2 className="text-xl text-[#C0C3C3]">Customer Service</h2>

        <ul className="space-y-[12px]">
          {customerService.map(([name, href], i) => (
            <li key={i}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-[19px]">
        <h2 className="text-xl text-[#C0C3C3]">Menu</h2>

        <ul className="space-y-[12px]">
          {menu.map(([name, href], i) => (
            <li key={i}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-[19px]">
        <h2 className="text-xl text-[#C0C3C3]">Contact</h2>

        <ul className="space-y-[12px]">
          <li className="max-w-[12ch]">{settings.site_address}</li>
          <li>{settings.site_phone}</li>
          <li>{settings.site_email}</li>
          <li className="flex gap-[35px]">
            <Link href={settings.site_facebook}>
              <img src="/icons/social/facebook.png" alt="Facebook Icon" />
            </Link>
            <Link href={settings.site_instagram}>
              <img src="/icons/social/instagram.png" alt="Instagram Icon" />
            </Link>
            <Link href={settings.site_tiktok}>
              <img src="/icons/social/tiktok.png" alt="Tiktok Icon" />
            </Link>
          </li>
        </ul>
      </section>

      <section className="space-y-[26px]">
        <p className=" text-[20px]">© Nainah Collections</p>
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

function FooterDesktop({ handleSubmit, settings, customerService, menu }) {
  return (
    <footer className="px-5 py-20 bg-[#F5F5F5] space-y-[25px]">
      <div className="flex flex-row justify-between gap-8 space-y-4">
        <section className="min-w-[358px]">
          <form onSubmit={handleSubmit} className="space-y-[19px] text-[20px]">
            <h2 className="text-xl">Newletter</h2>
            <p className="text-xl">
              Sign up for our newsletter <br /> easily and be the first to know{" "}
              <br /> about our latest news.
            </p>
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              className="text-[22px] outline-none border p-4 w-full bg-transparent border-[#C0C3C3]"
            />
            <button
              type="submit"
              className="bg-primary w-fit p-5 text-[24px] text-white"
            >
              SUBSCRIBE
            </button>
          </form>
        </section>
        <section className="space-y-[19px]">
          <h2 className="text-xl text-[#C0C3C3]">Customer Service</h2>
          <ul className="space-y-[12px]">
            {customerService.map(([name, href], i) => (
              <li key={i}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="space-y-[19px]">
          <h2 className="text-xl text-[#C0C3C3]">Menu</h2>
          <ul className="space-y-[12px]">
            {menu.map(([name, href], i) => (
              <li key={i}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="space-y-[19px]">
          <h2 className="text-xl text-[#C0C3C3]">Contact</h2>
          <ul className="space-y-[12px]">
            <li className="max-w-[12ch]">{settings.site_address}</li>
            <li>{settings.site_phone}</li>
            <li>{settings.site_email}</li>
            <li className="flex gap-[35px]">
              <Link href={settings.site_facebook}>
                <img src="/icons/social/facebook.png" alt="Facebook Icon" />
              </Link>
              <Link href={settings.site_instagram}>
                <img src="/icons/social/instagram.png" alt="Instagram Icon" />
              </Link>
              <Link href={settings.site_tiktok}>
                <img src="/icons/social/tiktok.png" alt="Tiktok Icon" />
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <hr className="bg-[#D9D9D9]" />
      <div className="flex justify-between">
        <section className="space-y-[26px]">
          <p className=" text-[20px]">© Nainah Collections</p>
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
      </div>
    </footer>
  );
}
