"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useLocalStorage } from "usehooks-ts";
import Link from "next/link";
import { useAuth } from "@/lib/context/AuthContext";
import InputField from "../components/InputField";
import { toast } from "react-hot-toast";

export default function () {
  const router = useRouter();
  const [_, setActivationEmail] = useLocalStorage("activationEmail", "");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState(null);
  const { signup } = useAuth();

  const handleTermsChange = (event) => {
    setAcceptedTerms(event.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await toast.promise(
        signup(
          e.target.username.value,
          e.target.email.value,
          e.target.password.value
        ),
        {
          loading: "Loading",
          success: (data) => {
            setError(null);
            setActivationEmail(data.data.email);
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
        router.push("/confirm-email");
      }, 3000);
    } catch (err) {
      setError(err.errors);
    }
  };

  return (
    <div className="pt-4 rounded-full flex flex-col gap-4 items-center justify-center">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <InputField
          type="text"
          icon="/icons/auth/user.svg"
          error={error?.username?.[0]}
          placeholder="Username"
          name="username"
        />
        <InputField
          type="text"
          icon="/icons/auth/email.svg"
          error={error?.email?.[0]}
          placeholder="Email"
          name="email"
        />
        <InputField
          type="password"
          icon="/icons/auth/locked.svg"
          error={error?.password?.[0]}
          placeholder="Password"
          name="password"
        />
        <label className="flex items-center gap-2">
          <input
            required
            type="checkbox"
            checked={acceptedTerms}
            onChange={handleTermsChange}
            className="form-checkbox"
          />
          <span className="text-xs">I accept the terms and conditions</span>
        </label>
        <button
          type="submit"
          className="p-2 rounded-full bg-cpink-100 hover:bg-cpink-200 text-white w-1/2 self-center"
        >
          SEND
        </button>

        <span className="text-xs text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-[#01A7A2]">
            Sign In
          </Link>
        </span>
      </form>
    </div>
  );
}
