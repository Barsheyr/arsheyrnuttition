import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/images";
import NavLinks from "../Navigation/NavLinks";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mt-5">
      <div className="navbar align-element">
        <div className="navbar-start py-2">
          {/* Title */}
          <NavLink
            to="/"
            className="hidden lg:flex flex-row items-center gap-2 order-2"
          >
            <img
              src={Logo}
              alt=""
              className="bg-darkGreen15 rounded-full w-7"
            />
            <h1 className="text-xl text-white font-bold tracking-wide">
              Nutritionist
            </h1>
          </NavLink>

          {/* DROPDOWN */}
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-white bg-white hover:bg-white lg:hidden"
            >
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-500 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
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
