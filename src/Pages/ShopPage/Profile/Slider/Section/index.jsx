import React from "react";

const Section = ({ title, icon, isActive, onClick }) => (
  <div
    className={`flex gap-x-2 mt-4 text-[16px] ${
      isActive ? "text-[#181818]" : "text-[#ABABAB]"
    } cursor-pointer`}
    onClick={onClick}
  >
    {icon}
    <p>{title}</p>
  </div>
);

export default Section;
