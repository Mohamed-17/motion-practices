"use client";
import { ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
function BluringComponent() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              filter: "blur(10px)",
            }}
            className="w-70  min-h-112 h-112 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
          >
            <div className="p-3 ">
              <h1 className="font-bold text-[15px]">Blur component </h1>
              <p className="text-xs text-gray-400">
                Practice my motion skills for blur component
              </p>
              <div className="flex justify-center items-center gap-5">
                <Image
                  src={"/sweatshirt.png"}
                  alt="sweatshirt"
                  width={50}
                  height={50}
                />

                <h4 className="flex justify-between items-center gap-3">
                  <span>My Own Sweat-Shirt</span>
                  <span onClick={() => setIsOpen(false)}>
                    <X size={15} className="gray-600 cursor-pointer" />
                  </span>
                </h4>
              </div>
            </div>
            <div className="flex-1 border h-full border-dashed border-gray-500  mt-5 relative">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-white h-full w-full divide-y p-2 divide-gray-500 "
              >
                <div className="flex items-center gap-3 p-5">
                  <ShoppingBag size={25} />
                  <div className="flex flex-col gap-1 text-sm">
                    <p className="font-bold">Shop with us</p>
                    <p>Now you can free shopping with us with no fee</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-5">
                  <ShoppingBag size={25} />
                  <div className="flex flex-col gap-1 text-sm">
                    <p className="font-bold">Shop with us</p>
                    <p>Now you can free shopping with us with no fee</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-5">
                  <ShoppingBag size={25} />
                  <div className="flex flex-col gap-1 text-sm">
                    <p className="font-bold">Shop with us</p>
                    <p>Now you can free shopping with us with no fee</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default BluringComponent;
