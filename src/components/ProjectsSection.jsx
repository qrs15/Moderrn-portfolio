import React from "react";

const projects = [
  {
    id: 1,
    Title: "E-commerce Website",
    Description: "A modern E-commerce website app using react and tailwind.",
    image: "/projects/project1.png",
    tags: ["Reat", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    Title: "E-commerce Website",
    Description: "A modern E-commerce website app using react and tailwind.",
    image: "/projects/project2.png",
    tags: ["Reat", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    Title: "E-commerce Website",
    Description: "A modern E-commerce website app using react and tailwind.",
    image: "/projects/project3.png",
    tags: ["Reat", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-2 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2>
          Featured
          <span> Projects</span>
        </h2>
      </div>
    </section>
  );
};

export default ProjectsSection;
