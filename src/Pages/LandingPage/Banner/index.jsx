import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { Image2, Image3, BannerImg } from "../../../Assets/Images";

// Variants for framer motion
const variants = {
  enter: (direction) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

// Buttons for navigation
const NavButton = ({ onClick, children, additionalClass }) => (
  <button
    className={`z-10 bg-white rounded-full relative ${additionalClass}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const images = [Image2, Image3, BannerImg];

const Banner = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) =>
    setPage([page + newDirection, newDirection]);

  return (
    <div className="example-container SmartphonesSm:hidden TabletSm:flex TabletSm:mt-[86px] SmartphonesSm:mt-5 Smartphones:mt-[61px] Tablet:mt-[96px] PC:mt-[50px] SmartphonesSm:h-[113px] TabletSm:h-[237px] Tablet:h-[320px] PC:h-[400px]">
      <div className="flex items-center justify-center overflow-hidden">
        <NavButton
          onClick={() => paginate(-1)}
          additionalClass="SmartphonesSm:left-0 TabletSm:left-[7px]"
        >
          <MdKeyboardDoubleArrowLeft className="SmartphonesSm:text-[20px] TabletSm:text-[30px] Tablet:text-[35px] PC:text-[45px]" />
        </NavButton>

        <AnimatePresence initial={false} custom={direction}>
          <div className="PC:w-[1120px] PC:h-[400px] Tablet:h-[320px] Tablet:w-[1000px] TabletSm:h-[237px] TabletSm:w-[700px] object-cover rounded-[32px]"></div>
          <motion.img
            className="absolute PC:w-[1120px] PC:h-[400px] Tablet:h-[320px] Tablet:w-[1000px] TabletSm:h-[237px] TabletSm:w-[700px] object-cover TabletSm:rounded-[32px]"
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>

        <NavButton
          onClick={() => paginate(1)}
          additionalClass="SmartphonesSm:right-0 TabletSm:right-[7px]"
        >
          <MdKeyboardDoubleArrowRight className="SmartphonesSm:text-[20px] TabletSm:text-[30px] Tablet:text-[35px] PC:text-[45px]" />
        </NavButton>
      </div>
    </div>
  );
};

export default Banner;
