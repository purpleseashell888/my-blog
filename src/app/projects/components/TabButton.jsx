import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClassesDark = active ? "text-white" : "text-[#ADB7BE]";
  const buttonClasses = active ? "text-black" : "text-[#848181]";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-10 text-2xl font-semibold ${buttonClasses} dark:${buttonClassesDark} hover:text-black dark:hover:text-white `}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
