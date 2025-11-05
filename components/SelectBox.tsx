"use client";
import { AnimatePresence, Reorder, motion } from "framer-motion";
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

  return (
    <div className="bg-[#0c0f14] w-150 h-150 border border-gray-400/50 rounded-xl p-5">
      <div className="text-white tracking-wide font-semibold">
        Select With Mo 🤷‍♂️
      </div>
      <Reorder.Group
        values={items}
        onReorder={setItems}
        axis="y"
        className="flex flex-col gap-8 mt-10"
      >
        {items.map((item) => (
          <Reorder.Item
            key={item.id}
            layout="position"
            animate={{
              width: item.checked ? 400 : 500,
            }}
            transition={{
              layout: {
                duration: 0.7,
                ease: "easeInOut",
              },
              width: {
                duration: 0.7,
                ease: "easeInOut",
              },
            }}
            id="myCheckbox"
            value={item}
            className={`flex cursor-grab relative bg-[#0c0f14] justify-center items-center gap-8 `}
          >
            <div className="border p-3 border-gray-400/50 rounded-xl text-white/50 flex-1 flex gap-5">
              <input
                type="checkbox"
                onChange={() => toggleCheck(item.id)}
                className="appearance-none  checked:before:1s mt-0.5 w-5 h-5 bg-black checked:bg-blue-500  checked:before:content-['✓'] checked:before:text-xs checked:before:text-white checked:before:flex checked:before:items-center checked:before:justify-center  rounded border border-gray-400/50"
              />

              <h4>{item.title}</h4>
            </div>
            <AnimatePresence>
              {item.checked && (
                <motion.div
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.4,
                  }}
                  className={`absolute right-10 ${
                    item.checked ? "block" : "hidden"
                  } text-sm text-white`}
                >
                  X
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
