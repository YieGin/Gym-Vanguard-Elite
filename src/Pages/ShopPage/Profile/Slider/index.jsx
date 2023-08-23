import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { GrUserSettings } from "react-icons/gr";
import Section from "./Section";

const Slider = () => {
  const [activeSection, setActiveSection] = useState("User information");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const isSectionActive = (section) => {
    return activeSection === section;
  };

  return (
    <div className="SmartphonesSm:hidden TabletSm:flex flex-col TabletSm:py-[32px] Tablet:py-[72px] pr-5 TabletSm:mr-8 PC:mr-[72px] Tablet:w-[325px] PC:w-[225px] border-r-[1px]">
      <Section
        title="User information"
        icon={<BiUserCircle className="text-[24px]" />}
        isActive={isSectionActive("User information")}
        onClick={() => handleSectionClick("User information")}
      />
      <Section
        title="Settings"
        icon={<GrUserSettings className="text-[24px] ml-1" />}
        isActive={isSectionActive("Settings")}
        onClick={() => handleSectionClick("Settings")}
      />
      <div className="flex mt-auto gap-x-2 cursor-pointer">
        <IoMdLogOut className="text-[24px] text-[#ABABAB]" />
        <p className="text-[16px] text-[#ABABAB]">Log out</p>
      </div>
    </div>
  );
};

export default Slider;
