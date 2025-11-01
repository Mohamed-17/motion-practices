import React from "react";
import * as motion from "motion/react-client";
function Button() {
  return (
    <motion.div className="relative group perspective-[1000px] transform-3d  translate-z-[100px]">
      <motion.button className="text-white block bg-black rounded px-12 py-4">
        Subscribe
      </motion.button>
      <span className="absolute inset-x-0 bottom-0 w-2/3 blur-2xl mx-auto bg-linear-to-b from-sky-500 to-indigo-500 h-2"></span>
    </motion.div>
  );
}

export default Button;
