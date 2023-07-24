"use client";

import { useAuth } from "@/lib/context/AuthContext";
import Container from "@/lib/ui/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function () {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [inputFields, setInputFields] = useState({
    first_name: user.first_name ?? "",
    last_name: user.last_name ?? "",
    username: user.username ?? "",
    email: user.email ?? "",
    phone: user.phone ?? "",
    address_line_1: user.address_line_1 ?? "",
    address_line_2: user.address_line_2 ?? "",
    city: user.city ?? "",
    state: user.state ?? "",
    postcode: user.postcode ?? "",
    country: user.country ?? ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    console.log(inputFields);
    toast.success("Profile updated successfully");
  };

  const handleInputChange = (e) => {
    const name = e.target.name;

    setInputFields({
      ...inputFields,
      [name]: e.target.value
    });
  };

  const inputs = [
    {
      label: "First name",
      name: "first_name",
      type: "text",
      value: inputFields.first_name
    },
    {
      label: "Last name",
      name: "last_name",
      type: "text",
      value: inputFields.last_name
    },
    {
      label: "Username",
      name: "username",
      type: "text",
      value: inputFields.username
    },
    {
      label: "Email",
      name: "email",
      type: "text",
      value: inputFields.email
    },
    {
      label: "Phone",
      name: "phone",
      type: "text",
      value: inputFields.phone
    },
    {
      label: "Address 1",
      name: "address_line_1",
      type: "text",
      value: inputFields.address_line_1
    },
    {
      label: "Address 2",
      name: "address_line_2",
      type: "text",
      value: inputFields.address_line_2
    },
    {
      label: "City",
      name: "city",
      type: "text",
      value: inputFields.city
    },
    {
      label: "State",
      name: "state",
      type: "text",
      value: inputFields.state
    },
    {
      label: "Postcode",
      name: "postcode",
      type: "text",
      value: inputFields.postcode
    },
    {
      label: "Country",
      name: "country",
      type: "text",
      value: inputFields.country
    }
  ];

  return (
    <>
      {!isAuthenticated ? (
        <div className="p-5">
          <div className="text-center">
            <h1 className="text-2xl font-bold">You are not logged in</h1>
            <p className="text-lg">Please login to view your profile</p>
            <Link
              href="/login"
              className="block mx-auto mt-2 bg-primary px-3 py-2 w-fit text-[24px] text-white"
            >
              LOGIN
            </Link>
          </div>
        </div>
      ) : (
        <Container>
          <div className="py-3">
            <div className="mb-2 space-y-3 text-center">
              <h2 className="text-xl">Edit profile</h2>
              <p>Please fill in the information below:</p>
            </div>
            <form onSubmit={handleSubmit}>
              {inputs.map((input, index) => (
                <div className="mb-4" key={index}>
                  <label
                    htmlFor={input.name}
                    className="block text-gray-700 font-bold mb-2"
                  >
                    {input.label}
                  </label>
                  <input
                    type={input.type}
                    id={input.name}
                    name={input.name}
                    value={input.value}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              ))}
              <div className="flex justify-center gap-4">
                <Link
                  href="/profile"
                  className="bg-[#D9D9D9] flex-1 md:flex-none text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Go back
                </Link>
                <button
                  type="submit"
                  className="bg-primary flex-1 md:flex-none text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </Container>
      )}
    </>
  );
}
