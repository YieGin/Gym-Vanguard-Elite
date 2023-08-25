import { useState, useEffect, useRef } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSlider } from "react-icons/bi";
import ProductCategories from "./ProductCategories";
import FilterMenu from "./FilterMenu";
import StringersData from "../../../../LandingPage/Categories/Stringers/StringersData";

const ProductGrid = ({
  selectedColor,
  setSelectedColor,
  rangeValue,
  setRangeValue,
  selectedSize,
  setSelectedSize,
}) => {
  // State variables for product list, menu and filter visibility
  const [productList, setProductList] = useState(StringersData);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const [scope, animate] = useAnimate();
  const ulRef = useRef(null); // ref for ul element

  // Function to sort products by a given comparator
  const sortProducts = (comparator) => {
    setProductList([...StringersData.sort(comparator)]);
  };

  // Sorting functions
  const sortByAscendingPrice = () => sortProducts((a, b) => a.price - b.price);
  const sortByDescendingPrice = () => sortProducts((a, b) => b.price - a.price);
  const sortAlphabetically = () =>
    sortProducts((a, b) => a.Product.localeCompare(b.Product));
  const sortByNewestArrivals = () =>
    sortProducts((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const sortByBestSellers = () => sortProducts((a, b) => b.sales - a.sales);

  // Function to toggle filter visibility
  const toggleShow = () => setShow((s) => !s);
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  useEffect(() => {
    // Configuration for animations
    const config = isOpen
      ? { opacity: 1, scale: 1, filter: "blur(0px)" }
      : { opacity: 0, scale: 0.3, filter: "blur(20px)" };

    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });
    animate(
      ulRef.current,
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );
    animate("li", config, {
      duration: 0.2,
      delay: isOpen ? staggerMenuItems : 0,
    });
  }, [isOpen, animate]);

  // Function to generate class names for buttons
  const getButtonClass = (base, device, additional) =>
    `${base} ${device}:${additional}`;

  return (
    <div
      ref={scope}
      className={getButtonClass(
        "Tablet:w-[100%] flex flex-col h-[100%] TabletSm:px-[50px] TabletSm:mr-0 mt-8",
        "Tablet",
        "mr-[20px] PC:mr-[208px] mb-[72px]"
      )}
    >
      <div
        className={getButtonClass(
          "flex w-[100%]",
          "SmartphonesSm",
          "px-5 Smartphones:px-10"
        )}
      >
        <motion.button
          className={getButtonClass(
            "flex SmartphonesSm:w-[143px] Smartphones:w-[176px] justify-between items-center h-10 rounded-xl border-[1px] text-left px-3 text-[#181818] text-sm",
            "",
            ""
          )}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          Featured
          <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
            <MdKeyboardArrowDown size={20} />
          </div>
        </motion.button>

        <button
          onClick={toggleShow}
          className={getButtonClass(
            "ml-auto SmartphonesSm:mr-0 TabletSm:mr-10 w-[105px] h-10 p-4 gap-x-4 SmartphonesSm:flex Tablet:hidden items-center justify-center border-[1px] rounded-[12px]",
            "",
            ""
          )}
        >
          <BiSlider color="#ABABAB" size={20} />
          <p className="text-[14px] font-bold text-[#ABABAB]">Filter</p>
        </button>
      </div>

      <nav className="w-[176px] h-0">
        <div
          ref={ulRef}
          style={{
            pointerEvents: isOpen ? "auto" : "none",
            clipPath: "inset(10% 50% 90% 50% round 10px)",
          }}
          className={getButtonClass(
            "border-[1px] mt-3 rounded-xl relative z-20 bg-white",
            "SmartphonesSm",
            "left-5 Smartphones:left-10"
          )}
        >
          <ul className="px-3 py-5 flex flex-col gap-y-4">
            <li className="cursor-pointer" onClick={sortByAscendingPrice}>
              Price: Low to High
            </li>
            <li className="cursor-pointer" onClick={sortByDescendingPrice}>
              Price: High to Low
            </li>
            <li className="cursor-pointer" onClick={sortByNewestArrivals}>
              Newest Arrivals
            </li>
            <li className="cursor-pointer" onClick={sortByBestSellers}>
              Best Sellers
            </li>
            <li className="cursor-pointer" onClick={sortAlphabetically}>
              Alphabetical
            </li>
          </ul>
        </div>
      </nav>

      <ProductCategories
        rangeValue={rangeValue}
        productList={productList}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        category="vibrators"
      />

      <FilterMenu
        setSelectedColor={setSelectedColor}
        selectedColor={selectedColor}
        productList={productList}
        show={show}
        closeModal={toggleShow}
        setRangeValue={setRangeValue}
        rangeValue={rangeValue}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    </div>
  );
};

export default ProductGrid;
