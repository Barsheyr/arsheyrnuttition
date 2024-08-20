import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/images";
import NavLinks from "../Navigation/NavLinks";

const Navbar = () => {
  return (
    <nav className="mt-5">
      <div className="navbar align-element">
        <div className="navbar-start flex items-center gap-20 py-2">
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

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
