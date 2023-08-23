import React from "react";
import { useParams } from "react-router-dom";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

// Data
import Lifting from "../../../../LandingPage/Categories/Lifting/LiftingData";
import Shorts from "../../../../LandingPage/Categories/Shorts/ShortsData";
import Jackets from "../../../../LandingPage/Categories/Jackets/JacketsData";
import Stringers from "../../../../LandingPage/Categories/Stringers/StringersData";

const Reducer = ({ quantity, setQuantity }) => {
  const { category, itemId } = useParams();

  const categoryDataMap = {
    lifting: Lifting,
    shorts: Shorts,
    jackets: Jackets,
    stringers: Stringers,
  };

  const data = categoryDataMap[category] || [];
  const selectedItem = data.find((item) => item.id === parseInt(itemId));

  const decreaseQuantity = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex TabletSm:flex-nowrap TabletSm:justify-start items-center Tablet:gap-x-8 SmartphonesSm:mt-8 TabletSm:mt-[32px] PC:mt-[74px]">
      <div className="flex SmartphonesSm:gap-x-2 TabletSm:gap-x-8">
        <button onClick={decreaseQuantity}>
          <AiFillMinusCircle className="cursor-pointer text-[#181818] hover:text-black SmartphonesSm:text-[25px] TabletSm:text-[35px]" />
        </button>
        <div className="TabletSm:w-[42px] SmartphonesSm:w-[35px] select-none TabletSm:h-[40px] SmartphonesSm:h-[35px] rounded-xl border-[1px] flex items-center justify-center border-zinc-200">
          <p className="text-[#181818] font-bold text-base">{quantity}</p>
        </div>
        <button onClick={increaseQuantity}>
          <AiFillPlusCircle className="cursor-pointer text-[#181818] hover:text-black SmartphonesSm:text-[25px] TabletSm:text-[35px]" />
        </button>
      </div>
      <div className="TabletSm:ml-0 Smartphones:ml-[60px] flex TabletSm:flex-nowrap SmartphonesSm:gap-x-4 items-center">
        <p className="text-[#ABABAB] font-bold text-[16px] line-through ml-5">
          ${selectedItem.sales * quantity}
        </p>
        <p className="text-[#181818] font-bold SmartphonesSm:text-[25px] TabletSm:text-[32px]">
          ${selectedItem.price * quantity}
        </p>
      </div>
    </div>
  );
};

export default Reducer;
