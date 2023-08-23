import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../ShoppingCartProvider";

const CartLineItem = ({ title, value }) => (
  <div className="flex justify-between">
    <p className="text-[#181818] text-[16px]">{title}</p>
    <p className="text-[#181818] font-bold text-[16px]">{value}</p>
  </div>
);

const CartSummary = () => {
  const { subtotal, delivery, discount, total } = useShoppingCart();

  return (
    <div className="sticky right-0 top-5 flex flex-col gap-y-2 bg-white TabletSm:mt-4 Tablet:mt-0 rounded-[34px] TabletSm:w-[580px] Tablet:w-[278px] px-6 py-8 h-full">
      <CartLineItem title="Subtotal" value={`$${subtotal.toFixed(2)}`} />
      <CartLineItem title="Delivery" value={`$${delivery.toFixed(2)}`} />
      <CartLineItem title="Discount" value={`-$${discount.toFixed(2)}`} />

      <div className="flex border-t-[1px] border-zinc-200 gap-x-4 mt-[24px]">
        <input
          className="TabletSm:w-full Tablet:w-[146px] mt-4 px-4 outline-none"
          type="text"
          placeholder="Enter promocode"
        />
        <button className="bg-[#181818] px-4 py-2 w-[60px] h-[40px] rounded-xl mt-4 text-[#fff] flex items-center justify-center text-[12px]">
          Apply
        </button>
      </div>

      <div className="flex border-t-[1px] border-zinc-200 gap-x-4 mt-[24px] items-center justify-between">
        <h1 className="text-[#181818] font-bold text-[16px]">Total</h1>
        <h1 className="text-[#181818] text-[32px] font-bold">{`$${total.toFixed(
          2
        )}`}</h1>
      </div>

      <Link to="/Ordering">
        <button className="button w-full mb-0">
          <span className="button_lg bg-[#0f1923]">
            <span className="button_sl"></span>
            <div className="flex items-center">
              <span className="button_text text-center w-full">Checkout</span>
            </div>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CartSummary;
