import {motion} from "framer-motion";
import {AnimatePresence} from "framer-motion";
import Link from "next/link";
import * as React from "react";

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96]}
  },

  hidden: {
    y: 200,
    opacity: 0.5,
    scale: 0.5,
    transition: {duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96]}
  },

  exit: {
    opacity: 0,
    scale: 0.7,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};
export const Modal = ({onDismiss, children}) => (
  <div className="fixed z-10 top-0 w-full h-full flex justify-center overflow-scroll rounded-lg shadow-2xl" onClick={onDismiss}>
    <motion.div
      className="max-w-3xl z-10 w-full h-full rounded-lg shadow-2xl mt-12 overflow-scroll bg-white p-8"
      style={{height: 650}}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {
        children
      }
    </motion.div>
  </div>
);
