"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ({ children }) {
  const pathname = usePathname();

  return (
    <div className="tabs flex flex-col items-center">
      <div className="w-full">
        <Link
          className={`tab tab-bordered w-1/2 ${
            pathname === "/signup" ? "tab-active" : ""
          }`}
          href="/signup"
        >
          Register
        </Link>
        <Link
          className={`tab tab-bordered w-1/2 ${
            pathname === "/login" ? "tab-active" : ""
          }`}
          href="/login"
        >
          Login
        </Link>
      </div>
      <div className="tab-content">{children}</div>
    </div>
  );
}
