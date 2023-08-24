import React, { useLayoutEffect } from "react";
import CartPhone from "./CartPhone";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useShoppingCart } from "./ShoppingCartProvider";
import { MdRemoveShoppingCart } from "react-icons/md";

const Cart = () => {
  const { cart } = useShoppingCart();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#F0F0F0] h-full SmartphonesSm:pt-8 TabletSm:pt-0 TabletSm:py-8 Tablet:pb-36 font-Robotop Tablet:px-0 TabletSm:px-[94px]">
      <h1 className="text-[#ABABAB] text-center text-[24px] font-Roboto font-semibold TabletSm:mt-8">
        Shopping Cart
      </h1>
      {cart.length === 0 ? (
        <div className="h-[100vh] flex items-center justify-center flex-col font-Roboto">
          <MdRemoveShoppingCart size={40} color="#ABABAB" />
          <h1 className="text-[20px] mt-6 font-bold text-[#ABABAB]">
            Your cart is empty.
          </h1>
          <p className="Smartphones:text-[14px] mt-4 text-[#ABABAB] SmartphonesSm:text-[13px] text-center">
            You don’t have any products in the cart yet.
          </p>
          <p className="Smartphones:text-[14px] SmartphonesSm:text-[13px] text-center text-[#ABABAB]">
            You will find a lot of interesting products on our “Shop” page.
          </p>
        </div>
      ) : (
        <>
          <div className="SmartphonesSm:hidden TabletSm:flex justify-center TabletSm:flex-wrap Tablet:flex-nowrap mt-8 gap-x-[38px]">
            <CartItem />
            <CartSummary />
          </div>
          <CartPhone />
        </>
      )}
    </div>
  );
};

export default Cart;
