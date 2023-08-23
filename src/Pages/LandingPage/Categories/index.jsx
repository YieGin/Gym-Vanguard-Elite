import React from "react";
import Jackets from "./Jackets";
import Stringers from "./Stringers";
import Lifting from "./Lifting";
import Shorts from "./Shorts";
import PhoneJackets from "./Phone/PhoneJackets";
import PhoneStringers from "./Phone/PhoneStringers";
import PhoneLifting from "./Phone/PhoneLifting";
import PhoneShorts from "./Phone/PhoneShorts";

const Categories = () => {
  return (
    <>
      <div className="SmartphonesSm:hidden TabletSm:flex flex-col pb-[72px]">
        <Jackets />
        <Stringers />
        <Lifting />
        <Shorts />
      </div>
      <div className="SmartphonesSm:flex flex-col TabletSm:hidden">
        <PhoneJackets />
        <PhoneStringers />
        <PhoneLifting />
        <PhoneShorts />
      </div>
    </>
  );
};

export default Categories;
