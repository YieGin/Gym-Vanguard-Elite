import React from "react";
import { ColorItem } from "./ColorItem";
import { SizeItem } from "./SizeItem";
import CategoryItem from "./CategoryItem";

const Sidebar = ({
  setSelectedColor,
  selectedColor,
  rangeValue,
  setRangeValue,
  selectedSize,
  setSelectedSize,
}) => {
  const sizes = [5, 10, 15, 20, 25];
  const colors = ["Black", "Red", "Green", "Blue"];

  // Toggle color selection
  const handleColorSelection = (color) => {
    setSelectedColor((prevColor) => (prevColor === color ? null : color));
  };

  // Toggle size selection
  const handleSizeSelection = (mainSize) => {
    setSelectedSize((prevSize) => (prevSize === mainSize ? null : mainSize));
  };

  // Update the range value
  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    setRangeValue(value);
  };

  // Generate the background gradient for the range input
  const getBackgroundGradient = () => {
    const percentage = (rangeValue / 440) * 100;
    return `linear-gradient(to right, black 0%, black ${percentage}%, #ABABAB ${percentage}%, #ABABAB 100%)`;
  };

  return (
    <div className="Tablet:w-[25%] PC:w-[15%] bg-white Tablet:ml-[208px] PC:ml-[352px] Tablet:mr-[84px] SmartphonesSm:hidden Tablet:flex flex-col mt-16">
      <div className="sticky bg-white left-0 top-16">
        <h1 className="text-[#181818] text-20 font-bold">Categories</h1>
        <CategoryItem />

        <h1 className="text-[#181818] text-20 font-bold mt-8">Size</h1>
        <div className="flex flex-col gap-y-2 mt-2">
          <hr />
          {sizes.map((mainSize) => (
            <SizeItem
              key={mainSize}
              mainSize={mainSize}
              selectedSize={selectedSize}
              onSelect={handleSizeSelection}
            />
          ))}
        </div>

        <h1 className="text-[#181818] text-20 font-bold mt-8">Color</h1>
        <div className="flex flex-col gap-y-2 mt-2">
          <hr />
          {colors.map((color) => (
            <ColorItem
              key={color}
              color={color}
              selectedColor={selectedColor}
              onSelect={handleColorSelection}
            />
          ))}
        </div>
        <hr className="mt-2" />

        <h1 className="text-[#181818] font-bold text-xl mt-8">Price</h1>
        <input
          className="mt-5 custom-range"
          type="range"
          min={0}
          max={440}
          step={10}
          value={rangeValue}
          onChange={handleChange}
          style={{ background: getBackgroundGradient() }}
        />
        <p className="text-[#181818] text-base font-medium mt-3">
          Price: ${Math.max(0, rangeValue).toFixed(2)} - $440.00
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
