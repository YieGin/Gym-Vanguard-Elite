import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { useShoppingCart } from "../../../Cart/ShoppingCartProvider";
import "./style.css";

const InCart = ({ show, setShow }) => {
  const {
    cart,
    adjustQuantity,
    removeFromCart,
    subtotal,
    delivery,
    discount,
    total,
  } = useShoppingCart();

  // Toggle the visibility of the cart
  const toggleCart = () => {
    setShow((prevShow) => !prevShow);
  };

  // Prevent scrolling when the cart is visible
  useEffect(() => {
    document.body.classList.toggle("no-scroll", show);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [show]);

  return (
    <div className="font-Roboto">
      <div className={`overlay ${show ? "flex" : "hidden"}`} />
      <nav
        className={`fixed top-0 z-50 right-0 SmartphonesSm:w-full Smartphones:w-[343px] TabletSm:w-[343px] py-8 SmartphonesSm:px-4 Smartphones:px-5 bg-white flex flex-col h-[100vh] transform ${
          show ? "" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <button
          className="absolute right-2 top-1 bg-white rounded-full"
          onClick={toggleCart}
        >
          <AiOutlineClose size={25} />
        </button>

        <h1 className="text-center text-[#000] font-bold text-[24px]">
          In cart
        </h1>

        <div className="flex flex-col mt-4 gap-y-2 mr-1">
          {/* Display cart totals */}
          {[
            ["Subtotal", subtotal],
            ["Delivery", delivery],
            ["Discount", discount],
          ].map(([label, value]) => (
            <div className="flex" key={label}>
              <p className="text-[#181818] text-[16px]">{label}</p>
              <p className="text-[#181818] text-[16px] ml-auto font-bold">
                {label === "Discount"
                  ? `- ${value.toFixed(2)} $`
                  : `$${value.toFixed(2)}`}
              </p>
            </div>
          ))}
        </div>

        <div className="overflow-y-scroll scroll whitespace-nowrap scroll-smooth">
          {cart.map((item) => (
            <div key={item.id}>
              <div className="flex gap-y-9 mt-8">
                <div className="Smartphones:w-[512px] SmartphonesSm:w-[170px] h-[112px] rounded-xl bg-[#D7D7D7]" />
                <div className="flex flex-col SmartphonesSm:gap-y-1 Smartphones:gap-y-2 SmartphonesSm:ml-2 Smartphones:ml-2 w-full">
                  <div className="flex justify-between">
                    <div className="flex flex-col w-full">
                      <div className="flex">
                        <p className="text-[#181818] font-bold text-[14px] truncate SmartphonesSm:w-[150px]">
                          {item.Product}
                        </p>
                      </div>
                      <p className="text-[#ABABAB] text-[14px]">
                        Category: {item.Category}
                      </p>
                      <p className="text-[#ABABAB] text-[14px]">
                        Color: {item.selectedColor || item.maincolor}
                      </p>
                      <p className="text-[#ABABAB] text-[14px]">
                        Size: {item.selectedSize || item.mainSize}
                      </p>
                    </div>
                    <div>
                      <button onClick={() => removeFromCart(item.id)}>
                        <AiOutlineClose size={25} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex gap-x-6 items-center justify-center">
                  <button
                    onClick={() => adjustQuantity(item.id, item.quantity - 1)}
                  >
                    <AiFillMinusCircle className="cursor-pointer" size={25} />
                  </button>
                  <p className="text-[#181818] font-bold text-base">
                    {item.quantity}
                  </p>
                  <button
                    onClick={() => adjustQuantity(item.id, item.quantity + 1)}
                  >
                    <AiFillPlusCircle className="cursor-pointer" size={25} />
                  </button>
                </div>
                <div className="flex items-center ml-auto">
                  <p className="line-through text-[#ABABAB] SmartphonesSm:text-[14px] Smartphones:text-[16px] ml-auto">
                    ${item.sales * item.quantity}
                  </p>
                  <p className="text-[#181818] SmartphonesSm:text-[25px] Smartphones:text-[32px] font-bold">
                    ${item.price * item.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col border-t-[1px] gap-y-8 border-zinc-200 mt-auto">
          <div className="flex mt-[41px] justify-between w-full items-center ">
            <p className="text-[#181818] font-bold text-[16px]">Total</p>
            <h1 className="text-[#181818] text-[32px] font-bold">
              {`$${total.toFixed(2)}`}
            </h1>
          </div>

          {/* Checkout and View Cart buttons */}
          <div className="flex flex-col gap-y-4">
            <Link to={"/Ordering"}>
              <button onClick={toggleCart} className="button w-full mb-0">
                <span className="button_lg bg-[#0f1923]">
                  <span className="button_sl"></span>
                  <div className="flex items-center">
                    <span className="button_text text-center w-full">
                      Checkout
                    </span>
                  </div>
                </span>
              </button>
            </Link>
            <Link to={"/Cart"}>
              <button className="button w-full">
                <span className="button_lg bg-[#0f1923]">
                  <span className="button_sl"></span>
                  <div className="flex items-center">
                    <span className="button_text text-center w-full">
                      View cart
                    </span>
                  </div>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default InCart;
