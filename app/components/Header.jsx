"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const headerItem = [
  "About",
  "Products",
  "Services",
  "Clients",
  "Get a Quote",
  "Contact",
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`w-full ${isOpen && "h-screen" } md:h-10 md:px-20 px-5 lg:px-10 py-5 md:py-10 flex md:flex-row flex-col md:justify-around justify-start md:items-center items-start  layout text-black shadow-md border-b border-gray-300`}>
      <div>
        <h1 className="font-bold text-xl">Nepal MedSupply Hub</h1>
      </div>
      <div className="">
        <ul className=" hidden md:flex space-x-4 lg:space-x-6">
          {headerItem.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-md text-gray-700 hover:text-black"
            >
              {item}
            </li>
          ))}
        </ul>

      </div>
        {/* for mobile */}

      <div className="md:w-auto w-full ">
        {isOpen && (
          <ul className="w-full mt-6  flex md:hidden flex-col space-y-4 ">
            {headerItem.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer text-md text-gray-700 hover:text-black"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        <button
          className={`md:w-32 ${!isOpen && "hidden"}
    md:block ${
   isOpen ? " mt-6 w-full" : ""
 } h-10 primary rounded-xl text-white`}
        >
          get a quote
        </button>

        {/* {isOpen ? (
          <button className="md:w-32 w-full mt-6 h-10 primary rounded-xl text-white">
            get a quote
          </button>
        ) : (
          <button className="hidden md:block md:w-32 w-full h-10 primary rounded-xl text-white">
            get a quote
          </button>
        )} */}

        {isOpen ? (
          <GrClose
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden  text-2xl absolute right-2 top-6 cursor-pointer hover:rotate-90"
          />
        ) : (
          <GiHamburgerMenu
            onClick={toggleMenu}
            className="md:hidden absolute right-2 top-6 text-2xl cursor-pointer"
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
