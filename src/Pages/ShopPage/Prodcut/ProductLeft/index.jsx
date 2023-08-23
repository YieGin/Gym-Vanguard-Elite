import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useParams } from "react-router-dom";

import Lifting from "../../../LandingPage/Categories/Lifting/LiftingData";
import Shorts from "../../../LandingPage/Categories/Shorts/ShortsData";
import Jackets from "../../../LandingPage/Categories/Jackets/JacketsData";
import Stringers from "../../../LandingPage/Categories/Stringers/StringersData";

const ProductLeft = () => {
  const { itemId, category } = useParams();

  const categoryDataMap = {
    lifting: Lifting,
    shorts: Shorts,
    jackets: Jackets,
    stringers: Stringers,
  };

  const currentData = categoryDataMap[category] || [];
  const selectedItem = currentData.find((item) => item.id === parseInt(itemId));
  const Images = selectedItem
    ? [selectedItem.Image1, selectedItem.Image2, selectedItem.Image3]
    : [];

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [selectedImage, setSelectedImage] = useState(Images[0]);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className="flex flex-col TabletSm:w-[100%] SmartphonesSm:w-[100%] SmartphonesSm:mt-5 TabletSm:mt-3 TabletSm:mr-5 Tablet:mr-10">
      <div className="flex flex-col SmartphonesSm:items-center Smartphones:items-start">
        <div className="flex gap-y-2 SmartphonesSm:flex-wrap-reverse Tablet:flex-nowrap gap-x-2 Smartphones:w-full SmartphonesSm:w-[90vw] TabletSm:w-[100%] justify-center">
          <div className="SmartphonesSm:w-full Tablet:w-[50%] flex Tablet:flex-col SmartphonesSm:flex-row Smartphones:gap-x-[6px] SmartphonesSm:gap-x-2 gap-y-0">
            {Images.map((image, i) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: inView ? i * 0.3 : 0,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className={hoveredIndex === i ? "border-2 border-red-600" : ""}
                key={i}
                onMouseOver={() => {
                  setSelectedImage(image);
                  setHoveredIndex(i);
                }}
              >
                <img
                  className="PC:h-[150px] PC:w-full Tablet:w-full Tablet:h-[150px] TabletSm:w-full TabletSm:h-[120px] SmartphonesSm:h-[80px] object-cover cursor-pointer"
                  src={image}
                  alt=""
                />
              </motion.div>
            ))}
          </div>
          <div>
            <motion.img
              ref={ref}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="PC:h-[450px] Tablet:h-[454px] TabletSm:w-[100vw] Smartphones:w-[100%] SmartphonesSm:h-[250px] TabletSm:h-[350px] object-cover"
              src={selectedImage}
              alt=""
            />
            <p className="text-center mt-2 font-bold SmartphonesSm:hidden Tablet:flex items-center justify-center">
              Roll over image to zoom in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLeft;
