"use client";
import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#d2d2d2] dark:bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500  ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#343434] dark:border-[#ADB7BE] hover:border-[#888888] dark:hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-black dark:text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#888888] dark:group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#3b3c3c] dark:border-[#ADB7BE] hover:border-[#888888] dark:hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-black dark:text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-[#888888] dark:group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-black  border-black border-1.5 dark:text-white rounded-b-xl mt-3   bg-[#ffeec8] dark:bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-black dark:text-[#ADB7BE]">
          {readMore ? description : `${description.substring(0, 50)}...`}{" "}
          <button
            className="text-[#6e6e6e] dark:text-white"
            onClick={() => setReadMore(!readMore)}
          >
            {" "}
            {readMore ? "Show less" : "Read more"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
