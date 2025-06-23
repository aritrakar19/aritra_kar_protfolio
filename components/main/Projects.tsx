import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
  src="/dog.jpeg"
  title="MERN Stack Web Application"
  description="A full-stack web application built with React, Node.js, Express, and MongoDB, featuring dynamic data and secure backend integration."
  link="https://caninkart-ttos.onrender.com"
/>

<ProjectCard
  src="/child_care.jpeg"
  title="Next.js-Based Child Care Platform"
  description="A responsive child care web app built with Next.js and Node.js, featuring appointment booking, dynamic data, and secure backend."
  link="https://childcare-hospital-fronyend.vercel.app"
/>

<ProjectCard
  src="/fitness.jpeg"
  title="Fitness Tracker Web App"
  description="A React-based fitness app that uses an external API to display exercises, workout plans, and muscle group information."
  link="https://fitness-tracker-eta-nine.vercel.app"
/>

      </div>
    </div>
  );
};

export default Projects;
