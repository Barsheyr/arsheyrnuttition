import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { cricket, headerLeft, headerRight } from "../assets/images";

const Header = () => {
  return (
    <header className="align-element py-2">
      <section className="bg-darkGreen20 py-1 rounded-lg shadow-xl flex flex-row justify-between items-center">
        <div className="hidden lg:flex">
          <img src={headerLeft} alt="" />
        </div>
        <div className="flex items-center justify-center gap-3">
          <img src={cricket} alt="" />
          <h1 className="text-white">
            Join Our Personalized Nutrition Demo For Free
          </h1>
          <FaArrowRight color="white" />
        </div>
        <div className="hidden lg:flex">
          <img src={headerRight} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
