import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
  AiFillRedditCircle,
} from "react-icons/ai";
import { FaFacebookF, FaDiscord } from "react-icons/fa";
import { Logo } from "../../Assets/Images";
import CopyRight from "./CopyRight";
import { Link } from "react-router-dom";

const Footer = () => {
  const [helpOpen, setHelpOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const handleHelpOpen = () => {
    setHelpOpen(!helpOpen);
    setCompanyOpen(false);
  };

  const handleCompanyOpen = () => {
    setCompanyOpen(!companyOpen);
    setHelpOpen(false);
  };

  return (
    <div className="bg-[#181818] h-full w-full py-8 font-Roboto SmartphonesSm:px-8">
      <div className="flex TabletSm:px-[32px] Tablet:px-[112px] PC:px-[360px]">
        <div className="flex flex-col TabletSm:gap-y-4 TabletSm:mr-[113px] Tablet:mr-[72px] PC:mr-[144px]">
          <div className="flex gap-x-2">
            <FiMapPin size={24} color="#ABABAB" />
            <p className="font-Roboto text-[14px] text-[#ABABAB]">
              165 Lake Stperry NY 14530-1409, USA
            </p>
          </div>
          <div className="flex gap-x-2 SmartphonesSm:mt-4 TabletSm:mt-0">
            <MdEmail size={24} color="#ABABAB" />
            <p className="font-Roboto text-[14px] text-[#ABABAB]">
              default@gmail.com
            </p>
          </div>
          <img
            className="w-32 h-[40px] SmartphonesSm:mt-5 TabletSm:mt-3"
            src={Logo}
            alt="Logo"
          />
          <div className="flex gap-x-3 SmartphonesSm:my-5 TabletSm:mt-3">
            <AiOutlineTwitter
              className="cursor-pointer"
              size={25}
              color="#fff"
            />
            <AiOutlineInstagram
              className="cursor-pointer"
              size={25}
              color="#fff"
            />
            <FaFacebookF className="cursor-pointer" size={25} color="#fff" />
            <AiFillYoutube className="cursor-pointer" size={25} color="#fff" />
            <AiFillRedditCircle
              className="cursor-pointer"
              size={25}
              color="#fff"
            />
            <FaDiscord className="cursor-pointer" size={25} color="#fff" />
          </div>

          {/* Help section */}
          <>
            <div
              onClick={handleHelpOpen}
              className="SmartphonesSm:flex TabletSm:hidden items-center gap-x-2"
            >
              <IoMdArrowDropdown size={24} color="#fff" />
              <p className="text-[#fff] font-bold text-[16px]">Help</p>
            </div>
            <div
              className={`TabletSm:hidden SmartphonesSm:flex flex-col gap-y-2 ${
                helpOpen
                  ? " mt-2 pl-8"
                  : "-translate-x-full h-0 hidden opacity-0"
              } transition-transform duration-500 ease-in-out`}
            >
              <Link to="/FAQ">
                <p className="text-[#DADADA]">FAQ</p>
              </Link>
              <p className="text-[#DADADA]">Delivery Information</p>
              <p className="text-[#DADADA]">Returns Policy</p>
              <p className="text-[#DADADA]">Make A Return</p>
              <p className="text-[#DADADA]">Orders</p>
            </div>
          </>

          {/* Company info section */}
          <>
            <div
              onClick={handleCompanyOpen}
              className="SmartphonesSm:flex TabletSm:hidden items-center gap-x-2 TabletSm:mt-0 SmartphonesSm:mt-5"
            >
              <IoMdArrowDropdown size={24} color="#fff" />
              <p className="text-[#fff] font-bold text-[16px]">Company info</p>
            </div>
            <div
              className={`TabletSm:hidden SmartphonesSm:flex flex-col gap-y-2 mt-2 pl-8 ${
                companyOpen ? "opacity-1" : "-translate-x-full h-0 opacity-0"
              } transition-transform duration-500 ease-in-out`}
            >
              <p className="text-[#DADADA]">Affiliate Plan</p>
              <p className="text-[#DADADA]">Questionnaire</p>
              <p className="text-[#DADADA]">Shipping & Delivery</p>
              <p className="text-[#DADADA]">Terms and Conditions</p>
              <p className="text-[#DADADA]">About us</p>
            </div>
          </>
        </div>

        {/* Tablet and PC view */}
        <div className="Tablet:flex w-full gap-x-[72px] SmartphonesSm:hidden Tablet:mr-[72px] PC:mr-[144px]">
          <div className="flex w-full flex-col">
            <h1 className="cursor-pointer text-white text-base font-bold font-Roboto">
              Help
            </h1>
            <ul className="mt-4 flex flex-col gap-y-2">
              <li className="cursor-pointer font-Roboto text-sm text-[#ABABAB] hover:text-[#fff]">
                Privacy Policy
              </li>
              <li className="cursor-pointer font-Roboto text-sm text-[#ABABAB] hover:text-[#fff]">
                Refund & Exchange
              </li>
              <li className="cursor-pointer font-Roboto text-sm text-[#ABABAB] hover:text-[#fff]">
                Declaration
              </li>
              <li className="cursor-pointer font-Roboto text-sm text-[#ABABAB] hover:text-[#fff]">
                Contact us
              </li>
              <li className="cursor-pointer font-Roboto text-sm text-[#ABABAB] hover:text-[#fff]">
                Affiliate program
              </li>
              <li className="cursor-pointer font-Roboto text-sm text-[#ABABAB] hover:text-[#fff]">
                Shipping & Delivery
              </li>
              <Link to="./FAQ">
                <li className="cursor-pointer font-Roboto text-sm text-[#ABABAB] hover:text-[#fff]">
                  FAQ
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col w-full">
            <h1 className="cursor-pointer text-white text-base font-bold font-Roboto">
              Company info
            </h1>
            <ul className="mt-4 flex flex-col gap-y-2">
              <li className="cursor-pointer font-Roboto text-sm text-[#ABABAB] hover:text-[#fff]">
                Affiliate Plan
              </li>
              <li className="cursor-pointer font-Roboto text-sm text-[#ABABAB] hover:text-[#fff]">
                Questionnaire
              </li>
              <li className="cursor-pointer font-Roboto text-sm text-[#ABABAB] hover:text-[#fff]">
                Shipping & Delivery
              </li>
              <li className="cursor-pointer font-Roboto text-sm text-[#ABABAB] hover:text-[#fff]">
                Terms and Conditions
              </li>
              <li className="cursor-pointer font-Roboto text-sm text-[#ABABAB] hover:text-[#fff]">
                About us
              </li>
            </ul>
          </div>
        </div>
        <div className="SmartphonesSm:hidden TabletSm:flex flex-col w-[320px]">
          <p className="cursor-pointer font-Roboto text-sm text-[#ABABAB] hover:text-[#fff]">
            Subscribe to our newsletter and get 10% off your first purchase
          </p>
          <div className="mt-4 flex gap-x-4">
            <input
              placeholder="Your email address"
              className="rounded-xl px-4 w-[210px] h-[42px] font-Roboto py-3 text-[12px]"
              type="text"
            />
            <button className="bg-white px-4 py-3 text-[#181818] font-Roboto font-semibold text-sm rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Additional information */}
      <div className="text-white gap-x-[64px] mt-9 TabletSm:px-[32px] SmartphonesSm:hidden Tablet:hidden TabletSm:flex">
        <div className="w-[320px]">
          <h1 className="font-bold text-base">Help</h1>
          <ul className="flex flex-wrap mt-4 text-[#D7D7D7] text-xs gap-x-4 gap-y-2">
            <li>Privacy Policy</li>
            <li>Refund & Exchange</li>
            <li>Declaration</li>
            <li>Contact us</li>
            <li>Affiliate program</li>
            <li>Shipping & Delivery</li>
            <Link to="./FAQ">
              <li>FAQ</li>
            </Link>
          </ul>
        </div>
        <div className="w-[320px]">
          <h1 className="font-bold text-base">Company info</h1>
          <ul className="flex flex-wrap mt-4 text-[#D7D7D7] text-xs gap-x-4 gap-y-2">
            <li>Affiliate Plan</li>
            <li>Questionnaire</li>
            <li>Shipping & Delivery</li>
            <li>Terms and Conditions</li>
            <li>About us</li>
          </ul>
        </div>
      </div>

      <CopyRight />
    </div>
  );
};

export default Footer;
