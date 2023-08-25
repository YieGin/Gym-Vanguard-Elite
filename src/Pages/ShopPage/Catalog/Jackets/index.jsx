import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ProductGrid from "./ProductGrid";

const Jackets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedColor, setSelectedColor] = useState(null);
  const [rangeValue, setRangeValue] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  const containerRef = useRef(null);

  // On initial render and on window resize, update the height class
  useEffect(() => {
    const updateHeightClass = () => {
      if (window.innerHeight >= 1240) {
        containerRef.current.style.height = "100vh";
      } else {
        containerRef.current.style.height = "100%";
      }
    };

    // Initial call
    updateHeightClass();

    // Attach event listener
    window.addEventListener("resize", updateHeightClass);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", updateHeightClass);
    };
  }, []);

  return (
    <div ref={containerRef} className="pb-[72px] h-full">
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

export default Jackets;
