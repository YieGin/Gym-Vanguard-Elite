import React, { useLayoutEffect } from "react";
import Gifts from "./Gifts";
import Banner from "./Banner";
import Categories from "./Categories";
import "./style.css";
const LandingPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#F0F0F0] h-full">
      <Gifts />
      <Banner />
      <Categories />
    </div>
  );
};

export default LandingPage;
