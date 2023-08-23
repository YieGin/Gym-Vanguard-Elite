import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useWishlist } from "../../../../ShopPage/Wishlist/WishlistContext";
import { useShoppingCart } from "../../../../ShopPage/Cart/ShoppingCartProvider";

const LiftingItems = ({ thirdFiveIds }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart, removeFromCart, cart } = useShoppingCart();
  const [quantity] = useState(1);

  const handleAddToCart = (item) => {
    const productId = item.id;
    const existingProduct = cart.find((cItem) => cItem.id === productId);

    if (existingProduct) {
      removeFromCart(productId);
    } else {
      const productToAdd = { ...item, quantity: quantity };
      addToCart(productToAdd);
    }
  };

  const handleHeartClick = (item) => {
    const uniqueId = item.id;

    if (wishlist.some((wItem) => wItem.id === uniqueId)) {
      removeFromWishlist(uniqueId);
    } else {
      addToWishlist({ ...item, id: uniqueId });
    }
  };

  // Ensure the array always has 5 elements
  const paddedthirdFiveIds = [
    ...thirdFiveIds,
    ...new Array(5 - thirdFiveIds.length).fill(null),
  ];

  return (
    <div className="flex TabletSm:gap-x-14 Tablet:gap-x-20">
      {paddedthirdFiveIds.map((item, index) => {
        const { ref, inView } = useInView({ triggerOnce: false });
        if (item === null) {
          return null;
        }
        return (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: inView ? 1 : 0,
              scale: inView ? 1 : 0.5,
            }}
            transition={{
              duration: 0.5,
              delay: inView ? index * 0.3 : 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex flex-col items-center"
            key={item.id}
          >
            <Link to={`/Product/${item.Category}/${item.id}`}>
              <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.8 }}
                className="Tablet:w-[144px] Tablet:h-[144px] TabletSm:w-[120px] TabletSm:h-[120px] bg-[#ABABAB] rounded-xl"
              />
            </Link>
            <div className="flex flex-col items-center w-[192px pb-5 rounded-[17px] mt-2">
              <p className="truncate w-[140px] text-center text-black text-lg font-Roboto font-bold leading-5">
                {item.Product}
              </p>
              <p className="line-through text-[16px] font-Roboto leading-5 text-[#A9A9A9] mt-5">
                ${item.sales}
              </p>
              <div className="flex justify-between items-end w-full TabletSm:gap-x-5 Tablet:gap-x-5">
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
  );
};

export default LiftingItems;
