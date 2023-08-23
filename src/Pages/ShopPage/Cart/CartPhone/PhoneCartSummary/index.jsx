import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../ShoppingCartProvider";

const CostDetail = ({ title, value }) => (
  <div className="flex SmartphonesSm:gap-x-1 Smartphones:gap-x-10">
    <p className="text-[#181818] SmartphonesSm:text-[14px] Smartphones:text-[16px] w-full">
      {title}
    </p>
    <p className="text-[#181818] SmartphonesSm:text-[14px] Smartphones:text-[16px] font-bold">
      {value}
    </p>
  </div>
);

const PhoneCartSummary = () => {
  const [isShow, setIsShow] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const { subtotal, delivery, discount, total } = useShoppingCart();

  // Handler for scroll events to toggle visibility of cart summary
  const handleScroll = () => {
    const position = window.pageYOffset;
    setIsShow(scrollPosition > position);
    setScrollPosition(position);
  };

  // Attach and cleanup scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="sticky right-0 bottom-0 flex items-center justify-center">
      <div
        className={`bg-[#D7D7D7] SmartphonesSm:w-[100%] duration-500 Smartphones:w-[100vw] h-full mt-20 SmartphonesSm:px-2 Smartphones:px-[49px] py-6 sticky bottom-0 right-0 ${
          isShow ? "" : "opacity-0"
        }`}
      >
        <div className="flex gap-x-10">
          <div className="flex flex-col gap-y-2">
            <CostDetail title="Subtotal" value={`$${subtotal.toFixed(2)}`} />
            <CostDetail title="Delivery" value={`$${delivery.toFixed(2)}`} />
            <CostDetail title="Discount" value={`-$${discount.toFixed(2)}`} />
          </div>
          {/* Promo code section */}
          <div className="flex flex-wrap SmartphonesSm:gap-x-2 Smartphones:gap-x-5 gap-y-2">
            <input
              className="border-[1px] outline-none text-[13px] border-zinc-200 rounded-xl w-full h-[40px] px-4"
              placeholder="Promocode"
              type="text"
            />
            <div className="bg-[#181818] SmartphonesSm:text-[12px] rounded-xl w-full SmartphonesSm:p-2 Smartphones:px-4 Smartphones!py-2 text-[#fff] flex items-center justify-center h-[40px]">
              Apply
            </div>
          </div>
        </div>
        {/* Total and checkout button */}
        <div className="flex mt-10 items-center justify-between">
          <h1 className="text-[#181818] font-bold SmartphonesSm:text-[14px] Smartphones:text-[16px]">
            Total
          </h1>
          <h1 className="text-[#181818] SmartphonesSm:text-[24px] Smartphones:text-[32px] font-bold">
            {`$${total.toFixed(2)}`}
          </h1>
          <Link to="/Ordering">
            <button className="button mb-0 Smartphones:w-[176px]">
              <span className="button_lg bg-[#0f1923]">
                <span className="button_sl"></span>
                <div className="flex items-center">
                  <span className="button_text text-[12px] text-center w-full">
                    Checkout
                  </span>
                </div>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneCartSummary;
