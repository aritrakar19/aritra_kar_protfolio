"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 sm:px-10">
      <div className="w-full h-[65px] flex items-center justify-between">
        {/* Logo */}
        {/* <a href="#about-me" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden md:block text-gray-300">
            WebChain Dev
          </span>
        </a> */}

        {/* Desktop Links */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 h-full items-center justify-center">
  <div className="flex items-center justify-between w-[500px] border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200">
    <a href="#about-me" className="cursor-pointer">About me</a>
    <a href="#skills" className="cursor-pointer">Skills</a>
    <a href="#projects" className="cursor-pointer">Projects</a>
  </div>
</div>


        {/* Social Icons */}
        {/* <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div> */}

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          {menuOpen ? (
            <XMarkIcon
              className="w-7 h-7 text-white cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <Bars3Icon
              className="w-7 h-7 text-white cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-[#030014e3] rounded-lg py-4 px-6 space-y-4 text-gray-200 text-center">
          <a href="#about-me" className="block" onClick={() => setMenuOpen(false)}>About me</a>
          <a href="#skills" className="block" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" className="block" onClick={() => setMenuOpen(false)}>Projects</a>
          <div className="flex justify-center gap-5 mt-4">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
