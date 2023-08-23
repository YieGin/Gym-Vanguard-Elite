import React from "react";
import {
  AiOutlineClose,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { useShoppingCart } from "../../ShoppingCartProvider";
import { Link } from "react-router-dom";

const ProductDetail = ({ title, detail }) => (
  <p className="text-[#ABABAB] SmartphonesSm:text-[14px] Smartphones:text-[16px]">{`${title}: ${detail}`}</p>
);

const PhoneCartItem = () => {
  const { cart, adjustQuantity, removeFromCart } = useShoppingCart();

  return (
    <>
      {cart.map((item) => (
        <div
          key={item.id}
          className="bg-[#fff] SmartphonesSm:w-[93vw] SmartphonesSm:rounded-[16px] SmartphonesSm:h-full Smartphones:w-[90%] Smartphones:h-full TabletSm:rounded-3xl p-3 flex SmartphonesSm:gap-x-0 Smartphones:gap-x-1"
        >
          <div className="flex flex-col w-full h-full">
            <div className="flex">
              <Link to={`/Product/${item.Category}/${item.id}`}>
                <div className="SmartphonesSm:w-[100px] mr-2 SmartphonesSm:h-[100px] bg-[#D7D7D7] rounded-xl" />
              </Link>
              <div className="flex flex-col w-full">
                <div className="flex justify-between w-full ml-auto">
                  <h1 className="text-[#181818] font-bold SmartphonesSm:text-[14px] Smartphones:text-[20px] mb-1">
                    {item.Product}
                  </h1>
                  <button className="" onClick={() => removeFromCart(item.id)}>
                    <AiOutlineClose className="text-[#ABABAB] text-[20px]" />
                  </button>
                </div>
                <div>
                  <ProductDetail title="Category" detail={item.Category} />
                  <ProductDetail
                    title="Color"
                    detail={item.selectedColor || item.maincolor}
                  />
                  <ProductDetail
                    title="Size"
                    detail={item.selectedSize || item.mainSize}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-x-3 items-center">
                <button
                  onClick={() => adjustQuantity(item.id, item.quantity - 1)}
                >
                  <AiFillMinusCircle className="cursor-pointer" size={25} />
                </button>
                <div className="w-[30px] select-none h-[30px] rounded-xl border-[1px] flex items-center justify-center border-zinc-200">
                  <p className="text-[#181818] font-bold text-base">
                    {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => adjustQuantity(item.id, item.quantity + 1)}
                >
                  <AiFillPlusCircle className="cursor-pointer" size={25} />
                </button>
              </div>
              <div className="flex">
                <p className="text-[#ABABAB] text-[14px] line-through SmartphonesSm:mt-2 TabletSm:mt-0">
                  ${item.sales * item.quantity}
                </p>
                <p className="text-[#181818] font-bold text-[25px]">
                  ${item.price * item.quantity}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PhoneCartItem;
