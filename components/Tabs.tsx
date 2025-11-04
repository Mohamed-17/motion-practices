"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
function Tabs() {
  const [focused, setFocused] = useState("");
  const [underlineClicked, setUnderlineClicked] = useState("Tab 1");
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  return (
    <div className="flex items-center justify-center">
      <div
        onMouseLeave={() => setFocused("")}
        className="flex items-center bg-[#1A1D23] border border-[#2B303B] justify-center gap-15 py-2 px-4 rounded-xl w-fit"
      >
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setUnderlineClicked(tab)}
            onMouseEnter={() => setFocused(tab)}
            onFocus={() => setFocused(tab)}
            className="relative cursor-pointer w-15 h-10 text-white flex justify-center items-center"
          >
            <span className="z-10 text-[#E8E8FD] absolute  top-1.5 bottom-0 text-[1rem]">
              {tab}
            </span>
            {tab === focused && (
              <motion.div
                layoutId="cover"
                transition={{
                  layout: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }}
                className="absolute w-[140%] h-[110%] rounded-xl    bg-[#23272F] z-0 "
              ></motion.div>
            )}
            {tab === underlineClicked && (
              <motion.div
                className="absolute -bottom-2 w-full h-1 bg-blue-600 rounded-xl"
                layoutId="underline"
              ></motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
