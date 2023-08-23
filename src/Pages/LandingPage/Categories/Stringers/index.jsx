import React, { useEffect, useState } from "react";
import StringersItems from "./StringersItems";
import StringersData from "./StringersData";
import { Link } from "react-router-dom";

const Stringers = () => {
  const [showIdssecond, setShowIdsSecond] = useState(5);
  const secondFiveIds = StringersData.slice(0, showIdssecond);

  // Handle window resize effect
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1510 && windowWidth > 900) {
        setShowIdsSecond(4);
      } else if (windowWidth <= 900) {
        setShowIdsSecond(3);
      } else {
        setShowIdsSecond(5);
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
        {secondFiveIds.length > 0 && (
          <div className="flex flex-col">
            <h1 className="text-[#ABABAB] text-center TabletSm:text-[24px] Tablet:text-[32px] PC:text-[36px] font-Roboto font-semibold py-10">
              Stringers
            </h1>
            <div className="flex gap-x-[32px] justify-center flex-wrap">
              <StringersItems secondFiveIds={secondFiveIds} />
            </div>
          </div>
        )}
      </div>
      <Link to="/Stringers">
        <p className="mt-4 text-[14px] text-[#A9A9A9] font-Roboto underline text-center cursor-pointer">
          See all products
        </p>
      </Link>
    </>
  );
};

export default Stringers;
