"use client";

import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Youtube</span>    
                    </p> */}
            <a
              href="https://github.com/aritrakar19?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center z-0 my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aritra-kar-56027127a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center z-0 my-[15px] cursor-pointer"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>

            <a
              href="tel:6289168326"
              className="flex flex-row items-center z-0 my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">6289168326</span>
            </a>
            <a
              href="mailto:aritrakar19@gmail.com"
              className="flex flex-row items-center z-0 my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">
                aritrakar19@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
