import React from "react";
import "./style.css";
import { useShoppingCart } from "../../Cart/ShoppingCartProvider";
const CartSummary = () => {
  const { cart, total } = useShoppingCart();

  return (
    <div className="TabletSm:bg-[#fff] SmartphonesSm:bg-zinc-100 Tablet:w-[320px] SmartphonesSm:pr-2 TabletSm:pr-0 TabletSm:w-[552px] SmartphonesSm:mt-10 TabletSm:mt-8 Tablet:mt-0 TabletSm:rounded-[34px] SmartphonesSm:rounded-md Smartphones:pl-3 TabletSm:pl-1 pt-5 pb-2 SmartphonesSm:mx-5 TabletSm:mx-0">
      <div className="Tablet:h-[377px] SmartphonesSm:h-[200px] SmartphonesSm:px-2 TabletSm:pr-3 transform SmartphonesSm:overflow-y-scroll PC:hover:overflow-y-scroll scroll whitespace-nowrap scroll-smooth">
        <h1 className="text-[#181818] font-bold SmartphonesSm:text-[26px] TabletSm:text-[16px]">
          Cart summary
        </h1>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex flex-col mt-4">
              <h1 className="text-[#181818] font-bold SmartphonesSm:text-[12px] Smartphones:text-[14px]">
                {item.quantity} x <span>{item.Product}</span>
              </h1>
              <div className="flex flex-col SmartphonesSm:flex-row SmartphonesSm:gap-x-2">
                <p className="text-[#ABABAB] SmartphonesSm:text-[12px] Smartphones:text-[14px]">
                  Category: {item.Category}
                </p>
                <p className="text-[#ABABAB] SmartphonesSm:text-[12px] Smartphones:text-[14px]">
                  Color: {item.selectedColor || item.maincolor}
                </p>
                <p className="text-[#ABABAB] SmartphonesSm:text-[12px] Smartphones:text-[14px]">
                  Size: {item.selectedSize || item.mainSize}
                </p>
              </div>
            </div>
            <h1 className="text-[#181818] font-bold SmartphonesSm:text-[12px] Smartphones:text-[14px] ml-auto mb-1">
              ${item.price * item.quantity}
            </h1>
          </div>
        ))}
      </div>
      <div className="ShadowBBA mt-4 flex SmartphonesSm:justify-around Tablet:justify-between items-center pr-3">
        <h1 className="text-[#181818] text-[16px] font-bold">Total</h1>
        <h1 className="text-[#181818] text-[32px] font-bold TabletSm:ml-10 Tablet:ml-0">
          {`$${total.toFixed(2)}`}
        </h1>
      </div>
    </div>
  );
};

export default CartSummary;
