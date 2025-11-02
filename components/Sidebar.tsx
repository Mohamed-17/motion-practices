"use client";
import {
  ChartColumnDecreasing,
  ChevronLeft,
  ChevronRight,
  House,
  Settings,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
const data: {
  name: string;
  icon: React.ReactNode;
}[] = [
  {
    name: "Home",
    icon: <House />,
  },
  {
    name: "Analytics",
    icon: <ChartColumnDecreasing />,
  },
  {
    name: "Users",
    icon: <Users />,
  },
  {
    name: "Settings",
    icon: <Settings />,
  },
];
const itemsVariants = {
  init: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1,
    },
  },
};
const itemVariant = {
  init: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};
function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <motion.div
      className=" h-screen relative bg-white p-5"
      initial={{
        width: "300px",
        x: -500,
      }}
      animate={{
        width: isOpen ? "300px" : "70px",
        x: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="flex justify-between items-center">
        <AnimatePresence>
          {isOpen && (
            <motion.h1
              initial={false}
              exit={{
                scale: 0.5,
                opacity: 0,
                y: -100,
              }}
              className="font-bold text-2xl"
            >
              Dashboard
            </motion.h1>
          )}
        </AnimatePresence>
        <span
          className={`cursor-pointer absolute ${
            isOpen ? " absolute top-5 right-3" : "mt-4 "
          }`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <ChevronLeft size={25} className="font-light text-gray-700 mt-1" />
          ) : (
            <ChevronRight size={25} className="font-light text-gray-700 mt-1" />
          )}
        </span>
      </div>
      <motion.div
        variants={itemsVariants}
        initial="init"
        animate="show"
        className="mt-10 flex flex-col gap-10"
      >
        {data.map((item, index) => (
          <motion.div
            variants={itemVariant}
            className="flex gap-5 items-center text-gray-700"
            key={index}
          >
            <span>{item.icon}</span>
            <AnimatePresence>
              {isOpen && (
                <motion.h4
                  initial={false}
                  exit={{
                    y: 50,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  {item.name}
                </motion.h4>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Sidebar;
