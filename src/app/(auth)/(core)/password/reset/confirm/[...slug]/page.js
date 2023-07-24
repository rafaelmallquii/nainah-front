"use client";
import InputField from "@/app/(auth)/(core)/components/InputField";
import { useAuth } from "@/lib/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ({ params }) {
  const router = useRouter();
  const { slug } = params;
  const uid = slug[0];
  const token = slug[1];
  const [error, setError] = useState(null);
  const { resetPasswordConfirm } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await toast.promise(
      resetPasswordConfirm(uid, token, e.target.new_password.value),
      {
        loading: "Verifying",
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
  };

  return (
    <div className="pt-4 rounded-full flex flex-col gap-4 items-center justify-center">
      <h2 className="text-[24px]">New Password</h2>
      <span className="text-center text-[16px] mx-auto w-[250px]">
        Enter your new password
      </span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputField
          type="password"
          name="new_password"
          error={error?.new_password?.[0]}
          icon="/icons/auth/locked.svg"
          placeholder="New password"
        />
        <button
          type="submit"
          className="p-2 rounded-full bg-cpink-100 hover:bg-cpink-200 text-white w-1/2 self-center"
        >
          SEND
        </button>

        <span className="text-xs text-center">
          <Link href="/login" className="text-[#01A7A2]">
            Sign In
          </Link>
        </span>
      </form>
    </div>
  );
}
