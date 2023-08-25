import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Icons
import { BiHeart } from "react-icons/bi";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

// Contexts
import { useWishlist } from "../../../../Wishlist/WishlistContext";
import { useShoppingCart } from "../../../../Cart/ShoppingCartProvider";

const ProductCategories = ({
  productList,
  selectedColor,
  rangeValue,
  selectedSize,
  category,
}) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart, removeFromCart, cart } = useShoppingCart();
  const [quantity] = useState(1);

  const isProductInCart = (productId) =>
    cart.some((cItem) => cItem.id === productId);
  const isProductInWishlist = (productId) =>
    wishlist.some((wItem) => wItem.id === productId);

  const handleAddToCart = (item) => {
    if (isProductInCart(item.id)) {
      removeFromCart(item.id);
    } else {
      const productToAdd = { ...item, quantity };
      addToCart(productToAdd);
    }
  };

  const handleHeartClick = (item) => {
    if (isProductInWishlist(item.id)) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  };

  const filteredProducts = productList.filter(
    (item) =>
      (!selectedColor || item.color === selectedColor) &&
      (rangeValue === 0 || item.price <= rangeValue) &&
      (!selectedSize || item.mainSize === selectedSize)
  );

  return (
    <div className="w-full justify-center flex items-center flex-col mt-10">
      <div className="flex flex-wrap items-center justify-center gap-y-16">
        {filteredProducts.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            key={item.id}
            className="flex flex-col items-center h-full TabletSm:w-[222px] justify-center"
          >
            <Link to={`/Product/${item.Category}/${item.id}`}>
              <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.8 }}
                className="Tablet:w-[144px] Tablet:h-[144px] SmartphonesSm:w-[140px] SmartphonesSm:h-[140px] bg-[#ABABAB] rounded-xl"
              />
            </Link>
            <div className="mt-1 px-5 flex flex-col items-center w-[190px] h-full rounded-[17px]">
              <p className="text-[#000000] truncate w-[140px] text-center text-[16px] font-Roboto font-bold leading-5">
                {item.Product}
              </p>
              <p className="line-through text-[16px] font-Roboto leading-5 text-[#A9A9A9] mt-5">
                ${item.sales}
              </p>
              <div className="flex justify-between items-end SmartphonesSm:w-[85%] TabletSm:w-full TabletSm:gap-x-5 Tablet:gap-x-5">
                <button onClick={() => handleHeartClick(item)}>
                  {isProductInWishlist(item.id) ? (
                    <AiFillHeart className="text-red-500" size={25} />
                  ) : (
                    <BiHeart size={25} />
                  )}
                </button>
                <p className="text-[20px] font-bold font-Roboto leading-5">
                  ${item.price}
                </p>
                <button onClick={() => handleAddToCart(item)}>
                  {isProductInCart(item.id) ? (
                    <BsFillCartFill className="text-red-500" size={25} />
                  ) : (
                    <AiOutlineShoppingCart size={25} />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
