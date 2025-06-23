"use client"
import React from "react";
import SkillDataProvider from "./SkillDataProvider";
import skills from "../main/Skills";
import SkillText from "./SkillText";

const SkillsSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 px-4">
      <SkillText />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
        {Array.isArray(skills) && skills.map((skill, index) => (
  <SkillDataProvider
    key={index}
    src={skill.src}
    width={skill.width}
    height={skill.height}
    index={index}
  />
))}
      </div>
    </section>
  );
};

export default SkillsSection;
