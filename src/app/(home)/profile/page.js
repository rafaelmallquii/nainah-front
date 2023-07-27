"use client";

import { useAuth } from "@/lib/context/AuthContext";
import Container from "@/lib/ui/Container";
import Link from "next/link";

export default function () {
  const { user, isAuthenticated, logout } = useAuth();
  const orders = [];

  return (
    <>
      {!isAuthenticated ? (
        <div className="h-full p-5 text-center">
          <h1 className="text-2xl font-bold">You are not logged in</h1>
          <p className="text-lg">Please login to view your profile</p>
          <Link
            href="/login"
            className="block mx-auto mt-2 bg-primary px-3 py-2 w-fit text-[24px] text-white"
          >
            LOGIN
          </Link>
        </div>
      ) : (
        <Container>
          <div className="p-5 space-y-5">
            <div>
              <h2 className="font-bold">My Account</h2>
              <p className="">Welcome back, {user.username}</p>
            </div>
            <div>
              <span className="text-gray-500">My orders</span>
              <hr className="my-2 h-[1px] bg-gray-50" />
              {orders.length > 0 ? (
                orders.map((order) => (
                  <div key={order.id}>
                    <p className="text-xs">{order.id}</p>
                    <p className="text-xs">{order.date}</p>
                    <p className="text-xs">{order.status}</p>
                    <p className="text-xs">{order.total}</p>
                  </div>
                ))
              ) : (
                <p className="text-xs">You haven't placed any orders yet</p>
              )}
            </div>
            <div>
              <span className="text-gray-500">Your profile</span>
              <hr className="my-2 h-[1px] bg-gray-50" />
              <div className="mb-4">
                <p className="text-xs">{user.username}</p>
                <p className="text-xs">{user.phone}</p>
                <p className="text-xs">{user.address_line_1}</p>
                <p className="text-xs">{user.address_line_2}</p>
                <p className="text-xs">
                  {user.city} {user.postcode}
                </p>
                <p className="text-xs">{user.state}</p>
                <p className="text-xs">{user.country}</p>
              </div>
              <div className="space-x-5">
                <Link
                  href="/edit-profile"
                  className="bg-[#FFBCCC] p-2 text-white text-xs"
                >
                  EDIT PROFILE
                </Link>
                <button
                  onClick={logout}
                  className="bg-gray-500 p-2 text-white text-xs"
                >
                  LOGOUT
                </button>
              </div>
            </div>
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
          </div>
        </Container>
      )}
    </>
  );
}
