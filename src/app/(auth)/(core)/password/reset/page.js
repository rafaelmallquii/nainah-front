"use client";

import { useAuth } from "@/lib/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import InputField from "../../components/InputField";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function () {
  const router = useRouter();
  const [error, setError] = useState(null);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await toast.promise(
        resetPassword(e.target.email.value),
        {
          loading: "Loading",
          success: (data) => {
            setError(null);
            return data.message;
          },
          error: (err) => {
            setError(err.errors);
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
    } catch (err) {
      setError(err.errors);
    }
  };

  return (
    <div className="pt-4 rounded-full flex flex-col gap-4 items-center justify-center">
      <h2 className="text-[24px]">Recover Password</h2>
      <span className="text-center text-[16px] mx-auto w-[250px]">
        We will send you an email so you can reset your password
      </span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputField
          type="text"
          name="email"
          error={error?.email?.[0]}
          icon="/icons/auth/email.svg"
          placeholder="Email"
        />
        <button
          type="submit"
          className="p-2 rounded-full bg-cpink-100 hover:bg-cpink-200 text-white w-1/2 self-center"
        >
          SEND
        </button>

        <span className="text-xs text-center">
          Remembered your password?{" "}
          <Link href="/login" className="text-[#01A7A2]">
            Sign In
          </Link>
        </span>
      </form>
    </div>
  );
}
