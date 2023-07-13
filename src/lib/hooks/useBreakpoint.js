"use client";
import { useState, useEffect } from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 767px)").matches) {
        setBreakpoint("mobile");
      } else if (window.matchMedia("(max-width: 1023px)").matches) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("desktop");
      }
    };

    window.addEventListener("resize", handleResize);

    // Set the initial breakpoint
    handleResize();

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
