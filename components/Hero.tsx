import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
function Hero() {
  return (
    <motion.div
      className="w-full px-6  bg-white justify-center h-screen overflow-hidden"
      initial={{
        height: "200px",
        width: "500px",
        rotateZ: 10,
      }}
      animate={{
        height: "100%",
        width: "100%",
        rotateZ: [10, 5, 0],
      }}
      transition={{
        delay: 2,
        duration: 0.8,
        ease: "linear",
      }}
    >
      <div className="flex justify-between items-center">
        <div>Welcome to out city road</div>
        <div>
          <Image
            src={"/sweatshirt.png"}
            alt="Sweat-Shirt"
            width={5000}
            height={3000}
            className="w-50 h-50 object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
