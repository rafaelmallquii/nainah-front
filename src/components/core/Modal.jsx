"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { AnimatePresence, motion } from "framer-motion";

import { IoMdClose } from "react-icons/io";

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
  selectable,
}) {
  return (
    <Portal>
      <AnimatePresence>
        {isOpenModal && (
          <motion.div
            className={`h-full w-full  fixed left-0 top-[40px] z-[200] grid place-content-center place-items-center ${
              selectable ? "pointer-events-none" : ""
            } ${blur ? "backdrop-blur-[6px]" : ""} ${
              bgDark ? "bg-black/40" : ""
            }  `}
          >
            <motion.div
              className={`absolute top-0 h-full [filter:drop-shadow(0px_4px_4px_rgba(0,0,0,0.25))]  ${
                selectable ? "pointer-events-auto" : ""
              } ${right ? "right-0" : "left-0"} pt-14 pb-2 bg-base-100`}
              initial={right ? { x: "100%" } : { x: "-100%" }}
              animate={right ? { x: 0 } : { x: 0 }}
              transition={{ duration: 0.59, ease: "easeOut" }}
              exit={right ? { x: "100%" } : { x: "-100%" }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}