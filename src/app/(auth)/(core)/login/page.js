"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import InputField from "../components/InputField";
import { useAuth } from "@/lib/context/AuthContext";

import { useLocalStorage } from "usehooks-ts";
import { toast } from "react-hot-toast";

export default function () {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [activationEmail, _] = useLocalStorage("activationEmail", null);
  const [error, setError] = useState(null);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await toast.promise(
        login(e.target.email.value, e.target.password.value),
        {
          loading: "Loading",
          success: (data) => {
            setError(null);
            return data.message;
          },
          error: (err) => {
            setError(err?.errors ?? null);
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
      setTimeout(() => {
        router.replace("/");
      }, 3000);
    } catch (err) {
      setError(err.errors);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="pt-4 rounded-full flex flex-col gap-4 items-center justify-center">
      <h2 className="text-[24px]">Welcome</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputField
          type="text"
          name="email"
          error={error?.email?.[0]}
          icon="/icons/auth/email.svg"
          placeholder="Email"
          defaultValue={activationEmail}
        />
        <InputField
          type="password"
          name="password"
          error={error?.password?.[0]}
          icon="/icons/auth/locked.svg"
          placeholder="Password"
        />
        {error?.detail && (
          <div className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xs text-white">{error.detail}</span>
          </div>
        )}
        <Link
          href="/password/reset"
          className="text-xs text-center text-[#01A7A2]"
        >
          Forgot password?
        </Link>
        <button
          type="submit"
          className="p-2 rounded-full bg-cpink-100 hover:bg-cpink-200 text-white w-1/2 self-center"
        >
          LOGIN
        </button>

        <span className="text-xs text-center">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[#01A7A2]">
            Create one
          </Link>
        </span>
      </form>
    </div>
  );
}
