import { useLayoutEffect } from "react";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";
import Similar from "./Similar";
import DescriptionTablet from "./DescriptionTablet";
import { useParams } from "react-router-dom";
import Specifications from "./ProductRight/Specifications";

const Product = () => {
  let { itemId } = useParams();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [itemId]);
  return (
    <div className="pb-[72px] SmartphonesSm:mx-[20px] Smartphones:mx-12 TabletSm:mx-0">
      <div className="h-full bg-[#fff] TabletSm:mt-[72px] flex TabletSm:flex-nowrap SmartphonesSm:flex-wrap TabletSm:px-[50px] Tablet:px-[50px] PC:px-[220px] font-Roboto">
        <ProductLeft />
        <ProductRight />
      </div>
      <Specifications />
      <DescriptionTablet />
      <Similar />
    </div>
  );
};

export default Product;
