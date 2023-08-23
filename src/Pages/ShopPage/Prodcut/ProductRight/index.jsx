import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Data
import Lifting from "../../../LandingPage/Categories/Lifting/LiftingData";
import Shorts from "../../../LandingPage/Categories/Shorts/ShortsData";
import Jackets from "../../../LandingPage/Categories/Jackets/JacketsData";
import Stringers from "../../../LandingPage/Categories/Stringers/StringersData";

// Components
import Colors from "./Colors";
import Size from "./Size";
import Reducer from "./Reducer";
import InCart from "./InCart";

// Contexts
import { useWishlist } from "../../Wishlist/WishlistContext";
import { useShoppingCart } from "../../Cart/ShoppingCartProvider";

// Icons
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { SlRefresh } from "react-icons/sl";

const categoryDataMap = {
  lifting: Lifting,
  shorts: Shorts,
  jackets: Jackets,
  stringers: Stringers,
};

const ProductRight = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [show, setShow] = useState(false);

  const { category, itemId } = useParams();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart, cart } = useShoppingCart();

  const data = categoryDataMap[category] || [];
  const selectedItem = data.find((item) => item.id === parseInt(itemId));

  const handleAddToCart = (item) => {
    const productToAdd = {
      ...item,
      quantity: quantity,
      selectedColor: selectedColor,
      selectedSize: selectedSize,
    };
    addToCart(productToAdd);
    setShow(true);
  };

  const handleHeartClick = (item) => {
    const uniqueId = item.id;
    const isItemInWishlist = wishlist.some((wItem) => wItem.id === uniqueId);

    isItemInWishlist
      ? removeFromWishlist(uniqueId)
      : addToWishlist({ ...item, id: uniqueId });
  };

  return (
    <div className="flex flex-col Smartphones:items-start py-1 font-Roboto TabletSm:w-[50%] SmartphonesSm:w-[100%]">
      <h1 className="text-[#000000] font-bold SmartphonesSm:text-[22px] TabletSm:text-start TabletSm:text-[24px] text-[32px]">
        {selectedItem.Product}
      </h1>
      <p className="text-[#ABABAB] TabletSm:text-[16px] text-xl">
        {selectedItem.Manufacturer}
      </p>
      <Colors
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <Size selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
      <Reducer quantity={quantity} setQuantity={setQuantity} />
      <InCart show={show} closeModal={handleAddToCart} setShow={setShow} />

      <div className="flex TabletSm:flex-nowrap SmartphonesSm:flex-wrap TabletSm:justify-center Tablet:justify-start PC:justify-start gap-4 mt-5">
        <button
          onClick={() => handleHeartClick(selectedItem)}
          className="SmartphonesSm:w-full TabletSm:w-full Tablet:w-[200px] PC:w-[220px] cursor-pointer h-[56px] rounded-xl flex px-4 TabletSm:justify-around border-[1px] border-zinc-300 hover:border-zinc-400 items-center"
        >
          {wishlist.some((wItem) => wItem.id === selectedItem.id) ? (
            <AiFillHeart className="text-red-500" size={25} />
          ) : (
            <BiHeart size={25} />
          )}
          <p className="text-[#ABABAB] font-bold text-[14px] SmartphonesSm:mx-auto TabletSm:mx-0">
            Add to wishlist
          </p>
        </button>
        <button
          onClick={() => handleAddToCart(selectedItem)}
          className="SmartphonesSm:w-full TabletSm:w-full Tablet:w-[200px] PC:w-[220px] cursor-pointer h-[56px] rounded-xl flex px-4 justify-around bg-[#181818] hover:bg-black items-center"
        >
          {cart.some(
            (cItem) => cItem.id === `${cItem.Category}-${selectedItem.id}`
          ) ? (
            <>
              <BsFillCartFill size={30} color="#FFFFFF" />
              <p className="text-[#FFFFFF] font-bold text-[14px] SmartphonesSm:mx-auto TabletSm:mx-0">
                In Cart
              </p>
            </>
          ) : (
            <>
              <AiOutlineShoppingCart size={30} color="#FFFFFF" />
              <p className="text-[#FFFFFF] font-bold text-[14px] SmartphonesSm:mx-auto TabletSm:mx-0">
                Add to cart
              </p>
            </>
          )}
        </button>
      </div>

      <h1 className="text-[#181818] font-bold text-[20px] TabletSm:mt-[32px] mt-[76px]">
        Delivered to your door
      </h1>

      <div className="w-full h-[144px] rounded-[34px] px-8 py-4 border-[1px] mt-4 flex flex-col justify-center gap-y-6">
        <div className="flex gap-x-5">
          <SlRefresh size={25} />
          <p className="text-[#ABABAB] text-[16px]">
            Free 30-Day Return Policy!
          </p>
        </div>
        <div className="flex gap-x-5">
          <CiDeliveryTruck size={25} />
          <p className="text-[#ABABAB] text-[16px]">
            Free Standard delivery over $75*
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductRight;
