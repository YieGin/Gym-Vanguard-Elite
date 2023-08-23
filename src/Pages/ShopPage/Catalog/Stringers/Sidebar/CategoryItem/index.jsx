import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = () => {
  return (
    <ul className="mt-2 text-[#ABABAB]">
      <hr className="mb-2" />
      <ul className="pl-8 flex flex-col gap-y-2">
        <Link to="/Jackets">
          <p>Jackets</p>
        </Link>
        <Link to="/Stringers">
          <p className="font-bold text-[#181818]">Stringers</p>
        </Link>
        <Link to="/Lifting">
          <p>Lifting</p>
        </Link>
        <Link to="/Shorts">
          <p>Shorts</p>
        </Link>
      </ul>
      <hr className="mt-2" />
    </ul>
  );
};

export default CategoryItem;
