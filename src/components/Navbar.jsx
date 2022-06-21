import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import profilePicture from "../images/image-avatar.png";
import logo from "../images/logo.svg";

const Navbar = ({ handleClick, numberOfSelectedProducts }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="p-6 md:p-0 w-full bg-white">
      <nav className="md:max-w-[1200px] xl:max-w-[1400px] flex items-center justify-between mx-auto md:border-b-2 md:py-10 py-0">
        <div className="flex items-center gap-4">
          <GiHamburgerMenu
            onClick={handleNav}
            className="lg:hidden text-2xl hover:text-primary cursor-pointer"
          />
          <div>
            <img className="w-full block" src={logo} alt="logo" />
          </div>
        </div>
        {/* Desktop List Items */}
        <ul className="hidden lg:flex lg:items-center gap-6 mr-auto ml-20 text-grayishBlue text-md">
          <li className="custom-list-border cursor-pointer hover:text-veryDarkBlue">
            Collections
          </li>
          <li className="custom-list-border cursor-pointer hover:text-veryDarkBlue">
            Men
          </li>
          <li className="custom-list-border cursor-pointer hover:text-veryDarkBlue">
            Women
          </li>
          <li className="custom-list-border cursor-pointer hover:text-veryDarkBlue">
            About
          </li>
          <li className="custom-list-border cursor-pointer hover:text-veryDarkBlue">
            Contact
          </li>
        </ul>
        {/* Mobile List items */}
        <div
          className={
            isNavOpen
              ? "lg:hidden fixed top-0 left-0 w-full h-full bg-black/70 duration-150 ease-in z-[110]"
              : "lg:hidden fixed top-0 -left-[110%] w-full h-full bg-black/70 duration-150 ease-in z-[110]"
          }
        >
          <div className="bg-white h-full w-[70%] space-y-20 p-6">
            <AiOutlineClose
              onClick={handleNav}
              className="text-3xl cursor-pointer hover:text-primary"
            />
            <ul className="flex flex-col items-start text-left font-bold text-2xl space-y-6">
              <li className="cursor-pointer">Collections</li>
              <li className="cursor-pointer">Men</li>
              <li className="cursor-pointer">Women</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-6 md:gap-10">
          <div onClick={handleClick} className="relative">
            <AiOutlineShoppingCart className="text-4xl text-grayishDarkBlue cursor-pointer" />
            <div
              className={
                numberOfSelectedProducts
                  ? "absolute -top-1 -right-3 bg-primary text-[.6rem] text-white font-bold py-[.15rem] px-3 rounded-full pointer-events-none"
                  : null
              }
            >
              {numberOfSelectedProducts}
            </div>
          </div>
          <div className="border-2 border-transparent hover:border-primary rounded-full cursor-pointer">
            <img
              className="w-full h-10 block"
              src={profilePicture}
              alt="user profile"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
