import React from "react";
import { Image1 } from "../../../Assets/Images";

const Gifts = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center SmartphonesSm:h-[484px] Tablet:h-[580px] PC:h-[1000px]">
      <img
        className="absolute SmartphonesSm:top-[88px] TabletSm:top-[174px] w-full SmartphonesSm:object-cover TabletSm:object-cover SmartphonesSm:h-[484px] Tablet:h-[580px] PC:h-[1000px]"
        src={Image1}
        alt="Image Gifts"
      />
    </div>
  );
};

export default Gifts;
