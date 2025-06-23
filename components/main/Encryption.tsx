"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden">
      {/* Top Text */}
      <div className="absolute top-4 z-[5] px-4">
        <motion.div
          variants={slideInFromTop}
          className="text-[24px] sm:text-[32px] md:text-[40px] font-medium text-center text-gray-200"
        >
          Fast Secure
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Reliable
        </motion.div>
      </div>

      {/* Lock Images + Encryption Text */}
      <div className="flex flex-col items-center justify-center z-[20] mt-20 sm:mt-24 px-4">
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={40}
            height={40}
            className="w-[40px] sm:w-[50px] translate-y-3 transition-all duration-200 group-hover:translate-y-8"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={60}
            height={60}
            className="z-10 w-[60px] sm:w-[70px]"
          />
        </div>

        <div className="Welcome-box px-[12px] py-[3px] z-[20] border my-4 border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[10px] sm:text-[12px]">Encryption</h1>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-4 px-4 z-[20] text-center">
        <div className="text-[14px] sm:text-[18px] md:text-[20px] font-medium text-gray-300">
          Data security you can trust, every step of the way.
        </div>
      </div>

      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
