"use client";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function InputField({ type, icon, error, ...props }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div>
      <div className="relative flex items-center">
        <input
          type={type === "password" && isPasswordVisible ? "text" : type}
          {...props}
          className={`input input-bordered input-sm w-full max-w-xs ${
            error ? "input-error" : ""
          }`}
          style={{ paddingLeft: "40px" }}
        />
        <img
          src={icon}
          className="absolute left-2 text-[#9E9E9E] w-[16px] h-[16px]"
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute top-1/2 right-2 transform -translate-y-1/2"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        )}
      </div>
      {error && (
        <span className="text-[12px] text-xs text-red-500">{error}</span>
      )}
    </div>
  );
}
