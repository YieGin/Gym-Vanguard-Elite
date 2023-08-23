import React, { useEffect, useState } from "react";
import "./style.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ProductGrid from "./ProductGrid";

const Lifting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedColor, setSelectedColor] = useState(null);
  const [rangeValue, setRangeValue] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="pb-[72px]">
      <Header />
      <div className="flex w-full justify-center font-Roboto">
        <Sidebar
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <ProductGrid
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      </div>
    </div>
  );
};

export default Lifting;
