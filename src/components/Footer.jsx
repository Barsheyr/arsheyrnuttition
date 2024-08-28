import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../assets/images";
import NavLinks from "../components/Navigation/NavLinks";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-darkGreen15 text-white py-20">
      <div className="flex lg:flex-row flex-col justify-between align-element">
        <div className="items-center gap-20 py-2">
          {/* Title */}
          <NavLink to="/" className="flex flex-row items-center gap-2">
            <img
              src={Logo}
              alt=""
              className="bg-darkGreen15 rounded-full w-7"
            />
            <h1 className="text-xl text-white font-bold tracking-wide">
              Nutritionist
            </h1>
          </NavLink>
        </div>

        <div className="">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>

        <div className="gap-5">
          <p> Got To Top </p>
          <FaRegArrowAltCircleUp size={30} />
        </div>
      </div>

      <div className="bg-darkGreen25 align-element flex flex-col lg:flex-row items-center justify-between py-10 mt-10 rounded-md">
        <div className="flex flex-col lg:flex-row  justify-between gap-10">
          <div className="flex items-center gap-3 border border-green-700 p-2 rounded-md">
            <MdEmail />
            <p>hello@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 border border-green-700 p-2 rounded-md">
            <FaPhone color="" />
            <p>+91 382923782947</p>
          </div>
          <div className="flex items-center gap-3 border border-green-700 p-2 rounded-md">
            <FaLocationDot />
            <p>Somewhere in the world</p>
          </div>
        </div>
        <div>2024, Nutritionist. All right reserved</div>
      </div>
    </section>
  );
};

export default Footer;
