import React, { useState, useEffect } from "react";
import { BiUserCircle, BiHeart, BiLogo99Designs } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavigationBar from "./NavigationBar";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { useWishlist } from "../ShopPage/Wishlist/WishlistContext";
import { useShoppingCart } from "../ShopPage/Cart/ShoppingCartProvider";
import { Logo } from "../../Assets/Images";

const Header = () => {
  const { wishlist } = useWishlist();
  const { cart } = useShoppingCart();
  const [openMenu, setOpenMenu] = useState(false);
  const HandleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 150;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navbarStyle = {
    transform: visible ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div style={navbarStyle} className="sticky top-0 z-50">
      <div className="bg-[#181818] text-white h-[44px] flex items-center justify-center">
        <p className="text-[16px] font-Roboto font-bold">
          Shipping orders above 60$
        </p>
      </div>
      <div className="bg-[#ffffff] TabletSm:px-4 SmartphonesSm:px-[15px] Tablet:px-[32px] flex items-center justify-between border-[0.5px] SmartphonesSm:h-[44px] TabletSm:h-[80px] border-b-[#efefef]">
        <div className="SmartphonesSm:flex TabletSm:hidden gap-x-4">
          {openMenu ? (
            <AiOutlineClose
              onClick={HandleOpenMenu}
              color="#181818"
              size={20}
            />
          ) : (
            <AiOutlineMenu onClick={HandleOpenMenu} color="#181818" size={20} />
          )}
        </div>
        <Link
          to={"/"}
          className="SmartphonesSm:ml-auto TabletSm:mr-0 TabletSm:ml-0 SmartphonesSm:mr-auto"
        >
          <img
            className="TabletSm:w-[120px] SmartphonesSm:ml-12 Smartphones:ml-24 TabletSm:ml-0 h-10 object-cover"
            alt="Logo"
            src={Logo}
          />
        </Link>
        <div className="flex gap-x-5">
          <input
            className="SmartphonesSm:hidden TabletSm:flex bg-[#FFFFFF] border-zinc-200 w-[312px] outline-none h-[40px] rounded-lg border-[1px] px-4 py-4 text-zinc-500 font-bold text-[14px] leading-4"
            type="text"
            placeholder="What are you looking for"
          />
          <button className="SmartphonesSm:hidden TabletSm:flex justify-center items-center bg-[#2b2b2b] hover:bg-[#181818] w-[74px] h-[40px] rounded-xl text-[#fff] font-medium text-[14px] font-Roboto">
            Search
          </button>
        </div>
        <div className="flex gap-x-4">
          <Link to="/Signin">
            <BiUserCircle
              className="cursor-pointer SmartphonesSm:text-[20px] TabletSm:text-[30px]"
              color="#181818"
            />
          </Link>
          <Link to="/Wishlist">
            <div className="flex cursor-pointer">
              <BiHeart
                className="SmartphonesSm:text-[20px] TabletSm:text-[30px]"
                color="#181818"
              />
              <div className="absolute SmartphonesSm:top-[60%] SmartphonesSm:right-[50px] TabletSm:right-[60px] TabletSm:top-[39%] Tablet:right-[77px] flex items-center justify-center SmartphonesSm:w-3 SmartphonesSm:h-3 TabletSm:w-4 TabletSm:h-4 bg-black rounded-full">
                <p className="font-Roboto font-semibold SmartphonesSm:text-[#fff] TabletSm:text-[#fff] text-[10px]">
                  {wishlist.length}
                </p>
              </div>
            </div>
          </Link>
          <Link to="/Cart">
            <div className="flex cursor-pointer">
              <AiOutlineShoppingCart
                className="SmartphonesSm:text-[20px] TabletSm:text-[30px]"
                color="#181818"
              />
              <div className="absolute SmartphonesSm:top-[60%] SmartphonesSm:right-3 TabletSm:right-3 TabletSm:top-[39%] Tablet:right-7 flex items-center justify-center SmartphonesSm:w-3 SmartphonesSm:h-3 TabletSm:w-4 TabletSm:h-4 bg-black rounded-full">
                <p className="font-Roboto font-semibold text-[#fff] text-[10px]">
                  {cart.length}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <NavigationBar />
      <HamburgerMenu openMenu={openMenu} />
    </div>
  );
};

export default Header;
