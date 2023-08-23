import React, { useEffect, useState } from "react";
import ShortsItems from "./ShortsItems";
import ShortsData from "./ShortsData";
import { Link } from "react-router-dom";

const Shorts = () => {
  const [showIdsfourth, setShowIdsFourth] = useState(5);
  const fourthFiveIds = ShortsData.slice(0, showIdsfourth);

  // Handle window resize effect
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1510 && windowWidth > 900) {
        setShowIdsFourth(4);
      } else if (windowWidth <= 900) {
        setShowIdsFourth(3);
      } else {
        setShowIdsFourth(5);
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
        {fourthFiveIds.length > 0 && (
          <div className="flex flex-col">
            <h1 className="text-[#ABABAB] text-center TabletSm:text-[24px] Tablet:text-[32px] PC:text-[36px] font-Roboto font-semibold py-10">
              Shorts
            </h1>
            <div className="flex gap-x-[32px] justify-center flex-wrap">
              <ShortsItems fourthFiveIds={fourthFiveIds} />
            </div>
          </div>
        )}
      </div>
      <Link to="/Shorts">
        <p className="mt-4 text-[14px] text-[#A9A9A9] font-Roboto underline text-center cursor-pointer">
          See all products
        </p>
      </Link>
    </>
  );
};

export default Shorts;
