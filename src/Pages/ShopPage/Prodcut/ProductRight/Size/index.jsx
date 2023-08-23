import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// Data
import Lifting from "../../../../LandingPage/Categories/Lifting/LiftingData";
import Shorts from "../../../../LandingPage/Categories/Shorts/ShortsData";
import Jackets from "../../../../LandingPage/Categories/Jackets/JacketsData";
import Stringers from "../../../../LandingPage/Categories/Stringers/StringersData";

const Size = ({ selectedSize, setSelectedSize }) => {
  const { category, itemId } = useParams();

  const categoryDataMap = {
    lifting: Lifting,
    shorts: Shorts,
    jackets: Jackets,
    stringers: Stringers,
  };

  const data = categoryDataMap[category] || [];

  // Finding the specific item based on the itemId
  const selectedItem = data.find((item) => item.id === parseInt(itemId));
  const { mainSize, Size: sizes } = selectedItem || {};

  // Setting the default size on component mount
  useEffect(() => {
    setSelectedSize(mainSize);
  }, [mainSize]);

  const baseButtonStyle =
    "TabletSm:w-[50px] TabletSm:h-[35px] SmartphonesSm:w-[40px] SmartphonesSm:h-[35px] SmartphonesSm:text-[11px] TabletSm:text-[15px] rounded-xl flex items-center justify-center cursor-pointer";

  return (
    <div className="flex flex-col Smartphones:items-start">
      <p className="text-[#181818] font-bold SmartphonesSm:text-[20px] Smartphones:text-[14px] mt-8">
        Size: {selectedSize}
      </p>

      <div className="flex flex-wrap SmartphonesSm:gap-x-5 TabletSm:gap-x-3 gap-y-4 PC:gap-x-5 SmartphonesSm:mt-1 TabletSm:mt-4">
        {sizes &&
          sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => setSelectedSize(size)}
              className={`${baseButtonStyle} ${
                selectedSize === size
                  ? "bg-[#181818] text-white"
                  : "border-[1px] border-zinc-500 text-[#ABABAB]"
              }`}
            >
              {size}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Size;
