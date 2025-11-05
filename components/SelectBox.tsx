"use client";
import { AnimatePresence, Reorder, motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useState } from "react";

const Staticitems: {
  id: number;
  title: string;
  checked: boolean;
}[] = [
  {
    id: 1,
    title: "Finish blog post ✍️",
    checked: false,
  },
  {
    id: 2,
    title: "Build new Three.js experiences ✨",
    checked: false,
  },
  {
    id: 3,
    title: "Add new components to Design System 🌈",
    checked: false,
  },
  {
    id: 4,
    title: "Make some coffee ☕️",
    checked: false,
  },
  {
    id: 5,
    title: "Drink water 💧",
    checked: false,
  },
  {
    id: 6,
    title: "Go to the gym 🏃‍♂️",
    checked: false,
  },
];

function SelectBox() {
  const [items, setItems] = useState(Staticitems);
  function toggleCheck(id: number) {
    const item = items.find((item) => item.id === id);
    console.log(item);
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }
  function deleteSingleItem(id: number) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div className="bg-[#0c0f14] w-150 h-150 border border-gray-400/50 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <motion.div
          initial={{
            filter: "blur(10px)",
            opacity: 0,
            scale: 0.2,
          }}
          animate={{
            filter: "blur(0px)",
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 140,
            mass: 0.8,
          }}
          className="text-white tracking-wide font-semibold"
        >
          Select With Mo 🤷‍♂️
        </motion.div>
        <motion.button
          initial={{
            scale: 0.5,
            rotateZ: 15,
            opacity: 0.5,
          }}
          animate={{
            scale: 1,
            rotateZ: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          onClick={() => setItems(Staticitems)}
          className="text-white border border-gray-500/50 px-5 py-2 rounded text-sm cursor-pointer select-none"
        >
          Reset
        </motion.button>
      </div>
      <Reorder.Group
        values={items}
        onReorder={setItems}
        axis="y"
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-8 mt-10"
      >
        {items.map((item) => (
          <Reorder.Item
            key={item.id}
            layout
            style={{
              width: item.checked ? "400px" : "500px",
            }}
            transition={{
              width: {
                duration: 0.3,
                ease: "easeInOut",
              },
              layout: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
            id="myCheckbox"
            value={item}
            className={`flex cursor-grab rounded-xl text-white/50 border border-gray-400/50 relative bg-[#0c0f14] justify-start  items-center gap-8 `}
          >
            <motion.div
              initial={false}
              animate={false}
              className="relative w-[400px] p-3   flex gap-5"
            >
              <motion.input
                whileHover={{
                  boxShadow: "1px 1px 23px blue ",
                }}
                type="checkbox"
                onChange={() => toggleCheck(item.id)}
                className="appearance-none cursor-pointer   checked:before:1s mt-0.5 w-5 h-5 bg-black checked:bg-blue-500  checked:before:content-['✓'] checked:before:text-xs checked:before:text-white checked:before:flex checked:before:items-center checked:before:justify-center  rounded border border-gray-400/50"
              />

              <div className="relative">
                <motion.h4
                  layout="position"
                  className="whitespace-nowrap overflow-hidden text-ellipsis flex-1"
                >
                  {item.title}
                </motion.h4>
              </div>
            </motion.div>
            <AnimatePresence>
              {item.checked && (
                <motion.div
                  onClick={() => deleteSingleItem(item.id)}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className={`absolute -right-10 ${
                    item.checked ? "block" : "hidden"
                  } text-sm text-white`}
                >
                  <X size={18} className="text-gray-600 cursor-pointer" />
                </motion.div>
              )}
            </AnimatePresence>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}

export default SelectBox;
