import React from "react";

const Title = ({ name, description }) => {
  return (
    <div className="text-center my-[66px]">
      <h2 className="text-xl lg:text-[64px] text-black font-bold">{name}</h2>
      <p className="text-xs lg:text-2xl text-[rgba(36,50,50,0.5)] mt-3 mx-auto">
        {description}
      </p>
    </div>
  );
};

export default Title;
