import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const NavigationBar = () => {
  return (
    <ul className="bg-[#fff] SmartphonesSm:h-[44px] TabletSm:h-[50px] SmartphonesSm:hidden TabletSm:flex items-center justify-center gap-x-16 font-Roboto font-bold text-[#181818] border-b-[1px] border-b-zinc-100">
      <Link to="/Jackets">
        <p className="text-[#181818] text text-[16px]">Jackets</p>
      </Link>
      <Link to="/Stringers">
        <p className="text-[#181818] text text-[16px]">Stringers</p>
      </Link>
      <Link to="/Lifting">
        <p className="text-[#181818] text text-[16px]">Lifting</p>
      </Link>
      <Link to="/Shorts">
        <p className="text-[#181818] text text-[16px]">Shorts</p>
      </Link>
    </ul>
  );
};

export default NavigationBar;
