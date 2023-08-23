import React, { useEffect, useLayoutEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { useWishlist } from "./WishlistContext";
import { TbHeartOff } from "react-icons/tb";
import { Link } from "react-router-dom";
const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{ height: wishlist.length <= 2 ? "70vh" : "100%" }}
      className="flex flex-col items-center bg-[#F0F0F0] h-full py-8 font-Roboto"
    >
      <h1 className="text-[#ABABAB] text-center text-[24px] font-Roboto font-semibold">
        Favorites
      </h1>
      <div className="flex flex-col gap-y-4 mt-8">
        {wishlist.length === 0 ? (
          <div className="h-[50vh] flex items-center justify-center flex-col font-Roboto">
            <TbHeartOff size={40} color="#ABABAB" />
            <h1 className="text-[20px] mt-6 font-bold text-[#ABABAB]">
              Wishlist is empty.
            </h1>
            <p className="Smartphones:text-[14px] mt-4 text-[#ABABAB] SmartphonesSm:text-[13px] text-center">
              You don’t have any products in the wishlist yet.
            </p>
            <p className="Smartphones:text-[14px] SmartphonesSm:text-[13px] text-center text-[#ABABAB]">
              You will find a lot of interesting products on our “Shop” page.
            </p>
          </div>
        ) : (
          wishlist.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              key={`${item.id}-${index}`}
              className="flex bg-white SmartphonesSm:w-[95vw] SmartphonesSm:h-full TabletSm:w-[580px] TabletSm:h-full PC:w-[900px] Tablet:w-[864px] rounded-[16px] SmartphonesSm:px-4 Smartphones:pl-4 Smartphones:pr-5 py-4"
            >
              <Link to={`/Product/${item.Category}/${item.id}`}>
                <div className="bg-[#D7D7D7] rounded-xl SmartphonesSm:w-[90px] SmartphonesSm:h-full Smartphones:w-[100px] Smartphones:h-[120px] TabletSm:w-[144px] Tablet:h-[144px] Tablet:w-[144px] SmartphonesSm:mr-2 Smartphones:mr-5" />
              </Link>
              <div className="flex w-full">
                <div className="w-full flex flex-col">
                  <div className="flex w-full justify-between items-center">
                    <h1 className="text-[#181818] font-bold SmartphonesSm:text-[12px] Smartphones:text-[20px]">
                      {item.Product}
                    </h1>
                    <button
                      className="relative SmartphonesSm:left-10 Smartphones:left-32"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <AiOutlineClose className="text-[#ABABAB] Smartphones:text-[24px] " />
                    </button>
                  </div>
                  <p className="text-[#ABABAB] SmartphonesSm:text-[12px] Smartphones:text-[16px] mt-4">
                    Category: {item.Category}
                  </p>
                  <p className="text-[#ABABAB] SmartphonesSm:text-[12px] Smartphones:text-[16px]">
                    Color: {item.maincolor}
                  </p>
                  <p className="text-[#ABABAB] SmartphonesSm:text-[12px] Smartphones:text-[16px]">
                    Size: {item.selectedSize || item.mainSize}
                  </p>
                </div>
              </div>
              <div className="flex SmartphonesSm:flex-col mt-10 Smartphones:flex-row items-center gap-x-2 ml-auto">
                <p className="text-[#ABABAB] SmartphonesSm:text-[12px] Smartphones:text-[16px] line-through">
                  ${item.sales}
                </p>
                <p className="text-[#181818] font-bold SmartphonesSm:text-[15px] Smartphones:text-[32px]">
                  ${item.price}
                </p>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
