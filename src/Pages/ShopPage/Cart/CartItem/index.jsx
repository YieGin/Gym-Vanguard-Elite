import React, { useLayoutEffect } from "react";
import {
  AiOutlineClose,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { useShoppingCart } from "../ShoppingCartProvider";
import { Link } from "react-router-dom";

const CartItem = () => {
  const { cart, adjustQuantity, removeFromCart } = useShoppingCart();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="flex flex-col gap-y-4"
      style={{ height: cart.length <= 2 ? "10vh" : "100%" }}
    >
      {cart.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: index * 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          key={item.id}
          className="flex bg-white TabletSm:w-[580px] PC:w-[900px] Tablet:w-[580px] rounded-[16px] pl-4 pr-5 py-4"
        >
          <Link to={`/Product/${item.Category}/${item.id}`}>
            <div className="bg-[#D7D7D7] rounded-xl w-[144px] h-[122px]" />
          </Link>
          <div className="flex flex-col w-full pl-7">
            <div className="flex">
              <div>
                <h1 className="text-[#181818] font-bold text-[20px] w-full">
                  {item.Product}
                </h1>
                <p className="text-[#ABABAB] text-[16px]">
                  Category: {item.Category}
                </p>
                <p className="text-[#ABABAB] text-[14px]">
                  Color: {item.selectedColor || item.maincolor}
                </p>
                <p className="text-[#ABABAB] text-[14px]">
                  Size: {item.selectedSize || item.mainSize}
                </p>
              </div>
              <div className="flex items-center gap-x-2 ml-auto">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mb-auto"
                >
                  <AiOutlineClose className="text-[#ABABAB] text-[24px]" />
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="TabletSm::flex PC:hidden items-center mt-[19px]">
                <div className="flex gap-x-4">
                  <button
                    onClick={() => adjustQuantity(item.id, item.quantity - 1)}
                  >
                    <AiFillMinusCircle className="cursor-pointer" size={35} />
                  </button>
                  <div className="w-[42px] select-none h-[40px] rounded-xl border-[1px] flex items-center justify-center border-zinc-200">
                    <p className="text-[#181818] font-bold text-base">
                      {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => adjustQuantity(item.id, item.quantity + 1)}
                  >
                    <AiFillPlusCircle className="cursor-pointer" size={35} />
                  </button>
                </div>
              </div>
              <div className="TabletSm:hidden PC:flex items-center">
                <div className="flex gap-x-8">
                  <button
                    onClick={() => adjustQuantity(item.id, item.quantity - 1)}
                  >
                    <AiFillMinusCircle className="cursor-pointer" size={35} />
                  </button>
                  <div className="w-[42px] select-none h-[40px] rounded-xl border-[1px] flex items-center justify-center border-zinc-200">
                    <p className="text-[#181818] font-bold text-base">
                      {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => adjustQuantity(item.id, item.quantity + 1)}
                  >
                    <AiFillPlusCircle className="cursor-pointer" size={35} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col l-auto">
                <div className="flex mt-auto items-center ml-auto">
                  <p className="text-[#ABABAB] text-[16px] line-through">
                    ${item.sales * item.quantity}
                  </p>
                  <p className="text-[#181818] font-bold text-[32px]">
                    ${item.price * item.quantity}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CartItem;
