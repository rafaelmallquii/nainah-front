"use client";
import { useAuth } from "@/lib/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function ({ params }) {
  const router = useRouter();
  const { slug } = params;
  const uid = slug[0];
  const token = slug[1];
  const { activateAccount } = useAuth();

  const handleLoading = async () => {
    await toast.promise(
      activateAccount(uid, token),
      {
        loading: "Verifying",
        success: (data) => {
          setTimeout(() => {
            router.push("/login");
          }, 2500);
          return data.message;
        },
        error: (err) => {
          setTimeout(() => {
            router.push("/login");
          }, 2500);
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

  useEffect(() => {
    if (!uid || !token) {
      router.push("/login");
      return;
    }

    handleLoading();
  }, [params]);

  return (
    <div>
      <h1 className="text-xl md:text-3xl font-bold p-3 text-center">
        Account validation
      </h1>
    </div>
  );
}
