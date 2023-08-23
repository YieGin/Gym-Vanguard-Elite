import React from "react";
import { useParams } from "react-router-dom";
import Lifting from "../../../LandingPage/Categories/Lifting/LiftingData";
import Shorts from "../../../LandingPage/Categories/Shorts/ShortsData";
import Jackets from "../../../LandingPage/Categories/Jackets/JacketsData";
import Stringers from "../../../LandingPage/Categories/Stringers/StringersData";
const DescriptionTablet = () => {
  const { category, itemId } = useParams();
  // Get the appropriate dataset based on the category
  const categoryDataMap = {
    lifting: Lifting,
    shorts: Shorts,
    jackets: Jackets,
    stringers: Stringers,
  };
  const data = categoryDataMap[category] || [];
  const selectedItem = data.find((item) => item.id === parseInt(itemId));
  return (
    <div className="flex SmartphonesSm:flex-col TabletSm:flex-row gap-x-8 TabletSm:px-10">
      <div className="Tablet:hidden flex-col SmartphonesSm:flex TabletSm:w-[60%]">
        <h1 className="text-[#181818] font-bold text-[20px] mt-[72px]">
          Specifications
        </h1>
        <div className="flex flex-col">
          <ul className="flex border-b-[2px] border-zinc-200 Smartphones:w-[100%] pb-2 mt-5">
            <p className="text-[#181818] font-bold SmartphonesSm:text-[14px] TabletSm:text-[16px] SmartphonesSm:w-[50%] Smartphones:w-[60%]">
              Features
            </p>
            <p className="text-[#ABABAB] SmartphonesSm:text-[14px] Tablet:text-[16px]">
              {selectedItem.Features}
            </p>
          </ul>
          <ul className="flex border-b-[2px] border-zinc-200 Smartphones:w-[100%] pb-2 mt-5">
            <p className="text-[#181818] font-bold TabletSm:text-[16px] SmartphonesSm:w-[50%] Smartphones:w-[60%]">
              Function
            </p>
            <p className="text-[#ABABAB] SmartphonesSm:text-[14px] Tablet:text-[16px]">
              {selectedItem.Function}
            </p>
          </ul>
          <ul className="flex border-b-[2px] border-zinc-200 Smartphones:w-[100%] pb-2 mt-5">
            <p className="text-[#181818] font-bold SmartphonesSm:text-[14px] TabletSm:text-[16px] SmartphonesSm:w-[50%] Smartphones:w-[60%]">
              Frequency
            </p>
            <p className="text-[#ABABAB] SmartphonesSm:text-[14px] Tablet:text-[16px]">
              {selectedItem.Frequency}
            </p>
          </ul>
          <ul className="flex border-b-[2px] border-zinc-200 Smartphones:w-[100%] pb-2 mt-5">
            <p className="text-[#181818] font-bold SmartphonesSm:text-[14px] TabletSm:text-[16px] SmartphonesSm:w-[50%] Smartphones:w-[60%]">
              Material
            </p>
            <p className="text-[#ABABAB] SmartphonesSm:text-[14px] Tablet:text-[16px]">
              {selectedItem.Material}
            </p>
          </ul>
          <ul className="flex border-b-[2px] border-zinc-200 Smartphones:w-[100%] pb-2 mt-5">
            <p className="text-[#181818] font-bold SmartphonesSm:text-[14px] TabletSm:text-[16px] SmartphonesSm:w-[50%] Smartphones:w-[60%]">
              Waterproof
            </p>
            <p className="text-[#ABABAB] SmartphonesSm:text-[14px] Tablet:text-[16px]">
              {selectedItem.Waterproof}
            </p>
          </ul>
          <ul className="flex border-b-[2px] border-zinc-200 Smartphones:w-[100%] pb-2 mt-5">
            <p className="text-[#181818] font-bold SmartphonesSm:text-[14px] TabletSm:text-[16px] SmartphonesSm:w-[50%] Smartphones:w-[60%]">
              Charging time
            </p>
            <p className="text-[#ABABAB] SmartphonesSm:text-[14px] Tablet:text-[16px]">
              {selectedItem.ChargingTime}
            </p>
          </ul>
          <ul className="flex border-b-[2px] border-zinc-200 Smartphones:w-[100%] pb-2 mt-5">
            <p className="text-[#181818] font-bold SmartphonesSm:text-[14px] TabletSm:text-[16px] SmartphonesSm:w-[50%] Smartphones:w-[60%]">
              Run time
            </p>
            <p className="text-[#ABABAB] SmartphonesSm:text-[14px] Tablet:text-[16px]">
              {selectedItem.RunTime}
            </p>
          </ul>
          <ul className="flex border-b-[2px] border-zinc-200 Smartphones:w-[100%] pb-2 mt-5">
            <p className="text-[#181818] font-bold SmartphonesSm:text-[14px] TabletSm:text-[16px] SmartphonesSm:w-[50%] Smartphones:w-[60%]">
              Size
            </p>
            <p className="text-[#ABABAB] SmartphonesSm:text-[14px] Tablet:text-[16px]">
              {selectedItem.size}
            </p>
          </ul>
          <ul className="flex border-b-[2px] border-zinc-200 Smartphones:w-[100%] pb-2 mt-5">
            <p className="text-[#181818] font-bold SmartphonesSm:text-[14px] TabletSm:text-[16px] SmartphonesSm:w-[50%] Smartphones:w-[60%]">
              Insertable length
            </p>
            <p className="text-[#ABABAB] SmartphonesSm:text-[14px] Tablet:text-[16px]">
              {selectedItem.InsertableLength}
            </p>
          </ul>
          <ul className="flex border-b-[2px] border-zinc-200 Smartphones:w-[100%] pb-2 mt-5">
            <p className="text-[#181818] font-bold SmartphonesSm:text-[14px] TabletSm:text-[16px] SmartphonesSm:w-[50%] Smartphones:w-[60%]">
              Weight
            </p>
            <p className="text-[#ABABAB] SmartphonesSm:text-[14px] Tablet:text-[16px]">
              {selectedItem.Weight}
            </p>
          </ul>
        </div>
      </div>
      <div className="mt-[72px] font-Roboto Tablet:hidden flex-col SmartphonesSm:flex TabletSm:w-[50%]">
        <h1 className="text-[#181818] font-bold text-[20px] mb-0">
          Description
        </h1>
        <ul className="flex flex-col px-2">
          <li className="text-[#ABABAB] SmartphonesSm:text-[14px] Tablet:text-[16px]">
            <span className="text-4xl">.</span> {selectedItem.Description1}
          </li>
          <li className="text-[#ABABAB] SmartphonesSm:text-[14px] Tablet:text-[16px]">
            <span className="text-4xl">.</span> {selectedItem.Description2}
          </li>
          <li className="text-[#ABABAB] SmartphonesSm:text-[14px] Tablet:text-[16px]">
            <span className="text-4xl">.</span> {selectedItem.Description3}
          </li>
          <li className="text-[#ABABAB] SmartphonesSm:text-[14px] Tablet:text-[16px]">
            <span className="text-4xl">.</span> {selectedItem.Description4}
          </li>
          <li className="text-[#ABABAB] SmartphonesSm:text-[14px] Tablet:text-[16px]">
            <span className="text-4xl">.</span> {selectedItem.Description5}
          </li>
        </ul>
        <p className="text-[#ABABAB] SmartphonesSm:text-[14px] Tablet:text-[16px] mt-5">
          {selectedItem.Description}
        </p>
      </div>
    </div>
  );
};

export default DescriptionTablet;
