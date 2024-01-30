import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStylesDark = isSelected
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  const buttonStyles = isSelected
    ? "text-black border-purple-500"
    : "text-[#717171] border-slate-600 hover:border-[#ADB7BE]";

  return (
    <button
      className={`${buttonStyles} dark:${buttonStylesDark} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;