import React, { useState } from "react";
import ShortsData from "../../../../LandingPage/Categories/Shorts/ShortsData";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { useWishlist } from "../../../Wishlist/WishlistContext";
import { useShoppingCart } from "../../../Cart/ShoppingCartProvider";
const SimilarPhone = () => {
  const [showIdsfirst] = useState(5);
  const firstFiveIds = ShortsData.slice(0, showIdsfirst);
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

  return (
    <div className="font-bold SmartphonesSm:flex TabletSm:hidden w-full justify-center flex-col">
      <div className="mt-10 mb-3 flex flex-col gap-y-1">
        <h1 className="text-[#181818] font-bold text-[25px]">
          You may also like
        </h1>
      </div>
      <div className="flex gap-x-[32px] w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth pl-2">
        <div className="flex min-w-full gap-x-4 h-[260px] ">
          {firstFiveIds.map((item) => (
            <div key={item.id} className="flex flex-col">
              <Link to={`/Product/${item.Category}/${item.id}`}>
                <div className="w-[144px] h-[144px] bg-[#ABABAB] rounded-xl" />
              </Link>
              <div className="pr-5 flex flex-col items-center w-[172px] h-[101px] pt-6 rounded-[17px]">
                <p className="text-[#000] text-[16px] font-Roboto font-bold leading-5">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarPhone;
