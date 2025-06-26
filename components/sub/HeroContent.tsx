"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-10 md:px-16 lg:px-20 mt-20 md:mt-32 w-full z-[20]"
    >
      {/* Left: Text Section */}
      <div className="w-full flex flex-col gap-5 justify-center text-center lg:text-left items-center lg:items-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box inline-flex items-center justify-center lg:justify-start py-2 px-3 border border-[#7042f88b] opacity-90"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h1 className="Welcome-text text-sm sm:text-base">
            Web Developer & Designer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px]"
        >
          <span>
            Where{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Creativity{" "}
            </span>
            Meets Functionality
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-4 max-w-[600px]"
        >
          I build responsive and scalable websites using modern tech like React, Next.js, and Node.js, delivering fast, user-friendly, and maintainable web solutions.
        </motion.p>


        {/* Image only for mobile view */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="flex justify-center items-center mt-10 lg:hidden"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={450}
            width={450}
            className="w-[350px] sm:w-[320px] ml-4"
          />
        </motion.div>
      </div>

      {/* Image for large screens (desktop) */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden lg:flex w-full justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={500}
          width={500}
          className="w-[300px] xl:w-[500px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
