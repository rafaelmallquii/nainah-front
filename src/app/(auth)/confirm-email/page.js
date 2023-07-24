"use client";
import { useAuth } from "@/lib/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useLocalStorage } from "usehooks-ts";

export default function () {
  const router = useRouter();
  const [activationEmail, _] = useLocalStorage("activationEmail", "");
  const { resendActivationEmail } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await toast.promise(
        resendActivationEmail(activationEmail),
        {
          loading: "Loading",
          success: (data) => {
            return data.message;
          },
          error: (err) => {
            return err.message;
          }
        },
        {
          style: {
            minWidth: "250px"
          },
          success: {
            duration: 2500
          },
          error: {
            duration: 2500
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!activationEmail) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="space-y-3">
      <h2 className="text-center font-bold text-lg">Confirm your email</h2>
      <div className="h-[1px] bg-black"></div>
      <p className="text-xs">
        Confirm your email address by clicking the link in the email we sent to:
      </p>
      <div className="flex gap-2">
        <img src="/icons/auth/email.svg" alt="" />
        <span className="text-xs">{activationEmail}</span>
      </div>
      <span className="text-[10px]">
        If you don't see your email in your inbox, check spam.
      </span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <button
          type="submit"
          className="p-2 text-base rounded-full bg-cpink-100 hover:bg-cpink-200 text-white"
        >
          Resend confirmation email
        </button>
        <Link className="text-[#01A7A2] text-base text-center" href="/login">
          Sign In
        </Link>
      </form>
    </div>
  );
}
