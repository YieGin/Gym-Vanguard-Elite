import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiHeart } from "react-icons/bi";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

import LiftingData from "../../Lifting/LiftingData";
import { useWishlist } from "../../../../ShopPage/Wishlist/WishlistContext";
import { useShoppingCart } from "../../../../ShopPage/Cart/ShoppingCartProvider";

const PhoneLifting = () => {
  const VISIBLE_ITEMS_COUNT = 5;
  const visibleItems = LiftingData.slice(0, VISIBLE_ITEMS_COUNT);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart, removeFromCart, cart } = useShoppingCart();
  const [quantity] = useState(1);

  const handleAddToCart = (item) => {
    const productId = item.id;
    const existingProduct = cart.find((cItem) => cItem.id === productId);

    if (existingProduct) {
      removeFromCart(productId);
    } else {
      addToCart({ ...item, quantity });
    }
  };

  const handleHeartClick = (item) => {
    const uniqueId = item.id;
    const isItemInWishlist = wishlist.some((wItem) => wItem.id === uniqueId);

    isItemInWishlist
      ? removeFromWishlist(uniqueId)
      : addToWishlist({ ...item, id: uniqueId });
  };

  return (
    <div className="font-bold flex w-full justify-center flex-col px-4">
      <div className="ml-5 mt-10 mb-3 flex flex-col gap-y-1">
        <h1 className="text-[#181818] font-bold text-[25px]">Lifting</h1>
        <Link
          to="/Lifting"
          className="text-[#181818] font-bold text-[15px] underline z-10 underline-offset-1"
        >
          View all
        </Link>
      </div>
      <div className="flex gap-x-[32px] w-full h-full justify-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
        <div className="flex min-w-full gap-x-5 h-[260px]">
          {visibleItems.map((item, index) => {
            const { ref, inView } = useInView({ triggerOnce: true });

            if (!item) return null;

            return (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  scale: inView ? 1 : 0.5,
                }}
                transition={{
                  duration: 0.2,
                  delay: inView ? index * 0.1 : 0,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                key={item.id}
                className="flex flex-col items-center"
              >
                <Link to={`/Product/${item.Category}/${item.id}`}>
                  <div className="w-[144px] h-[144px] bg-[#ABABAB] rounded-xl" />
                </Link>
                <div className="px-5 flex flex-col items-center w-[172px] h-[101px] pt-2 rounded-[17px]">
                  <p className="truncate w-[100px] text-black font-Roboto font-bold leading-5">
                    {item.Product}
                  </p>
                  <p className="line-through text-[16px] font-Roboto leading-5 text-[#A9A9A9] mt-5">
                    ${item.sales}
                  </p>
                  <div className="flex justify-between items-end w-full">
                    <button onClick={() => handleHeartClick(item)}>
                      {wishlist.some((wItem) => wItem.id === item.id) ? (
                        <AiFillHeart className="text-red-500" size={25} />
                      ) : (
                        <BiHeart size={25} />
                      )}
                    </button>
                    <p className="text-[20px] font-bold font-Roboto leading-5">
                      ${item.price}
                    </p>
                    <button onClick={() => handleAddToCart(item)}>
                      {cart.some((cItem) => cItem.id === item.id) ? (
                        <BsFillCartFill className="text-red-500" size={25} />
                      ) : (
                        <AiOutlineShoppingCart size={25} />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhoneLifting;
