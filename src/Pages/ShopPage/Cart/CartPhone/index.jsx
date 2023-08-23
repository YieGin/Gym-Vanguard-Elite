import React, { useLayoutEffect, useReducer } from "react";
import PhoneCartItem from "./PhoneCartItem";
import PhoneCartSummary from "./PhoneCartSummary";

const CartPhone = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="SmartphonesSm:flex TabletSm:hidden flex-col mt-5 font-Roboto">
      <div className="flex flex-col items-center h-full gap-y-8">
        <PhoneCartItem />
      </div>
      <PhoneCartSummary />
    </div>
  );
};

export default CartPhone;
