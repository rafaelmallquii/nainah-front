"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { AnimatePresence, motion } from "framer-motion";
import useBreakpoint from "../hooks/useBreakpoint";

const Portal = ({ children }) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#modal-root");
    setMounted(true);
  }, []);
  return mounted && ref.current ? createPortal(children, ref.current) : null;
};

export default function ModalVertical({
  children,
  isOpenModal = false,
  blur,
  right,
  bgDark = true,
  selectable
}) {
  const breakpoint = useBreakpoint();

  return (
    <Portal>
      <AnimatePresence>
        {isOpenModal && (
          <motion.div
            className={`w-screen fixed left-0 bottom-0 top-[40px] lg:top-[100px] z-[200] grid place-content-center place-items-center ${
              selectable ? "pointer-events-none" : ""
            } ${blur ? "backdrop-blur-[6px]" : ""} ${
              bgDark ? "bg-black/40" : ""
            } `}
          >
            <motion.div
              className={`absolute top-0 w-full lg:w-[550px] filter:drop-shadow(0px_4px_4px_rgba(0,0,0,0.25)) ${
                selectable ? "pointer-events-auto" : ""
              } ${right ? "right-0" : "left-0"} bg-white`}
              initial={breakpoint === "mobile" ? { y: "-100%" } : { x: "100%" }}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 0.59, ease: "easeOut" }}
              exit={
                breakpoint === "mobile"
                  ? { y: "-100%" }
                  : { x: right ? "100%" : "100%" }
              }
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}
