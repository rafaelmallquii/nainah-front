import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Spinner = () => {
  return (
    <div className="h-screen grid place-items-center">
      <AiOutlineLoading3Quarters className="animate-spin text-5xl" />
    </div>
  );
};

export default Spinner;
