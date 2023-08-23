import React, { useEffect, useState } from "react";
import LiftingItems from "./LiftingItems";
import LiftingData from "./LiftingData";
import { Link } from "react-router-dom";

const Lifting = () => {
  const [showIdsthird, setShowIdsthird] = useState(5);
  const thirdFiveIds = LiftingData.slice(0, showIdsthird);

  // Handle window resize effect
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1510 && windowWidth > 900) {
        setShowIdsthird(4);
      } else if (windowWidth <= 900) {
        setShowIdsthird(3);
      } else {
        setShowIdsthird(5);
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
        {thirdFiveIds.length > 0 && (
          <div className="flex flex-col">
            <h1 className="text-[#ABABAB] text-center TabletSm:text-[24px] Tablet:text-[32px] PC:text-[36px] font-Roboto font-semibold py-10">
              Lifting
            </h1>
            <div className="flex gap-x-[32px] justify-center flex-wrap">
              <LiftingItems thirdFiveIds={thirdFiveIds} />
            </div>
          </div>
        )}
      </div>
      <Link to="/Lifting">
        <p className="mt-4 text-[14px] text-[#A9A9A9] font-Roboto underline text-center cursor-pointer">
          See all products
        </p>
      </Link>
    </>
  );
};

export default Lifting;
