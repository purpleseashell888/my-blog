"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React job finding website",
    description:
      "After login or register on the landing page, there are many pages, in the status page, three cards are shown: Pending Applications, Interview Scheduled, Jobs Declined. Below it is a chart, displaying monthly applications.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/purpleseashell888/redux-jobster",
    previewUrl: "https://redux-jobster.netlify.app/",
  },
  {
    id: 2,
    title: "Online shopping website",
    description:
      "In the product page, consumer can pick the amount of item they want and have a limited amount, and can choose different colors.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/purpleseashell888/store",
    previewUrl: "https://shopping-store-comfysloth.netlify.app/",
  },
  {
    id: 3,
    title: "Drinks finding website",
    description: "Utilized the Cocktail DB API as the source of drinks data.",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/purpleseashell888/MixMaster",
    previewUrl: "https://mixmaster.netlify.app/",
  },
  {
    id: 4,
    title: "React job finding website",
    description:
      "After login or register on the landing page, there are many pages, in the status page, three cards are shown: Pending Applications, Interview Scheduled, Jobs Declined. Below it is a chart, displaying monthly applications.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/purpleseashell888/redux-jobster",
    previewUrl: "https://redux-jobster.netlify.app/",
  },
  {
    id: 5,
    title: "Online shopping website",
    description:
      "In the product page, consumer can pick the amount of item they want and have a limited amount, and can choose different colors.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/purpleseashell888/store",
    previewUrl: "https://shopping-store-comfysloth.netlify.app/",
  },
  {
    id: 6,
    title: "Drinks finding website",
    description: "Utilized the Cocktail DB API as the source of drinks data.",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/purpleseashell888/MixMaster",
    previewUrl: "https://mixmaster.netlify.app/",
  },
  {
    id: 7,
    title: "React job finding website",
    description:
      "After login or register on the landing page, there are many pages, in the status page, three cards are shown: Pending Applications, Interview Scheduled, Jobs Declined. Below it is a chart, displaying monthly applications.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/purpleseashell888/redux-jobster",
    previewUrl: "https://redux-jobster.netlify.app/",
  },
  {
    id: 8,
    title: "Online shopping website",
    description:
      "In the product page, consumer can pick the amount of item they want and have a limited amount, and can choose different colors.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/purpleseashell888/store",
    previewUrl: "https://shopping-store-comfysloth.netlify.app/",
  },
  {
    id: 9,
    title: "Drinks finding website",
    description: "Utilized the Cocktail DB API as the source of drinks data.",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/purpleseashell888/MixMaster",
    previewUrl: "https://mixmaster.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-black dark:text-white mt-8 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-black  dark:text-white flex flex-row justify-center items-center gap-4 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid mt-5 md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
