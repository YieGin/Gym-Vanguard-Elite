import React, { useEffect, useState } from "react";
import JacketsData from "../Jackets/JacketsData";
import JacketsItems from "./JacketsItems";
import { Link } from "react-router-dom";

const Jackets = () => {
  const [showIdsfirst, setShowIdsFirst] = useState(5);
  const firstFiveIds = JacketsData.slice(0, showIdsfirst);

  // Handle window resize effect
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1510 && windowWidth > 900) {
        setShowIdsFirst(4);
      } else if (windowWidth <= 900) {
        setShowIdsFirst(3);
      } else {
        setShowIdsFirst(5);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex gap-x-[32px] justify-center flex-wrap">
        {firstFiveIds.length > 0 && (
          <div className="flex flex-col">
            <h1 className="text-[#ABABAB] text-center TabletSm:text-[24px] Tablet:text-[32px] PC:text-[36px] font-Roboto font-semibold py-10">
              Jackets
            </h1>
            <div className="flex gap-x-[32px] justify-center flex-wrap">
              <JacketsItems firstFiveIds={firstFiveIds} />
            </div>
          </div>
        )}
      </div>
      <Link to="/Jackets">
        <p className="mt-4 text-[14px] text-[#A9A9A9] font-Roboto underline text-center cursor-pointer">
          See all products
        </p>
      </Link>
    </>
  );
};

export default Jackets;
