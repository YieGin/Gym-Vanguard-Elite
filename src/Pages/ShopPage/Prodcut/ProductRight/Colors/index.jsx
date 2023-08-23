import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// Data
import Lifting from "../../../../LandingPage/Categories/Lifting/LiftingData";
import Shorts from "../../../../LandingPage/Categories/Shorts/ShortsData";
import Jackets from "../../../../LandingPage/Categories/Jackets/JacketsData";
import Stringers from "../../../../LandingPage/Categories/Stringers/StringersData";

const Colors = ({ selectedColor, setSelectedColor }) => {
  const { category, itemId } = useParams();

  const categoryDataMap = {
    lifting: Lifting,
    shorts: Shorts,
    jackets: Jackets,
    stringers: Stringers,
  };

  const data = categoryDataMap[category] || [];
  const selectedItem = data.find((item) => item.id === parseInt(itemId));

  useEffect(() => {
    if (selectedItem) {
      setSelectedColor(selectedItem.color);
    }
  }, [selectedItem, setSelectedColor]);

  const renderColorOptions = () => {
    return selectedItem.colors.split(", ").map((color, index) => (
      <div
        key={index}
        className="border-[1px] rounded-full h-[37px] w-9 flex items-center justify-center cursor-pointer"
        style={{
          borderColor: selectedColor === color ? "#181818" : "transparent",
        }}
      >
        <div
          onClick={() => setSelectedColor(color)}
          className="rounded-full w-6 h-6"
          style={{
            backgroundColor: color.toLowerCase(),
            transform: selectedColor === color ? "scale(1.1)" : "none",
          }}
        ></div>
      </div>
    ));
  };
  return (
    <>
      <p className="text-[#181818] font-bold SmartphonesSm:text-[20px] Smartphones:text-[14px] SmartphonesSm:mt-8 TabletSm:mt-[32px] Tablet:mt-[48px] PC:mt-[72px] SmartphonesSm:mb-1 TabletSm:mb-5">
        Color: {selectedColor}
      </p>
      <div className="flex flex-wrap SmartphonesSm:gap-x-3 Smartphones:gap-x-4 TabletSm:gap-x-5 Tablet:gap-x-6">
        {renderColorOptions()}
      </div>
    </>
  );
};

export default Colors;
