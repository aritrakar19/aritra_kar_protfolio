'use client'; // ✅ This makes it a client component

import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  console.log(`ProjectCard rendered with link: ${link}`);
  
  const handleClick = () => {
    console.log('11');
    
    if (link) {
      console.log(`Opening link: ${link}`);
      
      window.open(link, "_blank");
    } else {
      alert("No link provided");
    }
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full max-w-md bg-[#0B0B0B]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={250}
        className="w-full h-[250px] object-cover"
      />

      <div className="relative p-4 z-10 cursor-pointer">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        <button
          onClick={handleClick}
          className="cursor-pointer mt-4 px-5 py-2 rounded-md border border-blue-500 text-white hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-blue-500/50"
        >
          View Demo
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
