import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

// Define constant colors, sizes, and categories
const colors = ["Black", "Red", "Green", "Blue"];
const sizes = [5, 10, 15, 20, 25];

const FilterMenu = ({
  closeModal,
  show,
  setSelectedColor,
  selectedColor,
  setRangeValue,
  rangeValue,
  selectedSize,
  setSelectedSize,
}) => {
  // Local states for color, size and category selections and range value
  const [tempColor, setTempColor] = useState(selectedColor);
  const [tempSize, setTempSize] = useState(selectedSize); // Added for size

  // Handlers for color, size and category selection, applying color selection and range change
  const handleColorSelection = (color) =>
    setTempColor((prevColor) => (prevColor === color ? null : color));

  const handleSizeSelection = (
    mainSize // New
  ) => setTempSize((prevSize) => (prevSize === mainSize ? null : mainSize));

  const handleApplyColorAndSizeSelection = () => {
    // Modified to apply both color and size
    setSelectedColor(tempColor);
    setSelectedSize(tempSize); // New
  };

  const handleApplyAndClose = () => {
    handleApplyColorAndSizeSelection();
    closeModal();
  };

  // Compute background gradient based on range value
  const getBackgroundGradient = () => {
    const percentage = (rangeValue / 440) * 100;
    return `linear-gradient(to right, black 0%, black ${percentage}%, #ABABAB ${percentage}%, #ABABAB 100%)`;
  };

  // Lock scrolling when the menu is shown
  useEffect(() => {
    document.body.classList.toggle("no-scroll", show);
  }, [show]);

  const renderSizes = sizes.map((mainSize) => (
    <label
      key={mainSize}
      className={`container flex items-center gap-x-2 pl-8 ${
        tempSize === mainSize ? "text-[#181818]" : "text-[#ABABAB]"
      }`}
    >
      <input
        type="checkbox"
        id={mainSize}
        checked={tempSize === mainSize}
        onChange={() => handleSizeSelection(mainSize)}
      />
      <div className="checkmark"></div>
      <p className="text-base">{mainSize}</p>
    </label>
  ));

  const renderColors = colors.map((color) => (
    <label
      key={color}
      className={`container flex items-center gap-x-2 pl-8 ${
        tempColor === color ? "text-[#181818]" : "text-[#ABABAB]"
      }`}
    >
      <input
        type="checkbox"
        id={color}
        checked={tempColor === color}
        onChange={() => handleColorSelection(color)}
      />
      <div className="checkmark"></div>
      <p className="text-base">{color}</p>
    </label>
  ));

  // Class names for the main container
  const containerClassNames = `fixed top-0 z-50 right-0 SmartphonesSm:w-[70%] Smartphones:w-[260px] TabletSm:w-[260px] py-8 SmartphonesSm:pl-4 Smartphones:pl-5 bg-white flex flex-col h-[100vh] transform overflow-y-scroll scroll whitespace-nowrap scroll-smooth ${
    show ? "" : "translate-x-full"
  } transition-transform duration-500 ease-in-out`;

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    setRangeValue(value);
  };

  return (
    <>
      <div className={`overlay ${show ? "flex" : "hidden"}`} />
      <div className={containerClassNames}>
        <button
          className="absolute right-2 top-4 bg-white rounded-full"
          onClick={closeModal}
        >
          <AiOutlineClose size={25} />
        </button>
        <div className="mt-4 overflow-y-scroll scroll whitespace-nowrap scroll-smooth">
          <h1 className="text-[#181818] text-20 font-bold">Categories</h1>
          <ul className="flex flex-col gap-y-2 pl-8 mt-4 text-[#ABABAB]">
            <Link to="/Dildos">
              <p className="text-base cursor-pointer">Dildos</p>
            </Link>
            <Link to="/Vibrators">
              <p className="text-base cursor-pointer font-bold text-[#181818]">
                Vibrators
              </p>
            </Link>
            <Link to="/AnalToys">
              <p className="text-base cursor-pointer">Anal toys</p>
            </Link>
            <Link to="/BDSM">
              <p className="text-base cursor-pointer">BDSM</p>
            </Link>
          </ul>
          <div className="flex flex-col gap-y-2 mt-4">
            <hr />
            <h1 className="text-[#181818] text-20 font-bold">Color</h1>
            {renderColors}
            <h1 className="text-[#181818] text-20 font-bold mt-8">Size</h1>
            {renderSizes}
          </div>
          <hr className="mt-2" />
          <h1 className="text-[#181818] font-bold text-xl mt-8">Price</h1>
          <div className="mr-5">
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
        <button onClick={handleApplyAndClose} className="button w-full mt-8">
          <span className="button_lg bg-[#0f1923]">
            <span className="button_sl"></span>
            <div className="flex items-center">
              <span className="button_text text-center w-full">Apply</span>
            </div>
          </span>
        </button>
      </div>
    </>
  );
};

export default FilterMenu;
