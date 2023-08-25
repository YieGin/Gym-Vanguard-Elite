import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = () => {
  return (
    <ul className="mt-2 text-[#ABABAB]">
      <hr className="mb-2" />
      <ul className="pl-8 flex flex-col gap-y-2">
        <Link to="/Dildos">
          <p>Dildos</p>
        </Link>
        <Link to="/Vibrators">
          <p>Vibrators</p>
        </Link>
        <Link to="/AnalToys">
          <p>Anal Toys</p>
        </Link>
        <Link to="/BDSM">
          <p className="font-bold text-[#181818]">BDSM</p>
        </Link>
      </ul>
      <hr className="mt-2" />
    </ul>
  );
};

export default CategoryItem;
