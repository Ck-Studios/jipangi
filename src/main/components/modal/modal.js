import {motion} from "framer-motion";
import Link from "next/link";
import * as React from "react";

export const Overlay = ({ isSelected, children }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? "auto" : "none" }}
    className="overlay"
  >
    {
      children
    }
  </motion.div>
);
