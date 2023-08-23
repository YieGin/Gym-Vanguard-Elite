import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const HamburgerMenu = ({ openMenu }) => {
  const letters = ["S", "e", "a", "r", "c", "h"];

  return (
    <div
      className={`fixed left-0 w-full bg-white px-[14px] h-[100vh] z-auto transform${
        openMenu ? "" : "hidden -translate-x-full"
      } transition-transform duration-500 ease-in-out`}
    >
      <h1 className="text-[#181818] text-[20px] font-bold mt-10 mb-2">SHOP</h1>
      <div className="form-control mb-10">
        <input type="value" required />
        <label>
          {letters.map((letter, index) => (
            <span
              className="font-bold"
              key={index}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {letter}
            </span>
          ))}
        </label>
      </div>

      <div className="flex flex-col gap-y-10">
        <Link to="/Jackets">
          <p className="border-b-2 py-2 border-zinc-200 text-[#5d5d5d] font-bold">
            Jackets
          </p>
        </Link>
        <Link to="/Stringers">
          <p className="border-b-2 py-2 border-zinc-200 text-[#5d5d5d] font-bold">
            Stringers
          </p>
        </Link>
        <Link to="/Lifting">
          <p className="border-b-2 py-2 border-zinc-200 text-[#5d5d5d] font-bold">
            Lifting
          </p>
        </Link>
        <Link to="/Shorts">
          <p className="border-b-2 py-2 border-zinc-200 text-[#5d5d5d] font-bold">
            Shorts
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
